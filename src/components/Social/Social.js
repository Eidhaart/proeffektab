import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Social extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="contact-social bg-dark">
          <Container>
            <Row className="align-items-center">
              <Col lg={4}>
                <ul className="list-inline social mt-4">
                  <li className="list-inline-item">
                    <Link
                      to="https://www.facebook.com/profile.php?id=61550101808491"
                      className="social-icon"
                    >
                      <i className="mdi mdi-facebook" />
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg={4} className="mt-4">
                <p className="contact-title">
                  <i className="pe-7s-call" /> &nbsp;+46 70-557 76 20
                </p>
              </Col>
              <Col lg={4} className="mt-4 text-end">
                <p className="contact-title">
                  <i className="pe-7s-mail-open" />&nbsp; info@proeffekt.se
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Social;
