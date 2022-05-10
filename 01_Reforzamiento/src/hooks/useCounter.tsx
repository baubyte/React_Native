import { useState } from 'react'

export const useCounter = (numInitial:number = 0) => {

    const [value, setValue] = useState<number>(numInitial);
    const acumular = (numero: number) => {
        setValue(value + numero)
    }
    return {
        value,
        acumular
    }
}
