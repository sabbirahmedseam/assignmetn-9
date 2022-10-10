import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav className="header">
      <h1>exam test</h1>
      <div className="link">
        <Link to="/">Topics</Link>
        <Link to="/statistic">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
