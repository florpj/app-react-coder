import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner.jsx'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase.jsx'
import './stylesComponents/AccStyles.css'
import './stylesComponents/CartStyles.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loader, setLoader] = useState(false)
    const [invalid,setInvalid] = useState(null)
    const {id} = useParams();

    useEffect(() => {
      setLoader(true)

      const pizzasCollection = collection(db, "pizzas")
      const docRef = doc(pizzasCollection, id)

      getDoc(docRef)
      .then((response)=>{
        if (response.data()) {
          setItem({id: response.id, ...response.data()})
        }else{
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
    }, [])
    
  
    if (invalid) {
      return console.log('No encontramos pizzas')
      // <div className='container-carrito'>
      //   <h2 className='titulo-carrito'>No encontramos ese producto 😒</h2>    
      //   <p className='parrafo-carrito'>Te invitamos a seguir recorriendo nuestra tienda donde seguramente encontraras algo de tu agrado 🍕</p>
      //   <Link className='boton' to='/'>IR A LA TIENDA</Link>
      // </div>
    }
    
  return (
    <>
    {loader ? <Spinner /> : <ItemDetail item={item}/>}
    </>
  )
}

export default ItemDetailContainer