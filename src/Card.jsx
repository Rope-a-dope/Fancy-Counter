import { useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";
import { useEffect } from "react";
import { cn } from "./utils";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        count > 4 ? setCount(5) : setCount(count + 1);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={cn("bg-[#bef227] w-full h-full sm:w-[476px] sm:h-[615px] shadow-[0_25px_121px_rgba(0,0,0,0.5)] rounded-none sm:rounded-xl flex flex-col items-center transition-all duration-[0.4s]", { "bg-[#a3d11b]": locked })}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
