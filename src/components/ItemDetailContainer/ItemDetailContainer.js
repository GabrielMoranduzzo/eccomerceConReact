import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../helper/mock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})

    const {idDetalle} = useParams()

    useEffect(()=> {

        const db = getFirestore()

        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then(resp => setproducto({id: resp.id, ...resp.data()}))


        // getFetch
        // .then(resp => setproducto(resp.find(prod => prod.id === idDetalle)))
    }, [])

    console.log(producto)

    return (
        <div>
           <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
