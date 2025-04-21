import { Link } from 'react-router-dom'
import './stylesComponents/ItemListContainer.css'

const Item = ({pizza}) => {
  return (
    <div className="cardPizza">
      <h3 className="tituloPizza">{pizza.nombre}</h3>
      <img className="imagenPizza"src={pizza.imagen} alt={pizza.nombre} />
      <h4 className="precioPizza">${pizza.precio}</h4>
      <Link className="boton" to={`/item/${pizza.id}`}>VER DETALLE...</Link>
    </div>
  )
}

export default Item