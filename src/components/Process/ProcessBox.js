import React from "react";
import { Col } from "reactstrap";
import { useTranslation } from "react-i18next";

const ProcessBox = ({ processes }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <React.Fragment>
      {processes.map((process, key) =>
        <Col
          key={key}
          lg={4}
          className={key + 1 === processes.length ? "" : "plan-line"}
        >
          <div className="text-center process-box">
            <i className={process.icon + " text-primary"} />
            <h4 className="pt-3">
              {process.title}
            </h4>
            <p className="text-muted">
              {process.desc}
            </p>
          </div>
        </Col>
      )}
    </React.Fragment>
  );
};

export default ProcessBox;
