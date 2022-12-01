import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"

const Register = () => {

    const navigate = useNavigate();
    const handleOnClick=()=>{
        navigate("/Paquetes")
    };

    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => {console.log(data)}
    
    return(
        <div class="containerRegister">
            <form className="containerRegister__form-register" onSubmit={handleSubmit(customSubmit)}>
                <h1>Registrate</h1>
                <div className="containerRegister__form-register__item">
                    <input 
                    {...register("Nombre", { required: true})}
                    aria-invalid={errors.Nombre ? "true" : "false"}
                    placeholder="Nombre" type="text" />
                    {errors.Nombre && <p role>Campo requerido!</p>}
                </div>
                <div className="containerRegister__form-register__item">
                    <input 
                    {...register("Usuario", { required: true})}
                    aria-invalid={errors.Usuario ? "true" : "false"}
                    placeholder="Usuario" type="text" />
                    {errors.Usuario && <p role>Campo requerido!</p>}
                </div>
                <div className="containerRegister__form-register__item">
                    <input 
                    {...register("Contraseña", { required: true })}
                    aria-invalid={errors.Contraseña ? "true" : "false"}
                    placeholder="Contraseña" type="password"/>
                    {errors.Contraseña && <p role>Campo requerido!</p>}
                </div>
                <div className="containerRegister__form-register__item">
                    <input 
                    {...register("Email", { required: true })}
                    aria-invalid={errors.Email ? "true" : "false"}
                    placeholder="Email" type="password"/>
                    {errors.Email && <p role>Campo requerido!</p>}
                </div>
                <div className="containerRegister__form-login__item">
                    <input type="submit" value="Registrarse" onClick={()=>handleOnClick()}/>
                </div>
                

            </form>
        </div>
    )
}

export default Register;