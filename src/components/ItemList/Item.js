import {useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './itemCount';
import {CartContext} from '../context/CartContext';

function Item({producto}) {

    const {addToCart} = useContext(CartContext);

    function onAddList (quantity) {
        addToCart({...producto, quantity:quantity});
    }

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/detail/${producto.id}`}>
                    <img src={producto.image} className="card-img-top" alt={producto.name}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <h6 className='card-subtitle'>$ {producto.price}</h6>
                </div>
                <div className="card-footer">
                    <ItemCount id={producto.id} initial={0} stock={producto.stock} onAdd={onAddList}/>
                </div>
            </div>
        </div>
    );
}

export default Item;