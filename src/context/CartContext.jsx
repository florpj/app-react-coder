import { useState } from "react";
import { createContext } from "react";

//Creamos contexto
export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    return(
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}