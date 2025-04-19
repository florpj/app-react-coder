import "./stylesComponents/ItemListContainer.css"
import { getPizzas } from "../mock/asyncService";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getPizzas()
        .then((response)=> setData(response))
        .catch((error)=> console.log(error))
    }, [])
    
    console.log(data)
    return(
        <div>
            <h1 className="titulo-pag-card">{greeting}</h1>
            <ItemList items= {data}/>
            {/* {data.map((producto) => <h2 key={producto.id}>{producto.nombre}</h2>)} */}
        </div>
    );
};

export default ItemListContainer