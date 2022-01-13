import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar } from 'react-bootstrap';
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a Mi Tienda!'/>} />
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenidos a Mi Tienda!'/>} />
        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
