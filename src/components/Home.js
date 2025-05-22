
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Bienvenido a UTP+ Lite</h2>
      <nav>
        <ul>
          <li><Link to="/horario">Calendario de Clases</Link></li>
          <li><Link to="/cursos">Mis Cursos</Link></li>
          <li><Link to="/pagos">Estado de Pagos</Link></li>
          <li><Link to="/tramites">Trámites</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;