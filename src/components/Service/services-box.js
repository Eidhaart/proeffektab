import React, { Component } from "react";
import { Col } from "reactstrap";
import "./style.css";
import service1 from "./service-1.png";
import service2 from "./service-2.png";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) =>
          <Col lg={4} key={key} className="mt-3">
            <div className={service.iconPath}>
              <div className="services-box text-center hover-effect">
                <img />
                {/* <i className={service.icon} /> */}

                <h4 className="pt-3">
                  {service.title}
                </h4>
                <p className="pt-3 text-muted">
                  {service.desc}
                </p>
              </div>
            </div>
          </Col>
        )}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
