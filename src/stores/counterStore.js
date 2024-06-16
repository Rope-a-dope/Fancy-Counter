import { create } from "zustand";
import { initialCount } from "../lib/constants";

export const useCounterStore = create((set, get) => ({
  count: initialCount,
  actions: {
    increaseCount: () => set((state) => ({ count: state.count === 5 ? 5 : state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count == 0 ? 0 : state.count - 1 })),
    resetCount: () => set({ count: initialCount }),
    getLocked: () => { return get().count === 5 },
  },
}));

export const useCount = () => useCounterStore((state) => state.count);
export const useCounterActions = () => useCounterStore((state) => state.actions);
export const useLocked = () => useCounterStore((state) => state.actions.getLocked());
