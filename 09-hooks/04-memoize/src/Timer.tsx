import { FC, useState, useEffect, useMemo, useCallback, useRef } from "react";
import { getPrimes } from "./utils/math-tool";
import "./Timer.css";

type TimerProps = {
  limit: number;
};

const Timer: FC<TimerProps> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const timerId = useRef<NodeJS.Timeout>();
  const reset = useCallback(() => setTimeLeft(limit), [limit]);
  const tick = () => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const clearTimer = () => {
      if (timerId.current) clearInterval(timerId.current);
    };

    reset();
    clearTimer();
    timerId.current = setInterval(tick, 1000);

    return clearTimer;
  }, [limit, reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return (
    <>
      <div className="number-board">
        time:
        <span
          className={primes.includes(timeLeft) ? "prime-number" : undefined}
        >
          {timeLeft}
        </span>
      </div>
      <button color="red" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default Timer;
