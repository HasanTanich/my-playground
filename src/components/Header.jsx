import React from "react";
import { NavLink } from "react-router-dom";
// import styles from "../styles/Header.module.css";

function Header() {
  return (
    <>
      <div className="mt-4 text-blue-500 border border-red-500 flex gap-2 items-center h-16">
        <NavLink
          to="/"
          className="flex flex-col items-center h-full justify-center"
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="flex flex-col items-center h-full justify-center"
        >
          Movies
        </NavLink>
        <NavLink
          to="/playfield"
          className="flex flex-col items-center h-full justify-center"
        >
          Playfield
        </NavLink>
        <NavLink
          to="/tailwind"
          className="flex flex-col items-center h-full justify-center"
        >
          TailWind
        </NavLink>
        <NavLink
          to="/profile"
          className="flex flex-col items-center h-full justify-center"
        >
          Profile
        </NavLink>
      </div>
      {/* <h1 className={styles.header}>green</h1> */}
    </>
  );
}

export default Header;
