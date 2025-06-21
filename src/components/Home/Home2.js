import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
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
              I'm a <b className="purple">Backend Developer</b> passionate about building scalable systems and intelligent solutions.
              <br />
              <br />I specialize in 
              <i>
                <b className="purple"> Node.js, REST APIs, and cloud-based applications</b>
              </i>, and I work extensively with:
              <br />
              <br />
              <b className="purple">MongoDB, MySQL, Prisma ORM, Redis, Elasticsearch, and Docker</b>.
              <br />
              <br />
              I love working on
              <i>
                <b className="purple"> GenAI products</b>
              </i>, automations, and
              <i>
                <b className="purple"> real-time backend systems</b> using modern tech like
              </i>{" "}
              <b className="purple">LangChain, OpenAI, and Puppeteer</b>.
              <br />
              <br />
              I also integrate with services like
              <i>
                <b className="purple"> Gmail API, Outlook API, and Firebase</b>
              </i>{" "}
              and have experience in
              <b className="purple"> CI/CD (GitLab), Nginx, and microservices</b>.
              <br />
              <br />
              Currently exploring <b className="purple">Kubernetes</b> and <b className="purple">Jenkins</b> to level up my DevOps skills.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  href="https://github.com/Ashishkumar667"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ashishmishra_3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashish-mishra-303312305/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devbyashish"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
