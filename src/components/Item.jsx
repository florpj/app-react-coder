import './stylesComponents/ItemListContainer.css'

const Item = ({pizza}) => {
  return (
    <div className="cardPizza">
      <h3 className="tituloPizza">{pizza.nombre}</h3>
      <img className="imagenPizza"src={pizza.imagen} alt={pizza.nombre} />
      <h4 className="precioPizza">${pizza.precio}</h4>
      <button className="boton">VER DETALLE...</button>
    </div>
  )
}

export default Item