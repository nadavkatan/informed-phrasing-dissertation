import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const DrawerItem = ({ item }) => {
  return (
    <div className="drawer-item">
      {item.icon ? (
        <Link to={item.link}>
          <img src={item.icon} alt="icon" className="icon" />
        </Link>
      ) : item.link ? (
        <Link to={item.link}>{item.content}</Link>
      ) : (
        <span onClick={item.action}>{item.content}</span>
      )}
    </div>
  );
};
