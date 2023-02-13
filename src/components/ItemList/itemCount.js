import {useState, useContext} from 'react';
import {CartContext} from '../context/CartContext';

const ItemCount = ({id, initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    const {cartList} = useContext(CartContext)

    function itemsInCart() {
        const index = cartList.findIndex(i => i.id === id);
        if (index === -1) {
            return 0;
        }
        return cartList[index].quantity;
    }
    const handlerAdd =()=>{
        if(count < (stock - itemsInCart())) setCount(count + 1);
    }
    const handlerRm =()=>{
        if(count > 0) setCount(count - 1);
    }
    const handlerOnAdd=()=>{
        onAdd(count);
        setCount(initial);
    }

    return (
        <div className='itemCounter'>
            <div className='counterContainer'>
                <button className="btn btn-primary btnCounter" onClick={handlerRm} disabled={count === 0}>-</button>
                <label className ="itemCountInput">{count}</label>
                <button className="btn btn-primary btnCounter" onClick={handlerAdd} disabled={count + itemsInCart() === stock}>+</button>
            </div>
            <div className='addBtnContainer'>
                {stock === 0
                ?
                <button className="btn btn-outline-primary btn-block addBtn" disabled>No Stock</button>
                :
                <button className="btn btn-outline-primary btn-block addBtn" onClick={() => handlerOnAdd()} disabled={count === 0}>Agregar al carrito</button>
                }
            </div>
        </div>           
    );
}


export default ItemCount;