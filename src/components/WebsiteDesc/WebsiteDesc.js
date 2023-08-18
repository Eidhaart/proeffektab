import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll"; // Renaming Link to ScrollLink to avoid name conflicts

const WebsiteDesc = () => {
  const { t } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="section section-lg bg-web-desc">
        <div className="bg-overlay" />
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              {/* <h2 className="text-white">
                {t("navbar.contactustoday")}
              </h2> */}
              <p className="pt-3 home-desc">
                {t("navbar.contactustoday1")}
              </p>
              <ScrollLink
                to="page-bottom"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="btn btn-white waves-effect mt-3 mb-4"
              >
                {t("navbar.contact")} <i className="mdi mdi-arrow-right" />
              </ScrollLink>
            </Col>
          </Row>
        </Container>
      </section>
      
    </React.Fragment>
  );
};

export default WebsiteDesc;
