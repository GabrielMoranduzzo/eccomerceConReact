import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

    const [show, setShow] = useState(true)

    const onAdd = (cant) => {
        setShow(false)
        addToCart({ ...producto, cantidad: cant })
    }

    const { cartList, addToCart } = useCartContext()

    return (
        <div className='cardDetail'>
            <div className="card  mt-5 text-center">
                <div className="card-header">
                <h4> {`${producto.title} `} </h4>
                </div>
                <div className="card-body">
                    <img src={producto.image} alt='' className='w-50' />
                    <h5> Precio: ${producto.price} </h5> 
                </div>
                <p> <b>Descripción del producto: </b>{producto.description} </p>
            </div>

            {show ? <ItemCount min={1} max={50} onAdd={onAdd} /> :
                <div className='divButtons'>
                    <Link to='/cart'><button className='btn btn-success'> Terminar la compra</button></Link>
                    <br/> <br/>
                    <Link to='/'><button className='btn btn-warning'> Seguir comprando</button></Link>
                </div>}
        </div>
    )
}

export default ItemDetail

