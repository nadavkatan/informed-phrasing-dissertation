import React from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import "./styles.css";

export const Navbar = () => {
  const navbarItems = [
    {
      title: "...",
      content: null,
      link: "/",
    },
    {
      title: "I",
      content: "Introduction: The Master and the Apprentice",
      link: "1",
    },
    { title: "II", content: "The Art of Phrasing", link: "2" },
    { title: "III", content: "The Art of Inquiry", link: "3" },
    { title: "IV", content: "Analysis and Performance", link: "4" },
    {
      title: "V",
      content: "Schenkerian Analysis & Tonal Motion",
      link: "5",
    },
    {
      title: "VI",
      content: "Cognitive Groupings in Gestalt Psychology",
      link: "6",
    },
    {
      title: "VII",
      content: "Motorically Imposed Perceptual Groupings",
      link: "7",
    },
    { title: "VIII", content: "Creative interaction", link: "8" },
    {
      title: "IX",
      content: "The Performative-Deep-Structural-Analysis",
      link: "9",
    },
    {
      title: "X",
      content: "Case Studies: The Informed Phrasing Course",
      link: "10",
    },
  ];
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {navbarItems?.map((item, i) => (
          <NavbarItem key={item.link} item={item} />
        ))}
      </div>
    </div>
  );
};