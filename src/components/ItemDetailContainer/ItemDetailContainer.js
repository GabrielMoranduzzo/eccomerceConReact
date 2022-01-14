import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../helper/mock"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})

    const {idDetalle} = useParams()

    useEffect(()=> {
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === idDetalle)))
    }, [])


    return (
        <div>
           <ItemDetail producto={producto} />
           <ItemCount min={1} max={10} />
        </div>
    )
}

export default ItemDetailContainer
