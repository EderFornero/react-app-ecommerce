import React from 'react';
import './App.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Nav
import Navbar from './components/Header/Navbar';
//Pages
import Home from './components/pages/Home';
import Fragance from './components/pages/Fragance';
import Watch from './components/pages/Watch';
import Handbag from './components/pages/Handbag';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';

//CartContext

import CartProvider from './context/CartContext';
import InCart from './components/InCart/InCart';




function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:status" element={<Home />} />
          <Route path="/fragance" element={<Fragance />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/handbag" element={<Handbag />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<InCart />} />
        </Routes>
      </CartProvider>

    </Router>
  );
}

export default App;
