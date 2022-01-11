import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "../helper/mock"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({})


    useEffect(()=> {
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === '1')))
    }, [])


    return (
        <div>
           <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
