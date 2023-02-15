import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Home() {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    header.classList.toggle('active', this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'></div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
        </div>
      </header>
    </>
  );
}

export { Home };
