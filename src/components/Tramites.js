
import React from 'react';

function Tramites() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Trámites</h2>
      <ul>
        <li><button>Rectificación de nota</button></li>
        <li><button>Certificado académico</button></li>
        <li><button>Constancia de matrícula</button></li>
      </ul>
      <button onClick={() => window.history.back()}>Atrás</button>
    </div>
  );
}

export default Tramites;