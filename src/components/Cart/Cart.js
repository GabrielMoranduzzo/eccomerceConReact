import { useCartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import './Cart.css'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import CheckOut from "../CheckOut/CheckOut"
import Resumen from "../Resumen/Resumen"



const Cart = () => {

    const { cartList, eliminarItem, vaciarCarrito, total } = useCartContext()
    const [condicional, setCondicional] = useState(false)
    const [dataForm, setDataForm] = useState({
        name: '',
        phone:'',
        adress: '',
        email: ''
    })

    const [idOrder, setIdOrder] = useState('')

    const realizarCompra = async (e) => {
        e.preventDefault()
        let orden = {}

        orden.buyer = dataForm
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
        .then(resp => setIdOrder(resp.id))
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
            setCondicional(true)
    }

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    
    console.log(dataForm)


    return (
        <>
            {cartList.length === 0 ? (
                <div>
                    <h2 className="h2CartVacio"> Aún no hay productos en el Carrito. Dirigite al home a ver nuestros productos </h2>
                    <Link to='/' ><button className="buttonCartVacio btn-success">Empezar a comprar</button></Link>
                </div>
            ) : (
                <>
                    <CheckOut />
                </> 
            )}
            {
                condicional ? <CheckOut/> : <Resumen idOrder={idOrder} />
            }
        </>
    )
}

export default Cart
   