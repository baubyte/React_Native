import { useState } from "react"
interface Options {
    initialValue?: number;
}

const useCounter = (options: Options) => {
    const { initialValue = 0} = options;
    const [counter, setCounter] = useState<number>(initialValue);
    const increaseBy = (value: number) => {
        const newValue = counter + value;
        if (newValue < 0) return; // Prevent negative values
        setCounter(newValue);
    }
    return {
        //Properties
        counter,
        //Methods
        increaseBy
    }
}

export default useCounter