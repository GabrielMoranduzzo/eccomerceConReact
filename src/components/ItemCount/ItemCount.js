import React from 'react'
import { useState } from 'react'

const ItemCount = ({min, max}) => {

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
        <div>
            <h2>Contador</h2>
            <button onClick={ handleDecrement}>-</button>
            {count}
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}



export default ItemCount
