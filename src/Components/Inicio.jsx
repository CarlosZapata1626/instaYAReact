import {useForm} from "react-hook-form"
const Inicio = ()=>{
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => {console.log(data)}
    return(
        <div>
            <form className="form-inicial" onSubmit={handleSubmit(customSubmit)}>
                <h1 className="instaYA_logo">instaYa</h1>
                <p>Ya son 40 años de entregar vidas, sueños, amores, ilusiones y esperanzas</p>
                <div className="ingrese_orden">
                <div className="form-login__item">
                    <input 
                    {...register("Usuario", { required: true})}
                    aria-invalid={errors.Usuario ? "true" : "false"}
                    placeholder="Usuario" type="text" />
                    {errors.Usuario && <p role>Campo requerido!</p>}
                </div>
                <div className="form-login__item">
                    <a className="botonsRegister" to="/Register">consultar orden</a>
                </div>
                </div>
            </form>
        </div>
        );
}
export default Inicio;