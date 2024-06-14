import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
	const handleClick = (event) => {
		setCount(0);
		event.currentTarget.blur();
	}

  return (
    <button onClick={handleClick} className="cursor-pointer opacity-30 hover:opacity-50 focus:opacity-50 transition-all duration-[0.4s]">
      <ResetIcon className="text-[#1d2507] h-10 w-10"/>
    </button>
  );
}
