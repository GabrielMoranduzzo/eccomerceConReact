import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar } from 'react-bootstrap';
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Mi Tienda!'/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App;
