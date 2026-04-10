import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="nav">
      <h2 className="logo">Foodie</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/feedback">Feedback</Link> 
        <span className="cart-badge">Items In Cart:  {cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;