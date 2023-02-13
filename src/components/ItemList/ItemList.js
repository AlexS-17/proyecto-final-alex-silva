import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Item from "./Item";
import '../../App.css';
import loadingImg from "../../images/loading-logo.png";
import {getFirestore, collection, getDocs, query, orderBy, where} from 'firebase/firestore';

function ItemList() {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = category ?
            query(collection(db, 'productos'), where('category', '==', category), orderBy('price'))
            :
            query(collection(db, 'productos'), orderBy('price'));
        getDocs(queryCollection).then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false));
    }, [category]);


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {loading ? 
                    <img src={loadingImg} className="loadingDonut" alt="loading..."/>
                    :
                    productos.map((producto) => <Item producto={producto} key={producto.id}/>)
                }
            </div>
        </div>
    );
}

export default ItemList;