import React, { useState } from 'react';
import { AiOutlineSetting, AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import './header.css';

function User() {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button
              className='img'
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                className='profile-img'
                src='https://xsgames.co/randomusers/assets/avatars/male/76.jpg'
                alt='user-img'
              />
            </button>
            {profileOpen && (
              <div className='openProfile boxItem' onClick={close}>
                <div className='img'>
                  <img
                    className='profile-img'
                    src='https://xsgames.co/randomusers/assets/avatars/male/76.jpg'
                    alt='profile-img'
                  />
                </div>
                <div className='text'>
                  <h4>Eden Smith</h4>
                  <label htmlFor=''>San Fransico, CA</label>
                </div>
                <div className='box'>
                  <AiOutlineSetting />
                  <h4>My Account</h4>
                </div>
                <div className='box'>
                  <BsBagCheck />
                  <h4>My Order</h4>
                </div>
                <div className='box'>
                  <AiOutlineHeart />
                  <h4>Wishlist</h4>
                </div>
                <div className='box'>
                  <GrHelp />
                  <h4>Help</h4>
                </div>
                <div className='box'>
                  <BiLogOut />
                  <h4>Log Out</h4>
                </div>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
}

export default User;
