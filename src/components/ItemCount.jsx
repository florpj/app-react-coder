import { useState } from "react"
import "./stylesComponents/AccStyles.css"

const ItemCount = () => {
    const [cont, setCont] = useState(1);

    const sumar = () => {
      setCont (cont + 1)

    }
    const restar = () => {
      if (cont > 0){
        setCont (cont - 1)
      }
    }

    return (
      <div className="contenedorCont">
        <div className="contador">
          <button className="botonCont" onClick={restar}>-</button>
          <span className="valor">{cont}</span>
          <button className="botonCont"onClick={sumar}>+</button>
        </div>
        <button className="boton">Agregar al carrito</button>
      </div>
  )
}

export default ItemCount