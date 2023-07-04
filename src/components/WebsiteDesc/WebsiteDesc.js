import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class WebsiteDesc extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-lg bg-web-desc">
          <div className="bg-overlay" />
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 className="text-white">Contact us today</h2>
                <p className="pt-3 home-desc">
                  Are you ready to discuss your construction needs and obtain a
                  free, no-obligation quote? Contact the helpful staff at
                  Proeffekt AB right now. Our professionals are here to help you
                  at any stage of your project, whether it's residential,
                  commercial, or industrial.
                </p>
                
              </Col>
            </Row>
          </Container>
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDesc;
