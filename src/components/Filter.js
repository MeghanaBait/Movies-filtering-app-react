import React from 'react';

function Filter({updateList, genres }) {
  return (
    <div className='filter'>
      <h2>Filter by Genre</h2>
        <div className="filter-section">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => updateList(genre)}>
            {genre}</button>
        ))}
        </div>

    </div>
  );
}

export default Filter;

