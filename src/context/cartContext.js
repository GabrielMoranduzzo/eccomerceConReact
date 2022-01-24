import { useState,useContext } from 'react'
import { children, createContext } from 'react'

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items,cantidad) {
        const indice = cartList.findIndex(i => i.id === items.id)

        if (indice > -1){
            const cantidadVieja = cartList[indice].cantidad

            let cantidadNueva = cantidadVieja + items.cantidad

            cartList[indice].cantidad= cantidadNueva

            let arrAux = [...cartList]
            setCartList(arrAux)
            sumarCantidad()
        } else {
            setCartList([...cartList, items])
        }
    }

    function vaciarCarrito() {
        setCartList([])
    }

    const sumarCantidad = (item, cantidad) => {
        const copiaCarrito = [...cartList];
        copiaCarrito.forEach((producto) => {
            producto.id === item.id && (producto.cantidad += cantidad);
        })
    }

    function eliminarItem(id) {
        const itemFiltrado = cartList.filter((producto) => producto.id !== id)
        setCartList(itemFiltrado)
    }

    const total = () => {
        let count = 0
        cartList.forEach((producto) => {
            count += producto.precio * producto.cantidad
        })
        return count
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            eliminarItem,
            vaciarCarrito,
            total
        }} >
            {children}
        </CartContext.Provider>
    )
}