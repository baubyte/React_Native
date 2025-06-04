
export const TiposBasicos = () => {
    const nombre: string = 'BAUBYTE';
    const edad: number = 32;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Volar', 'Velocidad'];
    return (
        <>
            <h3>
                Tipos Básicos
            </h3>
                {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No Activo'}
                <br></br>
                {poderes.join(', ')}
        </>
    )
}