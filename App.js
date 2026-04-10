import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Feedback from "./components/Feedback";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (!item.name || !item.price) return;
    setCart([...cart, item]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} /> 
        </Routes>
      </div>
      
      <Cart cart={cart} setCart={setCart} />

      <Footer />
    </Router>
  );
}

export default App;