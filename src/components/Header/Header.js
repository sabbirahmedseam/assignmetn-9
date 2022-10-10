import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav className="header">
      <h1>exam test</h1>
      <div className="navLink">
        <NavLink className={(isActive)=>isActive?'active':undefined} to="/">Topics</NavLink>
        <NavLink to="/statistic">Statistics</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;
