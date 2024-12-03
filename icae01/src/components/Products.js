import React, { useState } from "react";
import "../assets/CSS/layout.css";
import Product from "./Product";
import Cart from "./Cart";
import { flowers } from "./FlowerDB";

export default function Products() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (flower, quantity) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex(item => item.id === flower.id);

    if (itemIndex > -1) {
      updatedCart[itemIndex].qty += quantity;
    } else {
      updatedCart.push({ ...flower, qty: quantity });
    }
    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="item1">
        <h1>Flower Shop</h1>
      </div>
      <div className="item2">
        <h4 className="card-title">Buy flowers</h4>
        <div className="grid-container">
          {flowers.map(flower => (
            <Product key={flower.id} flower={flower} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="item3">
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}
