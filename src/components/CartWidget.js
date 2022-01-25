import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import Navbar from '../components/Navbar/Navbar.css'
import { useCartContext } from '../context/cartContext'


const CartWidget = () => {

    const {totalUnidades} = useCartContext

    return (
        <div>
         <a href="#"> <BsCart3 className='cartWidget' /> <h5> {totalUnidades()} </h5> </a>
        </div>
    )
}

export default CartWidget
