import React from 'react'
import { useCartContext } from "../../context/cartContext"
import { useState } from "react"

function CheckOut({realizarCompra}) {

const { cartList, eliminarItem, vaciarCarrito, total } = useCartContext()

const [dataForm, setDataForm] = useState({
    name: '',
    phone:'',
    adress: '',
    email: ''
})

// const realizarCompra = async (e) => {
//     e.preventDefault()
//     let orden = {}

//     orden.buyer = dataForm
//     orden.total = total();

//     orden.items = cartList.map(cartItem => {
//         const id = cartItem.id;
//         const nombre = cartItem.title;
//         const precio = cartItem.price * cartItem.cantidad;
//         const cantidad = cartItem.cantidad

//         return(id, nombre, precio, cantidad)
// })
// }

function handleChange(e) {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}

  return (
    <div>
          <div>
              {cartList.map(prod => <div className="cartContainer" key={prod.id}>
                  <img className="imgCart" src={prod.image} />
                  <div className="detalleCart">
                      <h3> {prod.title} </h3>
                      <h3> Cantidad: {prod.cantidad} </h3>
                      <h3> Precio : ${prod.price} </h3>
                      <button className='btn btn-danger' onClick={() => eliminarItem(prod.id)}>X</button>
                  </div>
              </div>)}
          </div>
          <div className="cartFooter">
              <h3>Total = ${total()}</h3>
              <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
              <br /> <br />
              <form
                  onSubmit={realizarCompra}
              >
                  <h4>Completa los siguientes campos para finalizar la compra</h4>
                  <input
                      type='text'
                      name="name"
                      placeholder="Nombre"
                      onChange={handleChange}
                      value={dataForm.name}
                  /> <br />
                  <input
                      type='text'
                      name="phone"
                      placeholder="Telefono"
                      onChange={handleChange}
                      value={dataForm.phone}
                  /> <br />
                  <input
                      type='text'
                      name="adress"
                      placeholder="Domicilio"
                      onChange={handleChange}
                      value={dataForm.adress}
                  /> <br />
                  <input
                      type='email'
                      name='email'
                      placeholder="Email"
                      onChange={handleChange}
                      value={dataForm.email}
                  /> <br /> <br />
                  <button className='btn btn-primary' onClick={realizarCompra}>Generar Orden</button>
              </form>
          </div>
      </div>
  )
}

export default CheckOut