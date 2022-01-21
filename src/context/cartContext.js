import { useState,useContext } from 'react'
import { children, createContext } from 'react'

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {
        const indice = cartList.findIndex(i => i.id === items.id)

        if (indice > -1){
            const cantidadVieja = cartList[indice].cantidad

            let cantidadNueva = cantidadVieja + items.cantidad

            cartList[indice].cantidad= cantidadNueva

            let arrAux = [...cartList]
            setCartList(arrAux)
        } else {
            setCartList([...cartList, items])
        }
    }

    function vaciarCarrito() {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }} >
            {children}
        </CartContext.Provider>
    )
}