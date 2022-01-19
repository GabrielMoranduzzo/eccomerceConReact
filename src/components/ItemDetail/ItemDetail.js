import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'



const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    const onAdd = () => {
        setShow(false)
    }

    return (
       <div className='cardDetail'>
                 <div className="card  mt-5">
                    <div className="card-header">
                        {producto.nombre}
                    </div>
                    <div className="card-body">
                        <img src={producto.img} alt='' className='w-50' />
                        {producto.precio}
                    </div>
                </div>

                {show ? <ItemCount min={1} max={10} onAdd={onAdd} /> : 
                <div>   
                <Link to='/cart'><button> Terminar la compra</button></Link>
                <Link to='/'><button> Seguir comprando</button></Link>
                </div>}
        </div>
    )
}

export default ItemDetail

