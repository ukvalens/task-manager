import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, priority, status };
    const response = await axios.post('/api/tasks', newTask);
    setTasks(prev => [...prev, response.data]);
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <div className="mb-2">
        <label className="block">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1 rounded w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-1 rounded w-full"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-1 rounded w-full"
        >
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
