import React from "react";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Demo's Blog Website</Link>
      </h1>
    </header>
  );
};

export default Header;
