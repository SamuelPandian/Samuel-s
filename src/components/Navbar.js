<<<<<<< HEAD
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

=======
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

>>>>>>> d54eddd8b4fcdd1bb9420795444e4bf7a23346ef
export default Navbar;