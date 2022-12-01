import{useState} from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { NavLink,Link} from "react-router-dom"
import { useParams } from "react-router-dom";
const Ordenes=[
  {
    id:1,
    fecha:'2022-12-12',
    ciudadEntrega: 'Medellin',
    direccionEntrada: 'calle123',
    Estado:'en camino'

  },
  {
    id:2,
    fecha:'2022-12-12',
    ciudadEntrega: 'Bogota',
    direccionEntrada: 'calle123',
    Estado:'en camino'

  },
  {
    id:3,
    fecha:'2022-12-12',
    ciudadEntrega: 'Medellin',
    direccionEntrada: 'calle123',
    Estado:'en camino'
    

  },]

  const labels=[
    "# Servicio",
    "Fecha",
    "Ciudad entrega",
    "Dirección entreda",
    "Estado",
    "Action"
  ]

const Paquetes = ()=>{
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
            {Ordenes.map((orden,index)=>{
              return (
              <tr key={index}>
                        <th scope="row">
                          <Link to={"/Consulta/" + orden.id}>{orden.id}</Link>
                          </th>
                        <td>{orden.fecha}</td>
                        <td>{orden.ciudadEntrega}</td>
                        <td>{orden.direccionEntrada}</td>
                        <td>{orden.Estado}</td>
                        <td className="d-flex gap-2 justify-content-center">
                          <Link className="btn btn-success" to={'/Consulta/'+orden.id+'/ActualizarOrden'}>editar</Link>
                          <Link className="btn btn-danger" to={'/Consulta/'+orden.id+'/Delete'}>Eliminar</Link>
                        </td>
                      </tr>)
            })}
          </tbody>
        
        </table>
      </div>

   
        );
}
export default Paquetes;