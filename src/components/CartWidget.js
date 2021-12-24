import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import Navbar from '../components/Navbar/Navbar.css'


const CartWidget = () => {
    return (
        <div>
         <a href="#"> <BsCart3 className='cartWidget' /> </a>
        </div>
    )
}

export default CartWidget
