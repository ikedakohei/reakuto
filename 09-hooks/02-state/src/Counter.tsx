import { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button color="red" onClick={reset}>
          Reset
        </button>
        <button color="green" onClick={increment}>
          +1
        </button>
      </div>
    </>
  );
};

export default Counter;
