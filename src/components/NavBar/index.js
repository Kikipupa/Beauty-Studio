import React from "react";
import "./index.css";

function NavBar() {
  return (
    <div className="nav-container">
      <span className="logo">Beauty Studio</span>
      <div className="nav-bar">
        <ul>
          <li>Головна</li>
          <li>Про нас</li>
          <li>Послуги</li>
          <li>Магазин</li>
          <li>Контакти</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
