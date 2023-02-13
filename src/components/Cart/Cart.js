import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import {CartItem} from './CartItem';
import Checkout from './Checkout/Checkout';
import EmptyCart from './EmptyCart';

function Cart() {

    const {cartList, clearCart, totalPrice} = useContext(CartContext);
    
    if (cartList.length === 0) {
        return <EmptyCart/>;
    }
    
    return (
        <div>
            <div className="col row-cols-md-1">
                {cartList.map(producto => <CartItem producto={producto} key={producto.id}/>)
                }
            </div>
            <h3 className='totalPriceCart'>Total: $ {totalPrice()}</h3>
            <button onClick={clearCart} type="button" className="btn btn-outline-primary btnCart">Vaciar carrito</button>
            <button type="button" className="btn btn-outline-primary btnCart" data-bs-toggle="modal" data-bs-target="#orderModal">Comprar</button>
            <Checkout/>
        </div>
    );
}

export default Cart;