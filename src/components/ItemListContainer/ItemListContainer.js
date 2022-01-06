import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../helper/mock'
import Item from '../Item/Item'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    console.log(productos)

    return (
        <div>
            <h1> {greeting} </h1>
            <ItemList productos={productos} />
        </div>
    )
}


export default ItemListContainer
