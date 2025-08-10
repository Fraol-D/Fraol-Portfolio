import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Fraol.jpg";
// import Tilt from "react-parallax-tilt"; // Temporarily commented out due to jsx-runtime compatibility issues
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Fraol Ashebir Demisse—builder, tinkerer, and full-stack dev in
              training. I picked up programming early on and, somehow, I didn’t
              put it back down.
              <br />
              <br />
              These days, I build clean, responsive web apps with tools like
              React, Tailwind, and Firebase
              <i>
                <b className="purple">
                  —often using Cursor and AI to speed up the dev process (yes,
                  ChatGPT is my co-pilot, and I’m not shy about it).{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest is {}
              <i>
                <b className="purple">
                  Agentic AI, I’ve got a thing for efficiency, clear design,{" "}
                </b>{" "}
                building tech that’s actually <b className="purple">useful.</b>
              </i>
              <br />
              <br />
              Whenever I’m not deep in the code,{" "}
              <b className="purple">I’m sketching new ideas</b> and
              <i>
                <b className="purple"> exploring marketing tactics,</b>
              </i>
              {} or learning how to
              <i>
                <b className="purple">
                  {" "}
                  turn side projects into scalable businesses.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
            <img src={myImg} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Fraol-D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fraol-demisse-218b89239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
