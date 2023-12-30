import React, { useEffect, useState } from "react";
import { ParticlesWord } from "../../components/ParticlesWord/ParticlesWord";
import uantwerpLogo from "../../assets/images/uantwerp.png";
import rcaLogo from "../../assets/images/rca.png";
import upLogo from "../../assets/images/up.png";
import docartesLogo from "../../assets/images/docartes.png";
import orpheusLogo from "../../assets/images/orpheus.png";
import ariaLogo from "../../assets/images/aria.png";
import homeLogo from "../../assets/images/home.png";
import { Navbar } from "../../components/Navbar/Navbar";
import { Drawer } from "../../components/Drawer/Drawer";
import { useDrawerContext } from "../../context/Context";
import "./styles.css";

export const Home = () => {
  const { drawerOpen, toggleDrawer } = useDrawerContext();
  const [smallScreen, setSmallScreen] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullThesisOpen, setFullThesisOpen] = useState(false);
  const [companionOpen, setCompanionOpen] = useState(false);
  const screenHeight = window.innerHeight;
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

  const companionItems = [
    {
      title: "",
      content: null,
      icon: homeLogo,
      link: "/",
    },
    {
      title: "A",
      content: "Preface",
      link: "/chapter/preface",
    },
    {
      title: "VIII",
      content: "The Performative Deep Structural Analysis",
      link: "/chapter/8",
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
  ];

  useEffect(() => {
    window.innerWidth < 1000 ? setSmallScreen(true) : setSmallScreen(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (drawerOpen.toggle === "Full dissertation") {
      setFullThesisOpen(drawerOpen.open);
    } else {
      setCompanionOpen(drawerOpen.open);
    }
  }, [drawerOpen]);

  return !smallScreen && !loading ? (
    <div className="home-wrapper">
      <div className="background-overlay" />

      <div className="home-container">
        <section className="main">
          <div className="particles-section">
            <ParticlesWord word="Informed" />
          </div>
          <div
            className="subtitle"
            style={{ transform: `translateY(${-1 * (screenHeight - 430)}px)` }}
          >
            <h3>PhD thesis submitted for the degree of Doctor of Arts </h3>
            <h3>at the University of Antwerp to be defended by Nadav Katan</h3>
          </div>
          <div className="logos-wrapper">
            <img src={uantwerpLogo} alt="uantwerp-logo" className="logo" />
            <img src={ariaLogo} alt="aria-logo" className="logo" />
            <img src={rcaLogo} alt="rca-logo" className="logo" />
            <img src={upLogo} alt="up-logo" className="logo" />
            <img src={orpheusLogo} alt="orpheus-logo" className="logo" />
            <img src={docartesLogo} alt="docartes-logo" className="logo" />
          </div>
        </section>
        {/* <section className="sidebar" style={{ top: screenHeight / 10 }}>
        <Navbar />
      </section> */}
      </div>
      <div
        style={{
          opacity: fullThesisOpen ? 0 : 1,
          transition: "all 0.5s",
        }}
      >
        <Drawer
          isOpen={companionOpen}
          title="Performer's companion"
          drawerItems={companionItems}
        />
      </div>
      <div
        style={{
          opacity: companionOpen ? 0 : 1,
          transition: "all 0.5s ",
        }}
      >
        <Drawer
          isOpen={fullThesisOpen}
          title="Full dissertation"
          drawerItems={thesisItems}
        />
      </div>
    </div>
  ) : smallScreen & !loading ? (
    <div className="device-message-container">
      <h3>
        The screen size is too small to display the dissertation. Please use a
        larger screen.
      </h3>
    </div>
  ) : null;
};
