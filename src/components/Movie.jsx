/* eslint-disable react/prop-types */
import React from 'react';

function Movie({ movie }) {
  return (
    <div className="flex flex-col items-center w-full p-4 border border-gray-400 rounded flex-1-1 md:max-w-xs">
      <img src={movie.imgUrl} alt={movie.title} className="flex-grow" />
      <h2 className="self-stretch mt-2 text-xl font-semibold text-gray-800">
        {movie.title}
      </h2>
      <p className="self-stretch mt-2">{movie.description}</p>
      <a href={movie.imdbUrl} className="self-stretch text-blue-600">
        IMDB
      </a>
    </div>
  );
}

export default Movie;
