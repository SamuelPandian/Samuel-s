
import React from "react";
import PropTypes from "prop-types";

function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <hr />
          <h4>Total: ₹{total}</h4>

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;