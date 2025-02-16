import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredTasks = tasks.filter(task => 
    filter === '' || task.priority === filter || task.status === filter
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4">
        <label className="mr-2">Filter by:</label>
        <select onChange={e => setFilter(e.target.value)} className="border p-1 rounded">
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <TaskForm setTasks={setTasks} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map(task => (
          <TaskCard key={task._id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
