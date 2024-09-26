import React from 'react';
import './Nav.css';
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavAvatar from './NavAvatar';

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            <NavNotice/>
            <NavMessage/>
            <NavAvatar/>
        </ul>
    </nav>
  )
}

export default Nav