import React from 'react'


const Item = ({prod}) => {

    return (
        <div>
            <div
                key={prod.id}
                className='col-md-4'
            >
                <div className="card w-100 mt-5">
                    <div className="card-header">
                        {`${prod.nombre} - ${prod.descripcion}`}
                    </div>

                    <div className="card-body">
                        <img src={prod.img} alt='' className='w-50' />
                        {prod.precio}
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-outline' >
                            Detalle del producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
