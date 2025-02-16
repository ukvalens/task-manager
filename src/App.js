import React from 'react';
import TaskList from './components/TaskList'; 
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Task Manager</h1>
      </header>
      <main className="p-4">
        <TaskList />
      </main>
    </div>
  );
};

export default App;
