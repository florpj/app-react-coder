import { useState } from "react"
import "./stylesComponents/AccStyles.css"

const ItemCount = ({stock, OnAdd}) => {
    const [cont, setCont] = useState(0);

    const sumar = () => {
      if (stock && cont<stock) {
        setCont (cont + 1)
      }
    }  
    
    const restar = () => {
      if (stock && cont > 0){
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
        <button className="boton" onClick={()=> stock && cont && OnAdd(cont)}>Agregar al pedido</button>
      </div>
  )
}

export default ItemCount