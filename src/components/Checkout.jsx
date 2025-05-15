import React, { useState, useContext } from 'react'
import './stylesComponents/AccStyles.css'
import './stylesComponents/CartStyles.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
  const [orderId, setOrderId] = useState('')
  const {register, handleSubmit, formState: {errors}, getValues} = useForm()
  const {cart, totalAPagar, removeList} = useContext(CartContext)
  
  const finalizarCompra = (dataForm)=>{
    let orden ={
      comprador:{
        nombre: dataForm.nombre,
        apellido: dataForm.apellido,
        domicilio: dataForm.domicilio,
        email:dataForm.email,
      },
      compras: cart,
      total: totalAPagar(),
      fecha: serverTimestamp()
    }
    const ventas = collection(db, "ordenes")
    addDoc(ventas, orden)
    .then((response) => {
      setOrderId(response.id)
      removeList()
    })
    .catch((error) => console.log(error))
  }

  return (
    <div>
        {
          orderId 
          ?<div className='container-carrito'>
            <h2 className='titulo-carrito'>Su pedido fue realizado con ÉXITO! 🎉</h2>
            <h5 className='titulo-carrito'>Su numero de pedido es: {orderId}</h5>
            <Link className='boton' to='/'>IR A LA TIENDA</Link>
          </div> 
          :<div className='container-carrito'>
            <h2 className='titulo-carrito'>Para terminar la compra, por favor complete sus datos:</h2>
            <form onSubmit={handleSubmit(finalizarCompra)}>
              <input className='control-formulario form-2x1' name='nombre' placeholder='Ingrese su nombre' type="text" {...register("nombre", {required:true, minLength:3})} />
              {errors?.nombre?.type === "required" && <span style={{color: 'red'}}>Por favor complete este campo requerido</span> }
              {errors?.nombre?.type === "minLength" && <span style={{color: 'red'}}>Este campo debe contener minimo 3 caracteres</span> }
              <input className='control-formulario form-2x1' name='apellido' placeholder='Ingrese su apellido' type="text" {...register("apellido", {required:true, minLength:3})}/>
              {errors?.apellido?.type === "required" && <span style={{color: 'red'}}>Por favor complete este campo requerido</span> }
              {errors?.apellido?.type === "minLength" && <span style={{color: 'red'}}>Este campo debe contener minimo 3 caracteres</span> }
              <input className='control-formulario form-1x1' name='domicilio' placeholder='Ingrese su domicilio' type="text" {...register("domicilio", {required:true, minLength:7})} />
              {errors?.domicilio?.type === "required" && <span style={{color: 'red'}}>Por favor complete este campo requerido</span> }
              {errors?.domicilio?.type === "minLength" && <span style={{color: 'red'}}>Este campo debe contener minimo 3 caracteres</span> }
              <input className='control-formulario form-2x1' name='email' placeholder='Ingrese su email' type="email" {...register("email", {required:true})}/>
              {errors ?.email?.type === "required" && <span style={{color: 'red'}}>Por favor complete este campo requerido</span> }
              <input className='control-formulario form-2x1' name='copiaemail' placeholder='Repita su email' type="email" {...register("copiaemail", {required:true, validate:{emailIgual: mail2 => mail2 === getValues().email }})}/>
              {errors ?.copiaemail?.type === "required" && <span style={{color: 'red'}}>Por favor complete este campo requerido</span> }
              {errors ?.copiaemail?.type === "emailIgual" && <span style={{color: 'red'}}>Los emails no son iguales</span> }
              
              {cart.length > 0 
              ?<button className='boton boton-carrito enviar' type='submit'>Enviar</button>
              :<h4 className='titulo-carrito'>Para poder enviar el formulario, debe llenar su pedido</h4>
              }
              
            </form>
          </div>
        }

    </div>
  )
}

export default Checkout