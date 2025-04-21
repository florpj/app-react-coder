import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Router, RouterProvider } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer greeting ='Bienvenido al menu de las mejores PIZZAS!!'/>} />
        <Route path='/categoria/:categoria' element={<ItemListContainer greeting =''/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
