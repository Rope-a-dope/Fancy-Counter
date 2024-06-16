import { ResetIcon } from "@radix-ui/react-icons";
import { useCounterActions } from "./stores/counterStore";

export default function ResetButton() {
  const { resetCount } = useCounterActions();
	const handleClick = (event) => {
		resetCount();
		event.currentTarget.blur();
	}

  return (
    <button onClick={handleClick} className="cursor-pointer opacity-30 hover:opacity-50 focus:opacity-50 transition-all duration-[0.4s]">
      <ResetIcon className="text-[#1d2507] h-10 w-10"/>
    </button>
  );
}
