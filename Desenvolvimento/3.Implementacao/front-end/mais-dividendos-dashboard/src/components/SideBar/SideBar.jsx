import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="javascript:void(0)" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="javascript:void(0)"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Documents</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="javascript:void(0)">
                <i className="bi bi-circle"></i>
                <span>Ações</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="bi bi-circle"></i>
                <span>Criptomoeda</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            href="javascript:void(0)"
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Tables</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>

          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          ></ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
