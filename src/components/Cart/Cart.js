import { useCartContext } from "../../context/cartContext"


const Cart = () => {

    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
            {cartList.map(prod => <li key={prod.id}> {prod.nombre} {prod.cantidad} </li>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
