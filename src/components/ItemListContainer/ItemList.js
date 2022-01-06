import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

    return (
        <div>
            {productos.map( prod => {
                return (
                <Item key={prod.id} prod={prod}/>
                )
            })} 
        </div>
    )}


export default ItemList

 