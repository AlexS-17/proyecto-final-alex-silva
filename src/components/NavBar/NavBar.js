import '../../App.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

function NavBar() {
    
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-light">
            <div className="container-fluid">

                <Link to="/" className="navbar-brand" id="pageTitle">
                    <img className='pixel-heart' src="https://static.vecteezy.com/system/resources/previews/013/743/843/original/red-heart-pixel-art-png.png" alt="logo" />
                </Link>
                <Link to="/cart"><CartWidget/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
        </nav>
    );
}

export default NavBar;