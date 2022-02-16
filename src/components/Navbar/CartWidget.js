import { BsCart3 } from 'react-icons/bs'
import { useCartContext } from '../../context/cartContext'
import './CartWidget.css'


const CartWidget = () => {

    const { totalUnits } = useCartContext()

    return (
        <>
            {totalUnits() === 0 ? (
                <div>
                    <a href="#"> <BsCart3 className='cartWidget' /> </a>
                </div>
            ) : (
                <div>
                    <a href="#" > <BsCart3 className='cartWidget' /> <h5 className='contador'> {totalUnits()} </h5> </a>
                </div>
            )
            }
        </>
    )
}

export default CartWidget
