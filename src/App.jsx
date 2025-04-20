import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* <Route path='/' element={<ItemListContainer greeting ='Bienvenido al menu de las mejores PIZZAS!!'/>} /> */}
        <Route path='/' element={<ItemDetail item={{
      id: '13',
      nombre: "RUCULA",
      descripcion: "Pizza con salsa de Tomate Muzzarella Rúcula Parmesano y Orégano Grande",
      precio: 8299,
      imagen: "https://i.postimg.cc/NMprYQ2s/Ru-cula.jpg",
      categoria: "VEGGIES!",
      stock: 22
    }}/>} />
        
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
