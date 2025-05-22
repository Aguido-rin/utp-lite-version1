
import React, { useState } from 'react';

function TaskForm() {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const task = { id: Date.now(), text, status: 'pending' };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Tarea guardada localmente. Se enviará cuando tengas conexión.');
    sendPendingTasks();
  };

  return (
    <div>
      <h3>Entrega de Tarea</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu tarea aquí..."
      />
      <button onClick={handleSubmit}>Guardar Tarea</button>
    </div>
  );
}

async function sendPendingTasks() {
  if (!navigator.onLine) return;

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  for (let task of tasks) {
    try {
      console.log('Enviando tarea:', task.text);
      // Simular envío exitoso
      tasks = tasks.filter(t => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (err) {
      console.error('No se pudo enviar:', err);
    }
  }
}

export default TaskForm;