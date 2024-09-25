import React from 'react';

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
      <button className='nav-link nav-icon' data-bs-toggle='dropdown'>
        <i className='bi bi-bell'></i>
        <span className='badge bg-primary badge-number'>4</span>
      </button>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notification'>
        <li className='dropdown-header'>
          Você tem 4 notificações
          <button className='btn badge rounded-pill bg-primary p-2 ms-2'>
            Ver Tudo
          </button>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>30 min atrás</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
          <i className='bi bi-x-circle text-danger'></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>1 hr atrás</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
          <i className='bi bi-check-circle text-success'></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>2 hr atrás</p>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
