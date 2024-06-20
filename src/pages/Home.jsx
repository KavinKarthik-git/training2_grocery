// src/pages/Home.js
import React from 'react';
import items from '../data';
import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';

function Home() {
  const [cart, setCart] = useAtom(cartAtom);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <div className="item-list">
      <h1>Groceries</h1>
      <div>
        {items.map(item => (
          <div key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Volume: {item.volume}</p>
            <div  className="item-img">
              {item.images.map((url, index) => (
                <img key={index} src={url} alt={item.name} style={{ width: '100px', height: '100px' }} />
              ))}
            </div>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      
           
            














    </div>
  );
}

export default Home;
