import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./stylesComponents/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-style">
      <NavLink to={'/'}>
      <img className="logo" src="..\logo-pizza.png" alt="logo pizza" />
      </NavLink>
      <div className="menu">
        
        <NavLink className="menu-link" to={`/`}>TODAS</NavLink>
        <NavLink className="menu-link" to={`/categoria/promos`}>PROMOS!</NavLink>
        <NavLink className="menu-link" to={`/categoria/veggies`}>VEGGIES!</NavLink>
        <NavLink className="menu-link" to={`/categoria/las-mas-elegidas`}>LAS MAS ELEGIDAS!</NavLink>
        <CartWidget />
      </div>

      
    </div>
  );
};

export default Navbar;
