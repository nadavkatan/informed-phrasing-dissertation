import React, { useState, useEffect } from "react";
import "./styles.css";

export const NavbarItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="navbar-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`navbar-content-wrapper ${hover ? "hovered" : ""}`}>
        <div className="navbar-title">
          <h3>{item.title}</h3>
        </div>

        <div className={"navbar-content"}>
          {" "}
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
