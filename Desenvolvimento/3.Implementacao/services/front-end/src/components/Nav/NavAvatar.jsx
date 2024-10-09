import React from 'react';
import profileImg from '../../images/homem.png';


function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
      <a href='#'

        className='nav-link nav-profile d-flex align-items-center pe-0'
        data-bs-toggle='dropdown'
      >
        <img src={profileImg} width={30} alt="Profile" className='rounded-circle'/>
        <span className='d-none d-md-block dropdown-toggle ps-2'>Davi H</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>

        <li className='dropdown-header'>
          <h6>Davi</h6>
          <span>Investidor</span>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>
        
        <li>
          <a href='#' className='dropdown-item d-flex'>

            <i className='bi bi-person'></i>
            <span>Meu Perfil</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li>
          <a href='#' className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-gear'></i>
            <span>Configurações</span>
          </a>
        </li>

      </ul>
    </li>
  );
}

export default NavAvatar;
