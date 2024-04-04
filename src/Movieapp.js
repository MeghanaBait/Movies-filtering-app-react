import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Table from './components/Table';
import movies from './components/Data';
import './index.scss';

function Movieapp() {
  const genres = [...new Set(movies.map(movie => movie.genre))];
  const [query, setQuery] = useState(null);

  let count = movies.length;

  const updateList =(newQuery) =>{
    if (query === newQuery) {
        setQuery(null);
      } else {
        setQuery(newQuery);
    }
  }

  const filteredMovies = query ? movies.filter(movie => movie.genre === query):movies;

  return (
    <div className='container'>
      <Header count={count} />
      <Filter updateList={updateList} genres={genres} />
      <Table movies={filteredMovies} />
    </div>
  );
}

export default Movieapp;
