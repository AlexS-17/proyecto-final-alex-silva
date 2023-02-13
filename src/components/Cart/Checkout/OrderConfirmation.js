import {Link} from 'react-router-dom';

const OrderConfirmation = ({orderID, clearCart}) => {
    return (
        <div className="modal-body confirmationModal">
            <h3>¡Gracias por su compra!</h3>
            <p>Su orden de compra es: <span>{orderID}</span></p>
            <Link to={"/"}>
                <button onClick={clearCart} className="btn btn-outline-primary btn-block addBtn" data-bs-dismiss="modal">Finalizar</button>
            </Link>
        </div>
    );
}

export default OrderConfirmation;