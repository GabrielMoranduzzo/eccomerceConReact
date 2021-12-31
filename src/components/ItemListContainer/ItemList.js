import React from 'react'
import Item from '../Item/Item'

const ItemList = (items) => {

    return (
        <div>
            { loading ? <h2> Cargando ... </h2>
                : 
            productos.map(prod => <Item/> )} 
        </div>
    )
}

export default ItemList


