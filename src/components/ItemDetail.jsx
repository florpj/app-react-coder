import { useContext, useState } from 'react'
import './stylesComponents/ItemDetailStyles.css'
import './stylesComponents/ItemListContainer.css'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  const [cantidadComprada, setcantidadComprada] = useState(0)
  const {addItem} = useContext(CartContext)
  
  const OnAdd = (cantidad) =>{
    addItem(item, cantidad)
    setcantidadComprada(cantidad)
  }

  return (
    <div className="contenedor-detalle">
        <div className="imagen-fondo" style={{ backgroundImage: `url(${item.imagen})` }}></div>
        <div className='cont-tdp'>
            <h2 className='tituloPizzaDetail'>{item.nombre}</h2>
            <p className='descPizzaDetail'>{item.descripcion}</p>
            <span className='precioPizzaDetail'>${item.precio}</span>
        {cantidadComprada > 0 
        ? <Link className='boton btn-pedido' to={'/carrito'}>VER TU PEDIDO</Link> 
        :<ItemCount stock={item.stock} OnAdd={OnAdd}/>}
        </div>
    </div>
  )
}

export default ItemDetail