import React from "react";
import { ParticalesCanvas } from "../../components/Particles/ParticlesCanvas";
import { ParticlesWord } from "../../components/ParticlesWord/ParticlesWord";
import piano from "../../assets/images/piano.jpeg";
import uantwerpLogo from "../../assets/images/uantwerp.png";
import rcaLogo from "../../assets/images/rca.png";
import upLogo from "../../assets/images/up.png";
import docartesLogo from "../../assets/images/docartes.png";
import orpheusLogo from "../../assets/images/orpheus.png";
import ariaLogo from "../../assets/images/aria.png";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
export const Home = () => {
  return (
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
          <img src={rcaLogo} alt="rca-logo" className="logo" />
          <img src={upLogo} alt="up-logo" className="logo" />
          <img src={uantwerpLogo} alt="uantwerp-logo" className="logo" />
          <img src={ariaLogo} alt="aria-logo" className="logo" />
          <img src={orpheusLogo} alt="orpheus-logo" className="logo" />
          <img src={docartesLogo} alt="docartes-logo" className="logo" />
        </div>
      </section>
      <section className="sidebar">
        <Navbar />
      </section>
    </div>
  );
};
