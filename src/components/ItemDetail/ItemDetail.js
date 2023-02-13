import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import Detail from "./Detail";
import '../../App.css';
import loadingImg from "../../images/loading-logo.png";

function ItemDetail() {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryDb = doc(db, 'productos', id); 
        getDoc(queryDb).then(res => setProducto({ id: res.id, ...res.data()}))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false));
    }, [id]);

    return (
        <div>
            {loading ? 
                <img src={loadingImg} className="loadingDonut" alt="loading..."/>
                :
                <Detail producto={producto}/>
            }
        </div>
    );



}
export default ItemDetail;