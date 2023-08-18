import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContactComponent from "../ContactComponent/ContactComponent";
import { useTranslation } from "react-i18next";

//Import Section Title
import SectionTitle from "../common/section-title";

const Features = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <React.Fragment>
      <section className="section " id="contact">
        <Container>
          {/* section title */}
          {/* Uncomment the below SectionTitle if needed in the future */}
          {/* <SectionTitle
                        title="GET IN TOUCH"
                        desc="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results."
                    /> */}

          <Row>
            <Col lg={4}>
              <div className="mt-4 pt-4">
                <p>
                  <span className="h5">Address:</span>
                  <br />
                  <span className="text-muted d-block mt-2">
                    Renstiernas gata 46 A
                  </span>
                  <span className="text-muted d-block mt-2">
                    11631 Stockholm
                  </span>
                </p>
                {/* Uncomment the below section if needed in the future */}
                {/* <p className="mt-4">
                                    <span className="h5">Office Address 2:</span>
                                    <br />
                                    <span className="text-muted d-block mt-2">
                                        address <br />
                                        address
                                    </span>
                                </p> */}
                {/* <p className="mt-4">
                  <span className="h5">Working Hours:</span>
                  <br />
                  <span className="text-muted d-block mt-2">
                    8:00AM To 6:00PM
                  </span>
                </p> */}
              </div>
            </Col>

            <ContactComponent />
          </Row>
        </Container>
      </section>
      <div id="page-bottom" />
    </React.Fragment>
  );
};

export default Features;
