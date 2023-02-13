import {Link} from 'react-router-dom';
import ItemList from "./ItemList";
import '../../App.css';

function ItemListContainer() {

    return (
        <div>
            <nav className="categoriesNav">
                <Link to={`/category`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Todos los productos</button>
                </Link>
                <Link to={`/category/Imanes`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Imanes</button>
                </Link>
                <Link to={`/category/Llaveros`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Llaveros</button>
                </Link>
                <Link to={`/category/Cuadros`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Cuadros</button>
                </Link>
            </nav>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;