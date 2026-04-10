<<<<<<< HEAD
import React from "react";
import FoodItem from "../components/FoodItem";

function Menu({ addToCart }) {
  const items = [
    { id: 1, name: "Pizza", price: 200 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 180 },
    { id: 4, name: "Sandwich", price: 90 },
    { id: 5, name: "Fries", price: 80 },
  ];

  return (
    <div className="page">
      <h1>Menu</h1>
      <p>Select your favorite dishes and add them to your cart.</p>

      <div className="menu-grid">
        {items.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

=======
import React from "react";
import FoodItem from "../components/FoodItem";

function Menu({ addToCart }) {
  const items = [
    { id: 1, name: "Pizza", price: 200 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 180 },
    { id: 4, name: "Sandwich", price: 90 },
    { id: 5, name: "Fries", price: 80 },
  ];

  return (
    <div className="page">
      <h1>Menu</h1>
      <p>Select your favorite dishes and add them to your cart.</p>

      <div className="menu-grid">
        {items.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

>>>>>>> d54eddd8b4fcdd1bb9420795444e4bf7a23346ef
export default Menu;