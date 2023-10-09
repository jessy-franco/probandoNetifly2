import React from 'react';
import dino from './components/ImgHeader/dinosaurio.png';
import logo from './components/ImgHeader/Vivero-SucuRex.png';
import macetita from './components/ImgHeader/planta.png'; 
import error from "./components/ImgHeader/lost-john-travolta.gif";
import './App.css';
import CollapsibleExample from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemsProdList/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout" 
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './store/CartContext';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <div>
      <section className="zona-1">
        <header className="encabezado">
          <div className="divColor">
            <img src={dino} alt="logo" className='dinoSucu' />
            <img src={logo} alt="viveroLogo" width="250px" height="auto" className='logImg' />
            <img src={macetita} alt="plantalo" className='dinoSucu' />
          </div>
        </header>
      </section>
      <div className='page-container'>
        <div className='content-wrap'>
          {/* agrego CArtContext y ahora todos estos compoenentes son sus hijos */}
          <CartContextProvider>
            <BrowserRouter>
              <CollapsibleExample />
              <section>
                <Routes>
                  <Route
                    path="/"
                    element={<ItemListContainer greeting="Bienvenidos" />}
                  />
                  <Route
                    path="/category/:categoryid"
                    element={<ItemListContainer />}
                  />
                  <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
                  <Route path="/cart" element ={<CartView />}/>
                  <Route path="/checkout" element ={<Checkout />}/>
                  <Route path="*" element={<div><h1 style={{ textAlign: "center" }}>Error 404: La ruta no existe</h1><img src={error} alt="error404" style={{ marginLeft: "30%", paddingBottom: "2%" }} /></div>} />
                </Routes>
              </section>
              <section>
                <Footer />
              </section>
            </BrowserRouter>
          </CartContextProvider>
          
        </div>
      </div>
    </div >
  );
}

export default App;
