// DrawerContext.js
import { createContext, useState, useContext } from "react";
import homeLogo from "../assets/images/home.png";

const DrawerContext = createContext();

export const DrawerContextProvider = ({ children }) => {
  const thesisItems = [
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
      title: "X",
      content: "Conclusion",
      link: "/chapter/conclusion",
    },
    {
      title: "B",
      content: "Bibliography",
      link: "/chapter/bibliography",
    },
  ];
  const [drawerOpen, setDrawerOpen] = useState({
    toggle: "Full dissertation",
    open: false,
    items: thesisItems,
  });

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
    window.localStorage.setItem("activeDrawer", JSON.stringify(value));
  };

  return (
    <DrawerContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};
