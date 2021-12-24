import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Navbar } from 'react-bootstrap';
import NavBar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Mi Tienda!'/>
    </div>
  )
}

export default App;
