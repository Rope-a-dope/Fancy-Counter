import { useLocked } from "./stores/counterStore";

export default function Title() {
  const locked = useLocked();

  return (
    <h1 className="opacity-60 uppercase tracking-[1px] w-[200px] text-center leading-[0.9] font-medium text-[32px] mt-[100px] sm:mt-[60px]">
      {locked ? (
        <span>
          Limit! Buy <b>Pro </b>for &gt;5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
