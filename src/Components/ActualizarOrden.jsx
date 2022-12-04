import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Ordenes from "./ordenes";
import axios from "axios"
import dateFormat from "dateformat"

const ActualizarOrden = () => {
    const { id } = useParams()
    const [orden, setOrden] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:5000/ordenes/" + id)
            .then(response => {
                console.log(response.data)
                const fecha = response.data.fecha
                response.data['fecha'] = dateFormat(fecha, "yyyy-mm-dd")
                setOrden(response.data)
            })
    }, [])
    return(
        <>
            {orden ? (
                <>
                    <h3>Información de envío</h3>
                    <p>Por favor, Actualice datos de la orden #{id}:</p>
                    <Ordenes data={orden} ordenId={id}/>
                 </>
            ) : ''}
        </>
        );
}
export default ActualizarOrden;