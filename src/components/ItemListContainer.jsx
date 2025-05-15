import "./stylesComponents/ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from './Spinner';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const {categoria} = useParams();

    useEffect(() => {
        setLoader(true)
        const pizzasCollection = categoria ? query(collection(db, "pizzas"), where("categoria","==", categoria)): collection(db, "pizzas")
        getDocs(pizzasCollection)
        .then((res)=> {
            const list = res.docs.map((doc)=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoader(false))
    }, [categoria])
    

    // useEffect(() => {
    //     setLoader(true)
    //     getPizzas()
    //     .then((response)=>{
    //         if(categoria){
    //             setData(response.filter((el)=>el.categoria===categoria))
    //         } else{
    //             setData(response)
    //         }
            
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoader(false))
        
    // }, [categoria])
    
    return(
        <>
        { loader ? 
        <Spinner /> :
        <div>
            <h1 className="titulo-pag-card">{greeting}</h1>
            <ItemList items= {data}/>
        </div> }
        </>
    );
};

export default ItemListContainer