import React, { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import CartItems from './CartItems';
import { product } from '../../assets/data/data';
import './header.css';

function Card() {
  const [cartOpen, setCartOpen] = useState(false);
  const closeCard = () => {
    setCartOpen(null);
  };
  return (
    <>
      <div className='card' onClick={() => setCartOpen(!cartOpen)}>
        <BiShoppingBag className='cart-icon' />
        <span className='flex-center'>2</span>
      </div>
      <div className={cartOpen ? 'overlay' : 'nooverlay'}></div>

      <div className={cartOpen ? 'cartItem' : 'cart-hide'}>
        <div className='title flex'>
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        {product.map((item) => (
          <CartItems
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.name}
            desc={item.desc}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <div className='checkOut'>
          <button>
            <span>Proceed to Checkout</span>
            <label htmlFor=''>$240</label>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
