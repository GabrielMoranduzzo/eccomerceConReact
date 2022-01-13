import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helper/mock'
import Item from '../Item/Item'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    useEffect(() => {
        if (idCategoria) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [idCategoria])

    console.log(idCategoria) 

    return (
        <div>
            <h1> {greeting} </h1>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <div>   
                    <ItemList productos={productos} /> 
                </div>
            )}
        </div>
    )
}


export default ItemListContainer
