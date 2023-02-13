import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
function CartWidget() {
    
    const {numberOfItems} = useContext(CartContext);
    const items = numberOfItems();

    return (
        <div className='cartIcon'>
            <i className="fas fa-shopping-cart"></i>
            <div>
                <h3 className='itemCountNavBar' style={{display: items !== 0 ? "block" : "none" }}>{items}</h3>
            </div>
        </div>
    );
}

export default CartWidget;