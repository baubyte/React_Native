
export const Funciones = () => {
    /**
     * 
     * @param a number
     * @param b number
     * @returns number
     */
    const sumar = (a: number, b: number): number => a + b;

    return (
        <>
            <h3>
                Funciones
            </h3>
            <span>El Resultado es: {sumar(2, 4)}</span>
        </>
    )
}
