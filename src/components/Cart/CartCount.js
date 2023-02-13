const CartCount = ({quantity, stock, onChange}) => {

    const handlerAdd =()=>{
        if(quantity < stock) {
            onChange(1);
        } 
    }
    const handlerRm =()=>{
        if(quantity > 1) {
            onChange(-1);
        } 
    }
    
    return (
        <div  className='counterContainer'>
            <button className="btn btn-primary btnCounter" onClick={() => handlerRm()} disabled={quantity === 1}>-</button>
            <button className="btn btn-primary btnCounter" onClick={() => handlerAdd()} disabled={quantity === stock}>+</button>
        </div>           
    );
}


export default CartCount;