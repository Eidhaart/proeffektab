import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";
import { useTranslation } from "react-i18next";

const Process = props => {
  const { t, i18n } = useTranslation("common");
  const [services1] = React.useState([
    {
      icon: "pe-7s-piggy",
      title: t("navbar.painting"),
      desc: t("navbar.painting1"),
      iconPath: "s2"
    },
    {
      icon: "pe-7s-piggy",
      title: t("navbar.woodwork"),
      desc: t("navbar.woodwork1"),
      iconPath: "s1"
    },
    {
      icon: "pe-7s-piggy",
      title: t("navbar.kitchen"),
      desc: t("navbar.kitchen1"),
      iconPath: "s3"
    }
  ]);

  const [services2] = React.useState([
    {
      icon: "pe-7s-science",
      title: t("navbar.bathroom"),
      desc: t("navbar.bathroom1"),
      iconPath: "s4"
    },
    {
      icon: "pe-7s-home",
      title: t("navbar.facade"),
      desc: t("navbar.facade1"),
      iconPath: "s5"
    },
    {
      icon: "pe-7s-plane",
      title: t("navbar.garden"),
      desc: t("navbar.garden1"),
      iconPath: "s6"
    }
  ]);

  return (
    <React.Fragment>
      <section className={"section " + props.sectionClass} id="services">
        <Container>
          {/* section title */}
          <SectionTitle
            title={t("navbar.services1")}
            desc={t("navbar.services2")}
          />

          <Row className="mt-4">
            {/* services box */}
            <ServiceBox services={services1} />
          </Row>

          <Row className="mt-4">
            {/* service box */}
            <ServiceBox services={services2} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
