// import React from 'react'
import './stylesComponents/ItemDetailStyles.css'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div className="contenedor-detalle">
        <div className="imagen-fondo" style={{ backgroundImage: `url(${item.imagen})` }}></div>
        <div className='cont-tdp'>
            <h2 className='tituloPizzaDetail'>{item.nombre}</h2>
            <p className='descPizzaDetail'>{item.descripcion}</p>
            <span className='precioPizzaDetail'>${item.precio}</span>
            <ItemCount stock={item.stock}/>
        </div>
    </div>
  )
}

export default ItemDetail