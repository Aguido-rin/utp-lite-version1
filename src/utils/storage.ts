export const saveSchedule = (schedule: any) => {
  localStorage.setItem('schedule', JSON.stringify(schedule));
};

export const getSchedule = () => {
  const schedule = localStorage.getItem('schedule');
  return schedule ? JSON.parse(schedule) : [];
};

export const saveTask = (task: any) => {
  const tasks = localStorage.getItem('tasks');
  const parsedTasks = tasks ? JSON.parse(tasks) : [];
  parsedTasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(parsedTasks));
};

export const getTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};
