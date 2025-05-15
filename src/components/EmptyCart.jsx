import './stylesComponents/AccStyles.css'
import './stylesComponents/CartStyles.css'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='container-carrito'>
        <h2 className='titulo-carrito'>Aun no elegiste ninguna Pizza 😒</h2>    
        <p className='parrafo-carrito'>Te invitamos a seguir recorriendo nuestra tienda donde seguramente encontraras algo de tu agrado 🍕</p>
        <Link className='boton' to='/'>IR A LA TIENDA</Link>
    </div>
  )
}

export default EmptyCart