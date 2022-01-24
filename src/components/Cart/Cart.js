import { useCartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cartList, eliminarItem, vaciarCarrito, total } = useCartContext()

    return (
        <>
            {cartList.length === 0 ? (
                <div>
                   <h2> Aún no hay productos en el Carrito. Dirigite al home a ver nuestros productos </h2>
                    <Link to='/'><button>Empezar a comprar</button></Link>
                </div>
            ) : (
                <>
                        <div>
                            {cartList.map(prod => <li key={prod.id}> <img src={prod.img}/> {prod.nombre} {prod.cantidad} </li>)}
                            <button onClick={eliminarItem}>X</button>
                        </div>
                        <div>
                        <h3>Total {total()}</h3>
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>
                    {/* {cartList.map(prod => (
                        <div key={prod.id}>
                            <img src={prod.img} alt={prod.nombre} />
                            <div>
                                <h3> {prod.nombre} </h3>
                                <h3> {prod.precio} </h3>
                                <h3> Cantidad: {prod.cantidad} </h3>
                                <button onClick={eliminarItem(prod.id)}>X</button>
                            </div>
                            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>  
                    ))} */}

                </>
            )}
        </>
    )
}

export default Cart
   