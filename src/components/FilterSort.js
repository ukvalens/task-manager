import React from 'react';

const FilterSort = ({ setFilter, setSort }) => {
  return (
    <div className="mb-4 flex justify-between">
      <div>
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
      <div>
        <label className="mr-2">Sort by:</label>
        <select onChange={e => setSort(e.target.value)} className="border p-1 rounded">
          <option value="">None</option>
          <option value="Priority">Priority</option>
          <option value="Status">Status</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
