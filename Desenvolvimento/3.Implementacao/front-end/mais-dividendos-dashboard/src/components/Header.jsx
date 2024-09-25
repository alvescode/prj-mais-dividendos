import React from 'react';
import './Header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        {/*Logo*/}
        <Logo/>
            {/*Search Bar*/}
            <SearchBar/>
                {/*Nav*/}
                <Nav/>
    </header>
  );
}

export default Header