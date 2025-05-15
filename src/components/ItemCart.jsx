import './stylesComponents/AccStyles.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCart = ({compra}) => {
const {deleteItem} = useContext(CartContext)
    return (
      <div className="item-compra-container">
        <img className='imagen-carrito' src={compra.imagen} alt={compra.nombre} />
        <div className="info-producto">
        <h3>{compra.nombre}</h3>
        <h5>Precio unitario: ${compra.precio}</h5>
        <span>Cantidad: {compra.cantidad}</span>
        </div>
        <h3>Precio total: $ {compra.cantidad * compra.precio}</h3>
        <button className='boton-eliminar-prod' onClick={() => deleteItem(compra.id)}>x</button>
    </div>
  )
}
export default ItemCart