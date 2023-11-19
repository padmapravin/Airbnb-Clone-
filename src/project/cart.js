// Cart.js

import React from 'react';

const cart = ({ items }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default cart;
