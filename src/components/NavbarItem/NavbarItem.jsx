import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

export const NavbarItem = ({ item }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const includesChapter = location.pathname.includes("chapter");

  const handleNavigation = () => {
    const includesChapter = location.pathname.includes("chapter");
    includesChapter
      ? window.location.replace(item.link)
      : navigate(`chapter/${item.link}`);
  };

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
          <p onClick={handleNavigation}>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
