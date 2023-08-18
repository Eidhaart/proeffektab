import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
const Result = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <p>
      {t("navbar.sendsuccess")}
    </p>
  );
};

export const ContactComponent = () => {
  const { t, i18n } = useTranslation("common");
  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmpa2w8",
        "template_1p2jnte",
        form.current,
        "bJSWFmn0jK5aVMiTh"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showResult(true);
  };

  return (
    <Col>
      <br />
      {t("navbar.contactform")}
      <br />
      <bt />
      <div className="form">
        <form ref={form} action="" onSubmit={sendEmail} name="myForm">
          <div>
            <Row>
              <Col sm={6} lg={6}>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="fullName"
                      required
                      placeholder={t("navbar.contactformname") + "*"}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="phone"
                      required
                      placeholder={t("navbar.contactformphone") + "*"}
                    />
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={6}>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="email"
                      required
                      placeholder="Email*"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <input
                      class="form-control"
                      type="text"
                      name="subject"
                      required
                      placeholder={t("navbar.contactformsaubject") + "*"}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="submit-form">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group mt-2">
                  <textarea
                    class="form-control"
                    name="comments"
                    id="comments"
                    rows="4"
                    required
                    placeholder={t("navbar.contactformmessage")}
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 text-end">
                <input
                  type="submit"
                  id="submit"
                  name="send"
                  class="submitBnt btn btn-primary"
                  value={t("navbar.contactformsned")}
                />
              </div>
            </div>
            {/* <input type="submit" value="Send" className="button" /> */}
            {/* <button>SUBMIT</button> */}

            <div className="row">
              {result ? <Result /> : null}
            </div>
          </div>
        </form>
      </div>
    </Col>
  );
};

export default ContactComponent;
