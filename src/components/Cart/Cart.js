import { useCartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"



const Cart = () => {

    const { cartList, eliminarItem, vaciarCarrito, total } = useCartContext()

    const realizarCompra = async () => {
        let orden = {}

        orden.buyer = {nombre: 'Gabriel', email: 'g@gmail.com', tel: '123456789'}
        orden.total = total();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return(id, nombre, precio, cantidad)
        })

        const db = getFirestore()
        const ordenCollection = collection(db, 'orders')
        await addDoc(ordenCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> console.log('cargando'))

        const queryCollection = collection(db, 'items')

        const queryActualizarStock = query(
            queryCollection, where( documentId(), 'in', cartList.map(it => it.id)))
            const batch = writeBatch(db)

            await getDocs(queryActualizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
                })
            ))
            .catch(err => console.log(err))
            .finally(()=> console.log('stock actualizado'))

            batch.commit()
    }
 
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
                                                        <img className="imgCart" src={prod.image}/>  
                                                        <div className="detalleCart"> 
                                                            <h3> {prod.title} </h3>
                                                            <h3> Cantidad: {prod.cantidad} </h3>
                                                            <h3> Precio : ${prod.price} </h3>
                                                            <button className='btn btn-danger' onClick={() => eliminarItem(prod.id)}>X</button>
                                                        </div> 
                                                    </div>)}
                        </div>
                        <div className="cartFooter">
                        <h3>Total = ${total()}</h3>
                        <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <button className='btn btn-danger' onClick={realizarCompra}>Generar Orden</button>
                        </div>
                </>
            )}
        </>
    )
}

export default Cart
   