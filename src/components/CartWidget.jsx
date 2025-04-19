import { FaBasketShopping } from "react-icons/fa6";
import "./stylesComponents/Navbar.css";
import "./stylesComponents/AccStyles.css";

const CartWidget = () => {
  return (
    <div className="carritoBoton">
      <FaBasketShopping fontSize={'1.2rem'}/>
      <span className="valor">2</span>
    </div>
  );
};

export default CartWidget;
