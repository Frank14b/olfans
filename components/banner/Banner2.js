import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              You create content.
              We get you a higher OnlyFans income.
            </h1>
            <h4 className="subtitle font-light">
              Full-service OnlyFans management agency for creators committed to reaching the top 0% to 5%
            </h4>
            <a
              href="#"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Work with us
            </a>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
