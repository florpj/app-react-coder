import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import './stylesComponents/CartStyles.css'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeList, totalAPagar} = useContext(CartContext)
  return (
    <div className='container-carrito'>
      <h2 className='titulo-carrito'>TU PEDIDO:</h2>
        <div className='listado-compra'>{cart.map((compra) => 
        <ItemCart key={compra.id} compra={compra}/> 
        )}
        </div>
        <div className='container-total'>
        <h2>El monto a abonar es:</h2> 
        <span>${totalAPagar()}</span>
        </div>
        <button className='boton boton-carrito' onClick={()=> removeList()}>Eliminar pedido</button>
        <Link to={'/checkout'}><button className='boton boton-carrito'>Terminar compra</button></Link>
    </div>
  )
}

export default CartView