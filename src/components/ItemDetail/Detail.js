import {useState, useContext} from 'react';
import '../../App.css';
import ItemCount from '../ItemList/itemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Detail({producto}) {

    const {addToCart} = useContext(CartContext);
    const [goCart, setGoCart] = useState(false);
    
    function onAddDetail (quantity) {
        setGoCart(true);
        addToCart({...producto, quantity:quantity});
    }

    return (
        <div className='row detailCard'>
            <div className="col-md-6">
                <img className='detailImg' src={producto.image} alt={producto.name}/>
            </div>
            <div className="col-md-6 detailCardData">
                <h3 className='card-title'>{producto.name}</h3>
                <p className='card-subtitle'>{producto.price}</p>
                {goCart ?
                    <div>
                        <Link to={"/cart"}>
                            <button className="btn btn-outline-primary btn-block addBtn">Ir al carrito</button>
                        </Link>
                        <br/>
                        <Link to={"/"}>
                            <button className="btn btn-outline-primary btn-block addBtn">Seguir comprando</button>
                        </Link>
                    </div>
                    : 
                    <ItemCount initial={0} stock={producto.stock} onAdd={onAddDetail}/>
                }
                <p className='card-subtitle'>{producto.desc}</p>
            </div>
        </div>
    );
}

export default Detail;