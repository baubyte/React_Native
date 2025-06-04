import useCounter from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { counter, increaseBy } = useCounter({ initialValue: 5 });
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
