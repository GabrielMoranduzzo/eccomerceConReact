import { useCartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

    const { cartList, eliminarItem, vaciarCarrito, total } = useCartContext()

    return (
        <>
            {cartList.length === 0 ? (
                <div>
                   <h2 className="h2CartVacio"> Aún no hay productos en el Carrito. Dirigite al home a ver nuestros productos </h2>
                    <Link to='/' ><button className="buttonCartVacio btn-success">Empezar a comprar</button></Link>
                </div>
            ) : (
                <>
                        <div>
                            {cartList.map(prod => <div className="cartContainer" key={prod.id}> 
                                                        <img className="imgCart" src={prod.img}/>  
                                                        <div className="detalleCart"> 
                                                            <h3> {prod.nombre} </h3>
                                                            <h3> Cantidad: {prod.cantidad} </h3>
                                                            <h3> Precio : ${prod.precio} </h3>
                                                            <button className='btn btn-danger' onClick={() => eliminarItem(prod.id)}>X</button>
                                                        </div> 
                                                    </div>)}
                        </div>
                        <div className="cartFooter">
                        <h3>Total = ${total()}</h3>
                        <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>
                </>
            )}
        </>
    )
}

export default Cart
   