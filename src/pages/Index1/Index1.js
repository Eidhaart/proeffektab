import React, { useState } from "react";
import { Link } from "react-scroll";

import Navbar from "../../components/Navbar/Navbar";
import Section from "./section";
import Service from "../../components/Service/service";
import WebsiteDesc from "../../components/WebsiteDesc/WebsiteDesc";
import Team from "../../components/Team/Team";
import Process from "../../components/Process/Process";
import Testimonials from "../../components/Testimonials/Testimonials";
import GetStart from "../../components/GetStart/GetStart";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";
import NavButtons from "../../components/Navbar/NavButtons";
import AboutUs from "../../components/AboutUs/AboutUs";
import { useTranslation } from "react-i18next";

const Index1 = () => {
  const [navItems] = useState([
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "services", navheading: "Services" },
    { id: 3, idnm: "team", navheading: "Team" },
    { id: 4, idnm: "contact", navheading: "Contact" }
  ]);

  const [navClass] = useState("");

  const setTheme = color => {
    document.getElementById("colorTheme").href =
      "assets/css/colors/" + color + ".css";
  };

  const { t, i18n } = useTranslation("common");

  return (
    <React.Fragment>
      {/* Importing Navbar */}
      <Navbar />

      {/* section */}
      <Section onload={() => setTheme("orange")} />
      {/* services */}
      <Service sectionClass="pt-5" />
      {/* website description */}
      <WebsiteDesc />
      {/* process */}
      <Process />
      {/* testimonial */}
      {/* <Testimonials /> */}
      {/* get started */}
      <GetStart />
      {/* contact */}
      <Contact />
      {/* social */}
      <Social />
      {/* footer */}
      <Footer />
      <NavButtons />
      <div className="lang-button-container">
        <button
          className="lang-button"
          onClick={() => i18n.changeLanguage("se")}
        >
          <img src={require("./swedish.png")} />
        </button>
        <button
          className="lang-button"
          onClick={() => i18n.changeLanguage("en")}
        >
          <img src={require("./english.png")} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Index1;
