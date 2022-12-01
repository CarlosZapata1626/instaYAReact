import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { NavLink} from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();
    const handleOnClick=()=>{
        navigate("/Paquetes")
    };
   
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => {console.log(data)}
    
    return(
        <form className="form-login" onSubmit={handleSubmit(customSubmit)}>
            <div className="form-login__item">
            <input 
            {...register("Usuario", { required: true})}
            aria-invalid={errors.Usuario ? "true" : "false"}
            placeholder="Usuario" type="text" />
            {errors.Usuario && <p role>Campo requerido!</p>}
            </div>
            <div className="form-login__item">
            <input 
            {...register("Contraseña", { required: true })}
            aria-invalid={errors.Contraseña ? "true" : "false"}
            placeholder="Contraseña" type="password"/>
            {errors.Contraseña && <p role>Campo requerido!</p>}
            </div>
            <div className="form-login__item">
            <input type="submit" value="Iniciar sesion" onClick={()=>handleOnClick()}/>
            </div>
            <div className="form-login__item">
                <NavLink className="botonsRegister" to="/Recuperar">Olvidaste tu contraseña?</NavLink>
            </div>
            <div className="form-login__item">
                <NavLink className="botonsRegister" to="/Register">Registrarse</NavLink>
            </div>

        </form>
    )
}
export default Login;

