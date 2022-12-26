/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/hero-banner.jpg";
const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Custom Information</h1>
              <h6 className="subtitle">
                Here you can check what we created. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider10" id="clientResults">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                CLIENT RESULTS
              </span>
              <h1 className="title">Best in class OnlyFans marketing</h1>
              <h6 className="subtitle op-8">
                Pellentesque vehicula eros a dui pretium ornare. Phasellus
                congue vel quam nec luctus.In accumsan at eros in dignissim.
                Cras sodales nisi nonn accumsan.
              </h6>
              <a
                className="btn btn-light btn-rounded btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Do you Need Help?</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider3" id="whatWeDo">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center text-center">
              <h1 className="title">
                What we do for you
              </h1>
              <h6 className="subtitle op-8">
                We work on a performance basis, meaning that we only charge you if we make you money.

                We don't charge any setup fees, retainer fees, or any other hidden fees.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
