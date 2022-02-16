import {Link} from 'react-router-dom'

const Item = ({ prod }) => {

    return (
        <div className='container'>

            <div className='row col-md-3'>
                <div
                    key={prod.id}
                >
                    <div className="card w-100 mt-5">
                        <div className="card-header">
                            {`${prod.title} - ${prod.categoryId}`}
                        </div>

                        <div className="card-body">
                            <img src={prod.image} alt='' className='w-50' />
                            Precio: ${prod.price}
                        </div>
                        <div className="card-footer">
                            <Link to={`/detalle/${prod.id}`}>
                                <button className='btn btn-outline-primary btn-block' >
                                    Detalle del producto
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item
