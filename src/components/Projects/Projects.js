import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import GetStocks from "../../Assets/Projects/GetStocks.png";
import Holistay from "../../Assets/Projects/holistay.png";
import Portfolio_Ashish from "../../Assets/Projects/Portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GetStocks}
              isBlog={false}
              title="GetStocks"
              description="GetStocks is a web application that provides real-time stock market data and analysis. It allows users to search for stocks, view their current prices, historical data, and performance metrics. The app also offers features like watchlists, stock comparisons, and news updates to help users make informed investment decisions."
              //ghLink="https://github.com/soumyajit4419/GetStocks"
              demoLink="https://getstocks.ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio_Ashish}
              isBlog={false}
              title="My dynamic Portfolio "
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Ashishkumar667/portfolio"
              demoLink="https://portfolio-ashish.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Holistay}
              isBlog={false}
              title="Holistay- A hotel booking web"
              description="Using Typescript, I have made this web app.ON which we we can book our hotel for future holiday planning.It has payment system as well"
              ghLink="https://github.com/Ashishkumar667/fe-hotel_booking"
              demoLink="https://fe-hotel-booking.vercel.app/" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
