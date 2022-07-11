import { FC, useEffect, useState } from "react";

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  });

  return (
    <>
      <div>time: {timeLeft}</div>
      <button color="red" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default Timer;
