import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './components/context/CartContext';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path="/"
              element={<ItemListContainer/>}
            />
            <Route path="/category/"
              element={<ItemListContainer/>}
            />
            <Route path="/category/:category"
              element={<ItemListContainer/>}
            />
            <Route exact path="/detail/:id"
              element={<ItemDetailContainer/>}
            />
            <Route exact path="/cart"
              element={<Cart/>}
            />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
