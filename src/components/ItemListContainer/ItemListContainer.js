import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {

        const db = getFirestore() 
        const queryCollection = collection(db, 'items')
        const queryFilterGet = categoryId ? query(queryCollection, where('categoria', '==' , categoryId)) : queryCollection

        getDocs(queryFilterGet)
        .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
        .catch(err => err)
        .finally(()=> setLoading(false))

    }, [categoryId])

    console.log(productos)
    console.log(categoryId) 

    return (
        <div>
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
