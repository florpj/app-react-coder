import CartWidget from "./CartWidget";
import "./stylesComponents/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-style">
      <img className="logo" src="..\logo-pizza.png" alt="logo pizza" />

      <div className="menu">
        <a className="menu-link" href="#">TODAS</a>
        <a className="menu-link" href="#">PROMOS!</a>
        <a className="menu-link" href="#">VEGGIES!</a>
        <a className="menu-link" href="#">LAS MAS ELEGIDAS!</a>
        <CartWidget />
      </div>

      
    </div>
  );
};

export default Navbar;
