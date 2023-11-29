import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import homeLogo from "../../assets/images/home.png";

import "./styles.css";

export const Navbar = () => {
  const navbarItems = [
    {
      title: "",
      content: null,
      icon: homeLogo,
      link: "/",
    },
    {
      title: "...",
      content: "Introduction: The Master and the Apprentice",
      link: "introduction",
    },
    { title: "I", content: "The Art of Phrasing", link: "1" },
    { title: "II", content: "The Art of Inquiry", link: "2" },
    {
      title: "III",
      content: "The Relationship Between Music Analysis and Performance",
      link: "3",
    },
    {
      title: "IV",
      content: "Schenkerian Analysis and Tonal Motion",
      link: "4",
    },
    {
      title: "V",
      content: "Cognitive Groupings in Gestalt Psychology",
      link: "5",
    },
    {
      title: "VI",
      content: "The Motorically Imposed Perceptual Groupings",
      link: "6",
    },
    {
      title: "VII",
      content: "Creative interaction Through Generative Improvisation",
      link: "7",
    },
    {
      title: "VIII",
      content: "The Performative Deep Structural Analysis",
      link: "8",
    },
    {
      title: "IX",
      content: "Case Studies - The Informed Phrasing Elective Course",
      link: "9",
    },
    {
      title: "B",
      content: "Bibliography",
      link: "bibliography",
    },
  ];

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {navbarItems?.map((item, i) => (
          <NavbarItem key={`navbar-item-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};
