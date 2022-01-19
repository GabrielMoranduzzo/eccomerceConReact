import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({min, max, onAdd}) => {

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
            <button onClick={ handleDecrement}>-</button>
            <button onClick={onAdd}>Agregar al Carrito</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}



export default ItemCount
