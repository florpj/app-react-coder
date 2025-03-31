import { FaBasketShopping } from "react-icons/fa6";
import "./stylesComponents/Navbar.css";

const CartWidget = () => {
  return (
    <div className="carritoBoton">
      <FaBasketShopping fontSize={'1.2rem'}/>
      <span>1</span>
    </div>
  );
};

export default CartWidget;
