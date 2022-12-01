import { useParams } from "react-router-dom";
import Ordenes from "./ordenes";

const ordenData={
    id:1,
    fecha:'2022-12-12',
    ciudadEntrega: 'Medellin',
    direccionEntrega: 'calle123',
    estado:'en camino',
    hora:"15:00",
    ciudadOrigen:"Cartagena",
    peso:"20",
    ancho:"50",
    largo:"20",
    alto:"20",
    direccionOrigen:"call 9na",
    nombreDestinatario:"Carlos",
    ccDestinatario:"1111111"



}
const ActualizarOrden = ()=>{
    const {id} =useParams()

    return(
        <div>
        <h3>Información de envío</h3>
        <p>Por favor, Actualice sus datos de la orden #{id}:</p>
        <Ordenes data={ordenData}/>
        </div>
        );
}
export default ActualizarOrden;