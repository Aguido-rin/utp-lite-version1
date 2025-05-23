export const saveSchedule = (schedule: any) => {
  localStorage.setItem('schedule', JSON.stringify(schedule));
};

export const getSchedule = () => {
  return JSON.parse(localStorage.getItem('schedule')) || [];
};

export const saveTask = (task: any) => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasks = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
};
