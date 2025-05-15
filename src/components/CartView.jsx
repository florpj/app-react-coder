import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import './stylesComponents/CartStyles.css'

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
        <button className='boton boton-carrito'>Terminar compra</button>
    </div>
  )
}

export default CartView