import React from 'react';
import './Logo.css';

function Logo() {
    
  return (
    <div className='d-flex align-items-start justify-content-start'>
        <a href="/" className='logo d-flex align-items-center'>
        <i className="bi bi-bank"></i>
        <span className='d-none d-lg-block'>MaisDividendos</span>
        </a>
    </div>
  );
}

export default Logo;