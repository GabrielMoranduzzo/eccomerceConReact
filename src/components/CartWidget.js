import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import NavBar from './Navbar/Navbar'
import { useCartContext } from '../context/cartContext'


const CartWidget = () => {

    const {totalUnidades} = useCartContext()

    return (
        <>
            {totalUnidades === 0 ? (
                    <div>
                        <a href="#"> <BsCart3 className='cartWidget' /> </a>
                    </div>
                ) : (
                    <div>
                        <a href="#"> <BsCart3 className='cartWidget' /> <h5> {totalUnidades()} </h5> </a>
                    </div>
                )
            }



            {/* {
                totalUnidades === 0 &&
                <div>
                    <a href="#"> <BsCart3 className='cartWidget' /> </a>
                </div>
            }
            {
                totalUnidades !== 0 &&
                <div>
                    <a href="#"> <BsCart3 className='cartWidget' /> <h5> {totalUnidades()} </h5> </a>
                </div>
            } */}
        </>
    )
}

export default CartWidget
