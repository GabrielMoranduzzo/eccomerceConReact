import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../helper/mock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})
    const [loading, setLoading] = useState(true)

    const {idDetalle} = useParams()

    useEffect(()=> {

        const db = getFirestore()

        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then(resp => setproducto({id: resp.id, ...resp.data()}))
        .catch(err => err)
        .finally(()=> setLoading(false))

    }, [])

    console.log(producto)

    return (
        <div>
            {loading ? (
                <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            ) : (
                <div>   
                    <ItemDetail producto={producto} /> 
                </div>
            )}
        </div>
    )
}

export default ItemDetailContainer
