import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

const Process = () => {
  const { t, i18n } = useTranslation("common");
  const [processes, setProcesses] = useState([]);

  useEffect(
    () => {
      setProcesses([
        {
          icon: "pe-7s-pen",
          title: t("navbar.contactprocess"),
          desc: t("navbar.contactprocess1")
        },
        {
          icon: "pe-7s-id",
          title: t("navbar.quoteprocess"),
          desc: t("navbar.quoteprocess1")
        },
        {
          icon: "pe-7s-target",
          title: t("navbar.toworkprocess"),
          desc: t("navbar.toworkprocess1")
        }
      ]);
    },
    [t]
  );

  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <SectionTitle title={t("navbar.process")} desc="" />
          <Row>
            <Col lg={6} className="text-center process-left-icon-1">
              <i className="pe-7s-angle-right" />
            </Col>
            <Col lg={6} className="text-center process-left-icon-2">
              <i className="pe-7s-angle-right" />
            </Col>
          </Row>
          <Row className="mt-5">
            <ProcessBox processes={processes} />
            <div className="text-center mx-auto">
              {/* Link component */}
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
