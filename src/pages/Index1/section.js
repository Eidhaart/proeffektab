import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

// Importing Modal (if you need it in the future)

const Section = () => {
  const { t } = useTranslation("common");

  // For modal functionalities, you can use the useState hook, as demonstrated below:
  // const [isOpen, setIsOpen] = useState(false);
  // const callModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  return (
    <React.Fragment>
      <section
        className="section bg-home home-half"
        data-image-src="images/bg-home.jpg"
        id="home-scroll"
      >
        <div className="bg-overlay" />
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8} className="text-white text-center">
                  <h1 className="home-title">
                    {t("navbar.slogan")}
                  </h1>
                  <p className="pt-4 mt-4 home-desc">
                  {t("navbar.slogan2")}
                  </p>
                  {/* For modal call, uncomment the below lines:
                  <p className="play-shadow mt-4">
                    <Link
                      to="#"
                      onClick={callModal}
                      className="play-btn video-play-icon"
                    >
                      <i className="mdi mdi-play text-center"></i>
                    </Link>
                  </p>
                  */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Render ModalSection Component for Modal if needed */}
      </section>
    </React.Fragment>
  );
};

export default Section;
