import React, { useState } from "react";
import { DrawerItem } from "../DrawerItem/DrawerItem";
import homeLogo from "../../assets/images/home.png";
import { useDrawerContext } from "../../context/Context";
import "./styles.css";

export const Drawer = ({ isOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const { toggleDrawer } = useDrawerContext();

  const navbarItems = [
    {
      title: "",
      content: null,
      icon: homeLogo,
      link: "/",
    },
    {
      title: "A",
      content: "Acknowledgments",
      link: "/chapter/acknowledgments",
    },
    {
      title: "...",
      content: "Introduction: The Master and the Apprentice",
      link: "/chapter/introduction",
    },
    { title: "I", content: "The Art of Phrasing", link: "/chapter/1" },
    { title: "II", content: "The Art of Inquiry", link: "/chapter/2" },
    {
      title: "III",
      content: "The Relationship Between Music Analysis and Performance",
      link: "/chapter/3",
    },
    {
      title: "IV",
      content: "Schenkerian Analysis and Tonal Motion",
      link: "/chapter/4",
    },
    {
      title: "V",
      content: "Cognitive Groupings in Gestalt Psychology",
      link: "/chapter/5",
    },
    {
      title: "VI",
      content: "The Motorically Imposed Perceptual Groupings",
      link: "/chapter/6",
    },
    {
      title: "VII",
      content: "Creative interaction Through Generative Improvisation",
      link: "/chapter/7",
    },
    {
      title: "VIII",
      content: "The Performative Deep Structural Analysis",
      link: "/chapter/8",
    },
    {
      title: "IX",
      content: "Case Studies - The Informed Phrasing Elective Course",
      link: "/chapter/9",
    },
    {
      title: "B",
      content: "Bibliography",
      link: "/chapter/bibliography",
    },
  ];
  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
      <div className="items-container">
        {navbarItems.map((item) => {
          return <DrawerItem key={item.title} item={item} />;
        })}
      </div>

      <div className="toggle-container">
        <div
          className={`toggle ${isOpen ? "toggle-open" : ""}`}
          onClick={() => toggleDrawer(!isOpen)}
        >
          <h3 className={`toggle-text ${isOpen ? "toggle-text-open" : ""}`}>
            {"<"}
          </h3>
        </div>
      </div>
    </div>
  );
};
