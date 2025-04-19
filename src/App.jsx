import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path='/' element={<ItemListContainer greeting ='Bienvenido al menu de las mejores PIZZAS!!'/>} />
        <Route path='/ejemplo' element={<h1>Hola, este es un ejemplo!</h1>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
