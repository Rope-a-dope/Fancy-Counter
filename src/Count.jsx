import { useCount } from "./stores/counterStore";

export default function Count() {
  const count = useCount();

  return <p className="text-[#1d2507] text-[200px] font-semibold mt-2.5">{count}</p>;
}