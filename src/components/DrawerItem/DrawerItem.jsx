import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDrawerContext } from "../../context/Context";
import "./styles.css";

export const DrawerItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleDrawer } = useDrawerContext();

  //   const handleNavigation = () => {
  //     toggleDrawer(false);
  //     if (item.link === "/") {
  //       navigate("/");
  //     } else {
  //       const includesChapter = location.pathname.includes("chapter");
  //       console.log("includes chapter: ", includesChapter);
  //       includesChapter
  //         ? window.location.replace(item.link)
  //         : navigate(`chapter/${item.link}`);
  //     }
  //   };

  //   const getNavigationLink = ()=>{
  //     if (item.link === "/") {
  //        return "/"
  //       } else {
  //         const includesChapter = location.pathname.includes("chapter");
  //         console.log("includes chapter: ", includesChapter);
  //         includesChapter
  //           ? window.location.replace(item.link)
  //           : navigate(`chapter/${item.link}`);
  //       }
  //   }

  return (
    // <div onClick={handleNavigation} className="drawer-item">
    <div className="drawer-item">
      {item.icon ? (
        <Link to={item.link}>
          <img src={item.icon} alt="icon" className="icon" />
        </Link>
      ) : (
        <Link to={item.link}>{item.content}</Link>
      )}
    </div>
  );
};
