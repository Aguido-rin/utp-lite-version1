
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <i className="fas fa-calendar-alt"></i>
            <a href="#calendario">Calendario</a>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <i className="fas fa-money-bill"></i>
            <a href="#pagos">Pagos</a>
          </li>
          <li>
            <i className="fas fa-cogs"></i>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <i className="fas fa-file"></i>
            <a href="#tramites">Trámites</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;