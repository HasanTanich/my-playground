import React, { useRef, useState } from "react";

export const Playfield = () => {
  const nameRef = useRef();
  const surnameRef = useRef();

  const [titleChange, setTitleChange] = useState("Submit Form");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(surnameRef.current.value);
  };

  const onChangeFormTitle = (event) => {
    setTitleChange(event.target.value);
  };

  return (
    <div>
      <div className="w-1/2 p-5 flex items-center justify-center flex-col">
        <button className="text-lg border border-orange-700 p-4 mt-4 rounded-lg w-1/2 bg-gray-100 mb-10 self-stretch">
          I am a button CLICK ME PLEASE!
        </button>

        <form
          action="#"
          className="border border-blue-300 p-6 self-stretch"
          onSubmit={handleSubmit}
        >
          <h2 className="p-5 text-xl font-bold text-red-500 capitalize">
            {titleChange}
          </h2>

          <div className="flex items-center justify-between gap-10 mb-5">
            <label htmlFor="title" className="font-semibold ">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={titleChange}
              onChange={onChangeFormTitle}
              className="p-4 w-1/2 h-8 border border-gray-200 grow capitalize"
            />
          </div>

          <div className="flex items-center justify-between gap-10 mb-5">
            <label htmlFor="name" className="font-semibold ">
              Name:
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              ref={surnameRef}
              className="p-4 w-1/2 h-8 border border-gray-200 grow"
            />
          </div>

          <div className="flex items-center justify-between gap-10 mb-5">
            <label htmlFor="surname" className="font-semibold">
              Surname:
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              ref={nameRef}
              className="p-4 w-1/2 h-8 border border-gray-200 grow"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-400 text-white font-bold text-xl m-auto rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="container border border-gray-500 w-full p-4">
        <div className="item-1 flex flex-col items-center justify-center border border-red-300 p-16 bg-red-400 text-yellow-400 font-bold">
          <h1>hello there people how are you</h1>
          <button>I am item 1 hehe</button>
        </div>
        <div className="item-2 bg-blue-700 text-white p-5 h-24">
          <h3>Item 2</h3>
          <h3>Item 2</h3>
          <h3>Item 2</h3>
          <h3>Item 2</h3>
          <h3>Item 2</h3>
        </div>
        <div className="item-3 bg-gray-400 p-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum
            ab consequuntur labore mollitia explicabo recusandae hic! Magnam
            ducimus, odit praesentium beatae, magni ut ipsum minima unde veniam,
            exercitationem doloribus.
          </p>
        </div>
        <div className="item-4 w-10 p-8 border border-blue-500">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div className="item-5 bg-yellow-300 p-4 mr-4">
          <h1>I'm item 5, I think I'm beautiful</h1>
        </div>
        <div className="item-6 bg-pink-700 p-7">
          <h1>I am item 6 and I think item 5 is ugly</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-20">
        <div className="h-20 bg-green-400 card"></div>
        <div className="h-20 bg-green-400 card"></div>
        <div className="h-20 bg-green-400 card"></div>
        <div className="h-20 bg-green-400 card"></div>
        <div className="h-20 bg-green-400 card"></div>
      </div>
    </div>
  );
};
