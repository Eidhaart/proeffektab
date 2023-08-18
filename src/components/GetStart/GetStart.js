import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll"; // Renaming Link to ScrollLink to avoid name conflicts

const GetStart = () => {
  const { t, i18n } = useTranslation("common");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;

    function setActive(i) {
      document.ready.getElementById(i).addClass("active");
    }

    if (scroll > 1) {
      this.document.getElementById("header").style.background = "none";
      this.document.getElementById("header").classList.add("scrolled");
      this.document.getElementById("header").style.backdropFilter = "blur(5px)";
      this.document.getElementById("logo").style.color = "black";
      this.document.getElementById("logo1").style.filter = "invert(1)";
      console.log("x: " + window.innerWidth + "      y: " + window.innerHeight);
    } else {
      this.document.getElementById("header").style.background =
        "rgba(44, 44, 46, 0.9)";
      this.document.getElementById("logo").style.color = "white";
      this.document.getElementById("logo1").style.filter = "invert(0)";
      this.document.getElementById("header").classList.remove("scrolled");
      console.log("x: " + window.innerWidth + "      y: " + window.innerHeight);
    }
  });
  return (
    <section className="section section-lg bg-get-start">
      <div className="bg-overlay" />
      <Container>
        <Row>
          <Col lg={{ size: 8, offset: 2 }} className="text-center">
            <h1 className="get-started-title text-white">
              {t("navbar.getintouch")}
            </h1>
            <div className="section-title-border mt-4 bg-white" />
            <p className="section-subtitle font-secondary text-white text-center pt-4">
              {t("navbar.getintouch1")} {" "}
            </p>
            
          </Col>
        </Row>
      </Container>
      
      
    </section>
  );
};

export default GetStart;
