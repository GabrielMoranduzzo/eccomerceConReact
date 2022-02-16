import { useState,useContext } from 'react'
import { children, createContext } from 'react'

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {    
        const indice = cartList.findIndex((i) => i.id === items.id);
       
        if (indice > -1) {
          const cantidadVieja = cartList[indice].cantidad;
          cartList.splice(indice, 1);   
          setCartList([...cartList,
            { ...items, cantidad: items.cantidad+ cantidadVieja },
          ]);
        } else {
          setCartList([...cartList, items]);
        }
      }

    function vaciarCarrito() {
        setCartList([])
    }


    const eliminarItem = (id) => {
        const itemFiltrado = cartList.filter((producto) => producto.id !== id)
        setCartList(itemFiltrado)
    }

    const total = () => {
        let count = 0
        cartList.forEach((producto) => {
            count += producto.price * producto.cantidad
        });
        return count
    }

    const totalUnidades = () => {
        let count = 0
        cartList.forEach((producto) =>{
            count += producto.cantidad
        })
        return count
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            eliminarItem,
            vaciarCarrito,
            totalUnidades,
            total
        }} >
            {children}
        </CartContext.Provider>
    )
}