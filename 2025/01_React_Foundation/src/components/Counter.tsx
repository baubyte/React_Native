import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState<number>(10);
    const increaseBy = (value: number) => {
        setCounter(counter + value);
    }
  return (
    <>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
