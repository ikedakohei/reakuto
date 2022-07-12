import { FC } from "react";
import "./Timer.css";

type Props = {
  timeLeft?: number;
  isPrime?: boolean;
  reset?: () => void;
};

const Timer: FC<Props> = ({
  timeLeft = 0,
  isPrime = false,
  reset = () => undefined,
}) => (
  <>
    <div className="number-board">
      time:
      <span className={isPrime ? "prime-number" : undefined}>{timeLeft}</span>
    </div>
    <button color="red" onClick={reset}>
      Reset
    </button>
  </>
);

export default Timer;
