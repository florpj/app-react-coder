import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { getIdPizza } from '../mock/asyncService.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getIdPizza(id)
        .then((response)=>setItem(response))  
        .catch((error) => console.log(error))   
    }, [])
    
    
  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer