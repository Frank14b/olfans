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
                With multi platform social media marketing we help our clients to reach maximum viewers but with a style and sense.  The 'you' as a brand, the  delcious version of yourself which you want to project to  your audience, we are here to help you and celebrate in your journey to glory.
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
                Our expert panel create tailor made plans according to your current level. Beginner to celebrity, everyone can choose there path and earn the success you always deserve.
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
              <Image src={herobanner} alt="herobanner" className="imageBannerFilter"></Image>
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
                starting from creating a linktree to photoshoot, videos and posting shorts reels evrything can be done by us. Its all up to your imagination and the willingness to go beyound your own limits. 
                <br/><br/>
                Pushing the frontier and breaking  all shackles that pulling you down.
                Our philosophy is connecting the audience with a sense of luxury and style to the exotic and intelligent beauties of the entertainment industry in a proffesional and stream lined method of operation.
                <br/><br/>
                Technical excellence is one core aspect of our operational policy. with maximum security on data and asset, IT infrastrecture is build strong to take care of your explicit data and prevent data breaching.
                We are also building a blockchain based web3 application, where your data is owned by you and only you can decide to share the data to whom and till what time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
