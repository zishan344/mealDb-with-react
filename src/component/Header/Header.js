import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div id="header">
      <input id="searchField" type="text" />
      <button className="searchBtn">Search</button>
    </div>
  );
};

export default Header;
