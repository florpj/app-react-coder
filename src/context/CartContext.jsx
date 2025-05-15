import { createContext, useState  } from "react";

//Creamos contexto
export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    // Funciones de carrito

    //Agregar un item al carrito
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {

            const updateCart = cart.map((prod) => {
                if (prod.id === item.id ) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                }else{
                    return prod
                }
            })
                
            setCart(updateCart)
        }else{
        setCart([...cart, {...item,cantidad: cantidad}])
        }

    }
    

    //Dejar el carrito vacio
    const removeList = () => {
        setCart([])
    }

    //Borrar un item del carrito
    const deleteItem = (id) =>{
        setCart(cart.filter((producto) => producto.id != id))
    }

     const isInCart = (id) => {
        return cart.some((producto) => producto.id === id)
     }

     const calcItemsQty = () => {
       return cart.reduce((acum, item) => acum += item.cantidad, 0)
     }

     const totalAPagar = () => {
        return cart.reduce((acum,item) => acum += item.cantidad * item.precio, 0)
     }
    return(
        <CartContext.Provider value={{cart, addItem, removeList, deleteItem, calcItemsQty, totalAPagar}}>
            {children}
        </CartContext.Provider>
    )
} 