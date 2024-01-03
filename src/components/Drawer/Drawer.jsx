import React, { useEffect, useRef } from "react";
import { DrawerItem } from "../DrawerItem/DrawerItem";
import { useDrawerContext } from "../../context/Context";
import "./styles.css";

export const Drawer = ({ isOpen, title, drawerItems }) => {
  const toggleTextEl = useRef();
  const { toggleDrawer } = useDrawerContext();

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        toggleTextEl.current.textContent = title;
      }, 350);
    } else {
      toggleTextEl.current.textContent = ">";
    }
  }, [isOpen]);

  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
      <div
        className="items-container"
        style={{
          justifyContent:
            title === "Full dissertation" ? "space-evenly" : "flex-start",
          gap: title === "Full dissertation" ? "0" : "25px",
        }}
      >
        {drawerItems.length ? (
          drawerItems.map((item) => {
            return <DrawerItem key={item.title} item={item} />;
          })
        ) : (
          <div>No items</div>
        )}
      </div>

      <div className="toggle-container">
        <div
          className={`toggle ${isOpen ? "toggle-open" : ""}`}
          style={{ top: title === "Full dissertation" ? "150px" : "100px" }}
          onClick={() =>
            toggleDrawer({ toggle: title, open: !isOpen, items: drawerItems })
          }
        >
          <h3
            className={`toggle-text ${isOpen ? "toggle-text-open" : ""}`}
            ref={toggleTextEl}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
