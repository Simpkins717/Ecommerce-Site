import React from 'react';
import './header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Medicine from '../../assets/medicine.png';
import Cart from './Cart';
import User from './User';

export const Header = () => {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    header.classList.toggle('active', this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={Medicine} alt='medicine' className='logo-img' />
          </div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
          <div className='account flex-center'>
            <Cart />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
