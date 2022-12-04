import{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { NavLink,Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import axios from "axios"



  const labels=[
    "# Servicio",
    "Fecha",
    "Ciudad entrega",
    "Dirección entreda",
    "Estado",
    "Action"
  ]

const Paquetes = ()=>{
    
    const [ordenes, setOrdenes]= useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(()=>{
      const userId= "63880a8c493f62ecb6cd607b"
      axios
          .get("http://localhost:5000/ordenes?userId=" + userId)
          .then(response => {
            console.log(response.data)
            setOrdenes(response.data)
            })
    },[update])
const deleteClick= (ordenId) =>{
  axios
            .delete("http://localhost:5000/ordenes/delete/" + ordenId)
            .then(response => {
                console.log(response.data)
                setUpdate(!update)
            })
}

    return(
        <div className="table-responsive">
        <div className='CrearUnaOrden'>
        <Link to='/CrearOrden'>Crear una orden</Link>
        </div>
        <table className="table table-bordered border-primary">
          <thead className="table-primary">
            <tr>
              {labels.map((label,index)=>{
              return(<th key={index}scope="col">{label}</th>
              )})}
            </tr>            
          </thead>
          <tbody>
            {ordenes !== null? ordenes.map((orden,index)=>{
              return (
              <tr key={index}>
                        <th scope="row">
                          <Link to={"/Consulta/" + orden._id}>{index +1}</Link>
                          </th>
                        <td>{orden.fecha}</td>
                        <td>{orden.ciudadEntrega}</td>
                        <td>{orden.direccionEntrega}</td>
                        <td>{orden.estado}</td>
                        <td className="d-flex gap-2 justify-content-center">
                          <Link className="btn btn-success" to={'/Consulta/'+orden._id+'/ActualizarOrden'}>editar</Link>
                          <a className="btn btn-danger" onClick={()=>deleteClick(orden._id)}>Eliminar</a>
                        </td>
                      </tr>)
            }):''}
          </tbody>
        
        </table>
      </div>

   
        );
}
export default Paquetes;