import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import FilterSort from './FilterSort';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  
  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredTasks = tasks.filter(task => 
    filter === '' || task.priority === filter || task.status === filter
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'Priority') {
      const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sort === 'Status') {
      const statusOrder = { 'Completed': 1, 'Pending': 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    } else {
      return 0;
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <FilterSort setFilter={setFilter} setSort={setSort} />
      <TaskForm setTasks={setTasks} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedTasks.map(task => (
          <TaskItem key={task._id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
