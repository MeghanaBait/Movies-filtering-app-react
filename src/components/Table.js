import React from 'react';

function Table({ movies }) {
  if (!movies) return <h1 className="loading">Fetching...</h1>
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;

