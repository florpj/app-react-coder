import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { getIdPizza } from '../mock/asyncService.jsx'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner.jsx'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loader, setLoader] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        setLoader(true)
        getIdPizza(id)
        .then((response)=>setItem(response))  
        .catch((error) => console.log(error))   
        .finally(()=> setLoader(false))
    }, [])
    
    
  return (
    <>
    {loader ? <Spinner /> : <ItemDetail item={item}/>}
    </>
  )
}

export default ItemDetailContainer