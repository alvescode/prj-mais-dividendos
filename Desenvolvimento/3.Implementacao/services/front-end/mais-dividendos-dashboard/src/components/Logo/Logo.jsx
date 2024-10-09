import React from 'react';
import './Logo.css';

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center">
      <a href="/" className="logo d-flex align-items-center">
        <i className="bi bi-bank"></i>
        <span className="d-none d-lg-block">MaisDividendos</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSideBar}></i>
    </div>
  );
}

export default Logo;