import React from 'react';

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <button className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          Você tem 3 novas mensagens
          <button className="badge rounded-pill bg-primary p-2 ms-2">Ver tudo</button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <button className="message-link">
            <img src="../images/homem.png" alt="Avatar de Elio Zacarias" className="rounded-circle" />
            <div>
              <h4>Elio Zacarias</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident ex natus aperiam consequuntur vero.</p>
              <p>4 horas atrás</p>
            </div>
          </button>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
