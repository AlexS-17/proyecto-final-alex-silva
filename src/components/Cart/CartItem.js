import {useContext} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import CartCount from './CartCount';

export function CartItem({producto}) {
    
    const {addToCart, removeItem} = useContext(CartContext);
    
    function onChange (quantity) {
        addToCart({...producto, quantity:quantity});
    }

    return (
        <div className="card mb-3 cartCard">
            <div className="row cartCardData">
                <div className="col-md-2">
                    <Link to={`/detail/${producto.id}`}>
                        <img src={producto.image} className="card-img" alt={producto.name}/>
                    </Link>
                </div>
                <div className="col-md-4">
                    <h5 className="card-title">{producto.name}</h5>
                </div>
                <div className="col-md-2">
                    <h5 className='card-title'>$ {(producto.price * producto.quantity).toFixed(2)}</h5>
                </div>
                <div className="col-md-1">
                    <h5 className='card-title'>{producto.quantity}</h5>
                </div>
                <div className="col-md-2">
                    <CartCount quantity={producto.quantity} stock={producto.stock} onChange={onChange}/>
                </div>
                <div className="col-md-1">
                    <button onClick={()=>removeItem(producto)} type="button" className="btn close btn-outline-primary btnRm">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}