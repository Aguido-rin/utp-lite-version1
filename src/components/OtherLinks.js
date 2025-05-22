
import React from 'react';
import './App.css';

const OtherLinks = () => {
  return (
    <div className="container">
      <h2>Otros enlaces:</h2>
      <div className="card">
        <i className="fas fa-arrow-right"></i>
        <h3>Ruta de alumnos nuevos 2025</h3>
      </div>
      <div className="card">
        <i className="fas fa-info-circle"></i>
        <h3>Información institucional</h3>
      </div>

      <h2>Tus plataformas digitales:</h2>
      <div className="card">
        <img src="/utp-info.png" alt="UTP Info" />
        <h3>UTP+info</h3>
        <p>Encuentra toda la información de la universidad.</p>
      </div>
      <div className="card">
        <img src="/utp-class.png" alt="UTP Class" />
        <h3>UTP+class</h3>
        <p>Revisa el contenido de tus clases desde tu computadora o celular.</p>
      </div>
    </div>
  );
};

export default OtherLinks;