import React, { useEffect, useState } from "react";
import { ParticlesWord } from "../../components/ParticlesWord/ParticlesWord";
import uantwerpLogo from "../../assets/images/uantwerp.png";
import rcaLogo from "../../assets/images/rca.png";
import upLogo from "../../assets/images/up.png";
import docartesLogo from "../../assets/images/docartes.png";
import orpheusLogo from "../../assets/images/orpheus.png";
import ariaLogo from "../../assets/images/aria.png";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Drawer } from "../../components/Drawer/Drawer";
import { useDrawerContext } from "../../context/Context";

export const Home = () => {
  const { drawerOpen, toggleDrawer } = useDrawerContext();
  const [smallScreen, setSmallScreen] = useState(null);
  const [loading, setLoading] = useState(true);
  const screenHeight = window.innerHeight;

  useEffect(() => {
    window.innerWidth < 1000 ? setSmallScreen(true) : setSmallScreen(false);

    setLoading(false);
    // Open the drawer on mount
    setTimeout(() => {
      toggleDrawer(true);
    }, 3000);
  }, []);

  return !smallScreen && !loading ? (
    <div className="home-wrapper">
      <div className="background-overlay" />

      <div className="home-container">
        <section className="main">
          <div className="particles-section">
            <ParticlesWord word="Informed" />
          </div>
          <div className="subtitle">
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
      <Drawer isOpen={drawerOpen} />
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
