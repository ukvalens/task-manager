import React from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import FilterSort from './components/FilterSort';
import TaskCard from './components/TaskCard';

const App = () => {
  return (
    <div>
      <TaskForm />
      <TaskItem />
      <FilterSort />
      <TaskCard />
    </div>
  );
};

export default App;