import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { cn } from "./utils";
export default function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        return prev < 1 ? 0 : prev - 1;
      }
      return prev > 4 ? 5 : prev + 1;
    });

    event.currentTarget.blur();
  };

  return (
    <button
      disabled={locked}
      className={cn(
        "flex-1 flex justify-center items-center cursor-pointer transition-all duration-[0.4s] hover:bg-[#212b06] focus:bg-[#212b06] first:border-r-[rgba(189,254,0,0.07)] first:border-r first:border-solid",
        {
          "border-l-[1px] border-l-[#455025]": type === "plus",
        }
      )}
      onClick={handleClick}
    >
      {type === "minus" ? (
        <MinusIcon className="text-[#bdfe00] opacity-90 h-10 w-10" />
      ) : (
        <PlusIcon className="text-[#bdfe00] opacity-90 h-10 w-10" />
      )}
    </button>
  );
}
