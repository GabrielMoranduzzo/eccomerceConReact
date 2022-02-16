import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({ prod }) => {

    return (

             <div className='row col-md-3 d-inline-block'>
                <div
                    key={prod.id}
                >
                    <div className="card w-100 mt-5 text-center">
                        <div className="card-header">
                           <h4> {`${prod.title} `} </h4> 
                        </div>

                        <div className="card-body">
                            <img src={prod.image} alt='' className='card-img-top img-fluid  ' />
                           <h5> Precio: ${prod.price} </h5> 
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

    )
}

export default Item
