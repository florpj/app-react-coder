import { useContext } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import "./stylesComponents/Navbar.css";
import "./stylesComponents/AccStyles.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {calcItemsQty} = useContext(CartContext)
  return (
    <div>
      <Link className='carritoBoton' to={'/carrito'}>
      <FaBasketShopping fontSize={'1.2rem'}/>
      {calcItemsQty() > 0 && <span className="valor">{calcItemsQty()}</span>}</Link>
    </div>
  );
};

export default CartWidget;
