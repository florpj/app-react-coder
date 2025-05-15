import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Router, RouterProvider } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'


function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
        
      <Navbar />

      <Routes>
        
        <Route path='/' element={<ItemListContainer greeting ='Bienvenido al menu de las mejores PIZZAS!!'/>} />
        <Route path='/categoria/:categoria' element={<ItemListContainer greeting =''/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} /> 
        <Route path='/carrito' element={<Cart />} /> 
        
      </Routes>
      
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
