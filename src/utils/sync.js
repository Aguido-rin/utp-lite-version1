
export const sendPendingTasks = async () => {
  if (!navigator.onLine) return;

  const pendingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  for (let task of pendingTasks) {
    try {
      // Aquí iría la llamada real a Firestore o API
      console.log('Enviando tarea:', task.text);
      // Elimina la tarea después de enviarla
      const remaining = JSON.parse(localStorage.getItem('tasks')).filter(t => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(remaining));
    } catch (err) {
      console.error('No se pudo enviar la tarea:', err);
    }
  }
};