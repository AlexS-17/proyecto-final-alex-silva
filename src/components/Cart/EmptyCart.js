import {Link} from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div>
            <h3>Su carrito de compras está vacío</h3>
            <Link to={"/"}>
                <button className="btn btn-outline-primary btn-block btnCart">Volver al inicio</button>
            </Link>
        </div>
    );
}

export default EmptyCart;