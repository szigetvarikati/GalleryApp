import React, { useState } from 'react';

function SortSelect({ handleSort }) {
  const [idSortDirection, setIdSortDirection] = useState('asc');

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    const [columnName, direction] = selectedOption.split('_');

    setIdSortDirection(
      direction === idSortDirection
        ? direction === 'asc'
          ? 'desc'
          : 'asc'
        : direction
    );

    handleSort(columnName, direction);
  };

  return (
    <div className="sort-bar">
      <select className="form-select" onChange={handleSelectChange}>
        <option value="id_asc">Sort by ID ▲</option>
        <option value="id_desc">Sort by ID ▼</option>
      </select>
    </div>
  );
}

export default SortSelect;
