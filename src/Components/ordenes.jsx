
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import axios from "axios";
const Ordenes = ({data, ordenId})=>{

  const[isEdit, setIsEdit]=useState(false)
  
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    
  const customSubmit = (dataForm) => {
        const ordenObjet={
        id:"2",
        fecha: dataForm.crearOrden1,
        ciudadEntrega:dataForm.crearOrden4,
        direccionEntrega:dataForm.crearOrden12,
        hora: dataForm.crearOrden2,
        ciudadOrigen:dataForm.crearOrden3,
        peso:dataForm.crearOrden5,
        ancho:dataForm.crearOrden6,
        largo:dataForm.crearOrden8,
        alto:dataForm.crearOrden7,
        direccionOrigen:dataForm.crearOrden9,
        nombreDestinatario:dataForm.crearOrden10,
        ccDestinatario: dataForm.crearOrden11,
        userId: "63880a8c493f62ecb6cd607b",
        estado: "en proceso"
          
        }
        if (isEdit) {
          axios
              .put("http:localhost:5000/ordenes/edit/" + ordenId, ordenObjet)
              .then(response => console.log(response.data))
        } else {
          axios
              .post("http://localhost:5000/ordenes/create", ordenObjet)
              .then(response => console.log(response.data))
        }
        }
    
    useEffect(()=>{
      if (data.length !== 0){
          setIsEdit(true)
          setValue('crearOrden1',data.fecha)
          setValue('crearOrden2',data.hora)
          setValue('crearOrden3',data.ciudadOrigen)
          setValue('crearOrden4',data.ciudadEntrega)
          setValue('crearOrden5',data.peso)
          setValue('crearOrden6',data.ancho)
          setValue('crearOrden7',data.alto)
          setValue('crearOrden8',data.largo)
          setValue('crearOrden9',data.direccionOrigen)
          setValue('crearOrden10',data.nombreDestinatario)
          setValue('crearOrden11',data.ccDestinatario)
          setValue('crearOrden12',data.direccionEntrega)  
      }
    }, []) 
    return(
        
        <div className="col-lg-7">  
        <form action="forms/quote.php" method="post" className="php-email-form" onSubmit={handleSubmit(customSubmit)}>
          <div className="row gy-4">

            <div className="col-md-6">
            <input
                        {...register("crearOrden1", { required: true })}
                        aria-invalid={errors.crearOrden1 ? "true" : "false"}
                        placeholder="Fecha de recogida"  className="form-control" type={'date'}/>
                    {errors.crearOrden1 && <p>Field required</p>}
            </div>
            <div className="col-md-6">
            <input
                        {...register("crearOrden2", { required: true })}
                        aria-invalid={errors.crearOrden2 ? "true" : "false"}
                        placeholder="Hora de recogida"  className="form-control" type={'time'}/>
                    {errors.crearOrden2 && <p>Field required</p>}
            </div>
            <div className="col-md-6">
            <input
                        {...register("crearOrden3", { required: true })}
                        aria-invalid={errors.crearOrden3 ? "true" : "false"}
                        placeholder="Ciudad de origen"  className="form-control" type={'text'}/>
                    {errors.crearOrden3 && <p>Field required</p>}
            </div>
            <div className="col-md-6">
            <input
                        {...register("crearOrden4", { required: true })}
                        aria-invalid={errors.crearOrden4 ? "true" : "false"}
                        placeholder="Ciudad de destino"  className="form-control" type={'text'}/>
                    {errors.crearOrden4 && <p>Field required</p>}
            </div>
            <div className="col-md-6">
            <input
                        {...register("crearOrden5", { required: true })}
                        aria-invalid={errors.crearOrden5 ? "true" : "false"}
                        placeholder="Peso (kg)"  className="form-control" type={'text'}/>
                    {errors.crearOrden5 && <p>Field required</p>}
            </div>
            <div className="col-md-6">
            <input
                        {...register("crearOrden6", { required: true })}
                        aria-invalid={errors.crearOrden6 ? "true" : "false"}
                        placeholder="Ancho (cm)"  className="form-control" type={'text'}/>
                    {errors.crearOrden6 && <p>Field required</p>}
            </div>
            <div className="col-md-6">
            <input
                        {...register("crearOrden7", { required: true })}
                        aria-invalid={errors.crearOrden7 ? "true" : "false"}
                        placeholder="Alto (cm)"  className="form-control" type={'text'}/>
                    {errors.crearOrden7 && <p>Field required</p>}
            </div><div className="col-md-6">
            <input
                        {...register("crearOrden8", { required: true })}
                        aria-invalid={errors.crearOrden8 ? "true" : "false"}
                        placeholder="Largo (cm)"  className="form-control" type={'text'}/>
                    {errors.crearOrden8 && <p>Field required</p>}
            </div>
            <div className="col-md-12">
            <input
                        {...register("crearOrden9", { required: true })}
                        aria-invalid={errors.crearOrden9 ? "true" : "false"}
                        placeholder="Dirección de origen"  className="form-control" type={'text'}/>
                    {errors.crearOrden9 && <p>Field required</p>}
            </div>
            <div className="col-md-12">
            <input
                        {...register("crearOrden10", { required: true })}
                        aria-invalid={errors.crearOrden10 ? "true" : "false"}
                        placeholder="Nombre del destinatario"  className="form-control" type={'text'}/>
                    {errors.crearOrden10 && <p>Field required</p>}
            </div>
            <div className="col-md-12">
            <input
                        {...register("crearOrden11", { required: true })}
                        aria-invalid={errors.crearOrden11 ? "true" : "false"}
                        placeholder="Cédula o NIT del destinatario"  className="form-control" type={'text'}/>
                    {errors.crearOrden11 && <p>Field required</p>}
            </div>
            <div className="col-md-12">
            <input
                        {...register("crearOrden12", { required: true })}
                        aria-invalid={errors.crearOrden12 ? "true" : "false"}
                        placeholder="Dirección de destino"  className="form-control" type={'text'}/>
                    {errors.crearOrden12 && <p>Field required</p>}
            </div>
            <div>
              <input className="btn btn-primary" type="submit" value={isEdit ? "Actualizar orden" : "Crear Orden"}/>
            </div>

          </div>
        </form>
        </div>
        );
}
export default Ordenes;