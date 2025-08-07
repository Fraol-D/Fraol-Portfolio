import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazonClone from "../../Assets/Projects/Amazon-Clone.png";
import netflixClone from "../../Assets/Projects/Netflix-Clone.png";
import rentMaster from "../../Assets/Projects/RentMaster.png";

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
              imgPath={rentMaster}
              isBlog={false}
              title="RentMaster"
              description="Property rental management system with landlord and tenant dashboards, lease tracking, payment processing, and maintenance request handling. Features real-time notifications and comprehensive reporting."
              ghLink="https://github.com/Fraol-D/RentalSite"
              demoLink="https://rentmaster.markethubet.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="Full-stack e-commerce platform replicating Amazon's core functionality with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies and responsive design."
              ghLink="https://github.com/Fraol-D/Amazon-Clone"
              demoLink="https://clonezon.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixClone}
              isBlog={false}
              title="Netflix Clone"
              description="Movie streaming platform clone featuring user authentication, movie browsing, search functionality, and responsive video player. Integrated with TMDB API for real-time movie data and trailers."
              ghLink="https://github.com/Fraol-D/Netflix-Clone"
              demoLink="https://fraol-d.github.io/Netflix-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
