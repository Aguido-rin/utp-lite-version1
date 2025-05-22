
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ClassSchedule from './components/ClassSchedule';
import MyCourses from './components/MyCourses';
import Payments from './components/Payments';
import Tramites from './components/Tramites';

// CSS global
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Menú lateral */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horario" element={<ClassSchedule />} />
            <Route path="/cursos" element={<MyCourses />} />
            <Route path="/pagos" element={<Payments />} />
            <Route path="/tramites" element={<Tramites />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;