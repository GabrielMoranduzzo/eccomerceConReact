import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
    return (
       <div className='cardDetail'>
                 <div className="card  mt-5">
                    <div className="card-header">
                        {producto.nombre}
                    </div>
                    <div className="card-body">
                        <img src={producto.img} alt='' className='w-50' />
                        {producto.precio}
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail

