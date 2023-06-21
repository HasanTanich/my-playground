import React, { useState } from 'react';

function AddMovieForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };
  const onImdbUrlChange = (e) => {
    setImdbUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="self-start flex-grow p-6 ml-4 border border-gray-400">
      <h1 className="mb-4 text-3xl font-semibold text-gray-900">Add a movie</h1>

      <form onSubmit={handleSubmit}>
        <div className="w-full mb-4">
          <label htmlFor="title" className="font-bold">
            Title
            <input
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              className={`w-full p-2 border ${
                title ? 'border-gray-300' : 'border-red-400'
              } mt-2 rounded ${title ? 'outline-blue-400' : 'outline-red-400'}`}
            />
          </label>
          <span
            className={`text-red-300 text-sm mt-2 ${title ? 'hidden' : ''}`}
          >
            Title is required
          </span>
        </div>
        <div className="w-full mb-4">
          <label htmlFor="description" className="font-bold">
            Description
            <input
              placeholder="Enter Description"
              value={description}
              onChange={onDescriptionChange}
              type="text"
              name="description"
              id="description"
              className="w-full p-2 mt-2 border border-gray-300 rounded outline-blue-400"
            />
          </label>
        </div>
        <div className="w-full mb-4">
          <label htmlFor="imageUrl" className="font-bold">
            Image URL
            <input
              value={imageUrl}
              onChange={onImageUrlChange}
              placeholder="Enter Image URL"
              type="text"
              name="imageUrl"
              id="imageUrl"
              className={`w-full p-2 border border-gray-300 mt-2 rounded ${
                title ? 'outline-blue-400' : 'outline-red-400'
              }`}
            />
          </label>
          <span
            className={`text-red-300 text-sm mt-2 ${imageUrl ? 'hidden' : ''}`}
          >
            Image URL is required
          </span>
        </div>
        <div className="w-full mb-4">
          <label htmlFor="imdbUrl" className="font-bold">
            Imdb URL
            <input
              value={imdbUrl}
              onChange={onImdbUrlChange}
              placeholder="Enter  Imdb URL"
              type="text"
              name="imdbUrl"
              id="imdbUrl"
              className={`w-full p-2 border border-gray-300 mt-2 rounded ${
                title ? 'outline-blue-400' : 'outline-red-400'
              }`}
            />
          </label>
          <span
            className={`text-red-300 text-sm mt-2 ${imdbUrl ? 'hidden' : ''}`}
          >
            Imdb URL is required
          </span>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-400 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddMovieForm;
