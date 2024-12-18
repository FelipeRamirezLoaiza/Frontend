import React from "react";
import { CartContainer, CartItem, CartTotal, RemoveButton } from "./ShoppingCartStyle";

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContainer>
      <h2>Carrito de compras</h2>
      {cartItems.map((item, index) => (
        <CartItem key={index}>
          <span>{item.name}</span>
          <span>{item.price} USD</span>
          <RemoveButton onClick={() => removeFromCart(item)}>Eliminar</RemoveButton>
        </CartItem>
      ))}
      <CartTotal>Total a pagar: {total} USD</CartTotal>
    </CartContainer>
  );
};

export default ShoppingCart;



