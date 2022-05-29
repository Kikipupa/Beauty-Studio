import React from "react";
import App from "../../App";

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

function footerBar() {}

export default NavBar;
