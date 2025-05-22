
import React from 'react';

function MyCourses() {
  const courses = [
    { name: "Liderazgo y Gestión", code: "ADM101" },
    { name: "Marcos de Diseño", code: "DIS201" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mis Cursos</h2>
      <ul>
        {courses.map((course, i) => (
          <li key={i}>
            {course.name} ({course.code})
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Atrás</button>
    </div>
  );
}

export default MyCourses;