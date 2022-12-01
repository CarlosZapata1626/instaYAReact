import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import Ordenes from "./ordenes";
const CrearOrden = () => {
    
    return(
        <div>
        <h3>Información de envío</h3>
        <p>Por favor, ingrese los datos del paquete que desea enviar:</p>
        <Ordenes data={[]}/>
        </div>
    )
}

export default CrearOrden;