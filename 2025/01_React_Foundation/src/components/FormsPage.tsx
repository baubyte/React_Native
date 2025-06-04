import { useForm } from "react-hook-form"
type FormInputs = {
    email: string;
    password: string;
};
export const FormsPage = () => {
    const { register, handleSubmit,formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'baubyte@example.com',
            password: 'Abc123'
        },

    });
    const onSubmit = (data: FormInputs) => {
        console.log(data);
    };
    watch((value, { name, type }) => {
        console.log('watch', value, name, type);
    });
    return (
        <>
            <h3>Formularios</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" placeholder="Email" {...register('email', { required: true })} />
                    <input type="password" placeholder="Password" {...register('password', { required: true })} />
                    <button type="submit">Ingresar</button>
                </div>
            </form>
            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}
