import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="one">
      <nav className="header">
        <h1>Coding Crackers</h1>
        <div className="navLink">
          <NavLink to="/">Topics</NavLink>
          <NavLink to="/statistic">Statistics</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
