
export const saveSchedule = (schedule) => {
  localStorage.setItem('schedule', JSON.stringify(schedule));
};

export const getSchedule = () => {
  return JSON.parse(localStorage.getItem('schedule')) || [];
};

export const saveTask = (task) => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};