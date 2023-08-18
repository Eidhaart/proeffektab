import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services1: [
        {
          icon: "pe-7s-piggy",
          title: "Painting / Spackling",
          desc: "Outside and inside",
          iconPath: "s2"
        },
        {
          icon: "pe-7s-piggy",
          title: "Woodwork",
          desc: "From simple woodwork to more complex, like building Terraces",
          iconPath: "s1"
        },
        {
          icon: "pe-7s-piggy",
          title: "Kitchen",
          desc: "Cabinetry and Countertops, Installation of appliances ",
          iconPath: "s3"
        }
      ],
      services2: [
        {
          icon: "pe-7s-science",
          title: "Bathroom",
          desc:
            "Wall and Ceiling Work, Tiling and flooring. Fixture installation ",
          iconPath: "s4"
        },
        {
          icon: "pe-7s-home",
          title: "Facade",
          desc: "Renovation, Replacement of rotten/destroyed planks. "
        },
        {
          icon: "pe-7s-plane",
          title: "Garden work",
          desc: "Site Preparation, Hardscaping."
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            <SectionTitle title="Our services" desc="For your needs" />

            <Row className="mt-4">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>

            <Row className="mt-4">
              {/* service box */}
              <ServiceBox services={this.state.services2} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
