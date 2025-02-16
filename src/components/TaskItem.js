import React, { useState } from 'react';
import axios from 'axios';

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${task._id}`);
    setTasks(prev => prev.filter(t => t._id !== task._id));
  };

  const handleSave = async () => {
    const updatedTask = { ...task, title, description, priority, status };
    const response = await axios.put(`/api/tasks/${task._id}`, updatedTask);
    setTasks(prev => prev.map(t => t._id === task._id ? response.data : t));
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded shadow">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border p-1 rounded w-full mb-2" 
          />
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="border p-1 rounded w-full mb-2" 
          />
          <select 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)} 
            className="border p-1 rounded w-full mb-2"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)} 
            className="border p-1 rounded w-full mb-2"
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-1 rounded mr-2">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-1 rounded">Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
