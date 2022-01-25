import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ max,min, onAdd}) => {

    const [count, setCount] = useState(min)

    const handleIncrement = () => {
        if(count < max) {
            setCount(count+1)
        }
        else {
            alert('stock maximo del producto')
        }
    }

    const handleDecrement = () => {
        if(count > min) {
            setCount(count-1)
        }
        else {
            alert('cantidad minima de compra')
        }
    }

    return (
        <div className='contador'>
            <h1>{count}</h1>
            <button className='btn btn-outline-secondary' onClick={ handleDecrement}>-</button>
            <button className='btn btn-outline-secondary'  onClick={()=> onAdd(count)}>Agregar al Carrito</button>
            <button className='btn btn-outline-secondary' onClick={handleIncrement}>+</button>
        </div>
    )
}



export default ItemCount
