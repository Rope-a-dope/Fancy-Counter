import { useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useCounterActions, useLocked } from "./stores/counterStore";
import { cn } from "./utils";

export default function Card() {
  const locked = useLocked();
  const { increaseCount } = useCounterActions();

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code !== "Space") {
        return;
      }
      increaseCount();
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [increaseCount]);

  return (
    <div
      className={cn(
        "bg-[#bef227] w-full h-full sm:w-[476px] sm:h-[615px] shadow-[0_25px_121px_rgba(0,0,0,0.5)] rounded-none sm:rounded-xl flex flex-col items-center transition-all duration-[0.4s]",
        { "bg-[#a3d11b]": locked }
      )}
    >
      <Title />
      <Count />
      <ResetButton />
      <ButtonContainer>
        <CountButton type="minus" />
        <CountButton type="plus" />
      </ButtonContainer>
    </div>
  );
}
