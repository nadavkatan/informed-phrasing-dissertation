import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

export const NavbarItem = ({ item }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (item.link === "/") {
      navigate("/");
    } else {
      const includesChapter = location.pathname.includes("chapter");
      includesChapter
        ? window.location.replace(item.link)
        : navigate(`chapter/${item.link}`);
    }
  };
  const handleHover = (event) => {
    if (event === "enter") {
      if (item.title !== "...") {
        setHover(true);
      }
      return;
    }
    if (event === "leave") {
      if (item.title !== "...") {
        setHover(false);
      }
      return;
    }
  };

  return (
    <div
      className="navbar-item"
      onMouseEnter={() => handleHover("enter")}
      onMouseLeave={() => handleHover("leave")}
      onClick={handleNavigation}
    >
      <div className={`navbar-content-wrapper ${hover ? "hovered" : ""}`}>
        <div className="navbar-title">
          <h3>{item.title}</h3>
        </div>

        <div className={`navbar-content`}>
          {" "}
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
