import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value);

    setCount(Math.max(value + count, 0));
  };
  return {
    count,
    increaseBy,
  };
};
