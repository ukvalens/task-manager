import React from 'react';
import axios from 'axios';

const TaskCard = ({ task, setTasks }) => {
  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${task._id}`);
    setTasks(prev => prev.filter(t => t._id !== task._id));
  };

  const handleToggleStatus = async () => {
    const updatedTask = { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' };
    const response = await axios.put(`/api/tasks/${task._id}`, updatedTask);
    setTasks(prev => prev.map(t => t._id === task._id ? response.data : t));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleToggleStatus} className="bg-green-500 text-white p-1 rounded mr-2">
        {task.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
      </button>
      <button onClick={handleDelete} className="bg-red-500 text-white p-1 rounded">
        Delete
      </button>
    </div>
  );
};

export default TaskCard;

