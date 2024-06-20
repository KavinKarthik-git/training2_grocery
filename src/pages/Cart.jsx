// src/pages/Cart.js
import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';

function Cart() {
  const [cart, setCart] = useAtom(cartAtom);

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity -= 1;
    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1); 
    }
    setCart(newCart);
  };

  const handleCheckout = () => {
    alert('Thank you, for choosing us. Your Cart will arrive in 2 days.');
    setCart([]);
  };

  return (
    <div className='cartbody'>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(index)}>+</button>
            <button onClick={() => decrementQuantity(index)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;



