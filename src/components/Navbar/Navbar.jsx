import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import "./styles.css";

export const Navbar = () => {
  const navbarItems = [
    { title: "I", content: "Introduction" },
    { title: "II", content: "The Art of Phrasing" },
    { title: "III", content: "The Art of Inquiry" },
    { title: "IV", content: "Analysis and Performance" },
    { title: "V", content: "Schenkerian Analysis & Tonal Motion" },
    { title: "VI", content: "Cognitive Groupings in Gestalt Psychology" },
    { title: "VII", content: "Motorically Imposed Perceptual Groupings" },
    { title: "VIII", content: "Creative interaction" },
    { title: "IX", content: "The Performative-Deep-Structural-Analysis" },
    { title: "X", content: "Case Studies: The Informed Phrasing Course" },
  ];
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {navbarItems?.map((item, i) => (
          <NavbarItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
