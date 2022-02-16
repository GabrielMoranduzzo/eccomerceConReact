import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        const queryFilterGet = categoryId ? query(queryCollection, where('categoryId', '==', categoryId)) : queryCollection

        getDocs(queryFilterGet)
            .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally(() => setLoading(false))

    }, [categoryId])

    console.log(productos)
    console.log(categoryId) 

    return (
        <div>
            {loading ? (
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div>
                    <ItemList productos={productos} />
                </div>
            )}
        </div>
    )
}


export default ItemListContainer
