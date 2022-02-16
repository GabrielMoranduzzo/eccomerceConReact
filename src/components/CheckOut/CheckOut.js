import { useCartContext } from "../../context/cartContext"
import { useState } from "react"
import './CheckOut.css'

function CheckOut({ makePurchase }) {

    const { cartList, deleteItem, deleteCart, total } = useCartContext()

    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        adress: '',
        email: ''
    })

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className="cartList">
                {cartList.map(prod => <div className="cartContainer" key={prod.id}>
                    <img className="imgCart" src={prod.image} />
                    <div className="detalleCart">
                        <h3 className="title"> {prod.title} </h3>
                        <h3 className="cant"> Cantidad: {prod.cantidad} </h3>
                        <h3 className="price"> Precio : ${prod.price} </h3>
                        <button className='btn btn-danger' onClick={() => deleteItem(prod.id)}>X</button>
                    </div>
                </div>)}
            </div>
            <div className="cartFooter">
                <h3>Total = ${total()}</h3>
                <button className='btn btn-danger' onClick={deleteCart}>Vaciar Carrito</button>
            </div>
            <form
                onSubmit={makePurchase}
                className='form'
            >
                <h4>Completa los siguientes campos para finalizar la compra</h4>
                <input
                    type='text'
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={dataForm.name}
                />
                <br/>
                <input
                    type='text'
                    name="phone"
                    placeholder="Telefono"
                    onChange={handleChange}
                    value={dataForm.phone}
                />
                <br/> 
                <input
                    type='text'
                    name="adress"
                    placeholder="Domicilio"
                    onChange={handleChange}
                    value={dataForm.adress}
                />
                <br/>
                <input
                    type='email'
                    name='email'
                    placeholder="Email"
                    onChange={handleChange}
                    value={dataForm.email}
                />
                <br/> 
                <br/> 
                <button className='btn btn-primary' onClick={makePurchase}>Generar Orden</button>
            </form>
        </div>
    )
}

export default CheckOut