import React from 'react';
import Movie from './Movie';

function MoviesList({ movies }) {
  return (
    <div className="flex flex-wrap w-2/3 gap-6">
      {movies.map((item) => (
        <Movie key={item.title} movie={item} />
      ))}
    </div>
  );
}

export default MoviesList;
