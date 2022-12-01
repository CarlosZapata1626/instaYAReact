import { useParams } from "react-router-dom";
const Consulta = ()=>{
    const {id} = useParams()
    return(
        <div>
            <h1>#{id} paquete</h1>
        </div>
        );
}
export default Consulta;