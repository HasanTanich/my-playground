import React from 'react';
import MoviesList from './MoviesList';
import AddMovieForm from './AddMovieForm';
import movies from '../movies.json';

function Movies() {
  return (
    <div className="flex items-center justify-between mt-10">
      <MoviesList movies={movies} />
      <AddMovieForm movies={movies} />
    </div>
  );
}

export default Movies;
