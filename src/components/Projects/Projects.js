import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazonClone from "../../Assets/Projects/Amazon-Clone.webp";
import netflixClone from "../../Assets/Projects/Netflix-Clone.webp";
import rentMaster from "../../Assets/Projects/RentMaster.webp";

function Projects() {
  const [filter, setFilter] = useState("All");
  const projects = useMemo(
    () => [
      {
        key: "rentmaster",
        imgPath: rentMaster,
        title: "RentMaster",
        description:
          "Property rental management system with landlord and tenant dashboards, lease tracking, payment processing, and maintenance request handling. Features real-time notifications and comprehensive reporting.",
        ghLink: "https://github.com/Fraol-D/RentalSite",
        demoLink: "https://rentmaster.markethubet.com/",
        tags: ["Full-stack"],
      },
      {
        key: "amazon",
        imgPath: amazonClone,
        title: "Amazon Clone",
        description:
          "Full-stack e-commerce platform replicating Amazon's core functionality with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies and responsive design.",
        ghLink: "https://github.com/Fraol-D/Amazon-Clone",
        demoLink: "https://clonezon.netlify.app/",
        tags: ["Frontend", "Full-stack"],
      },
      {
        key: "netflix",
        imgPath: netflixClone,
        title: "Netflix Clone",
        description:
          "Movie streaming platform clone featuring user authentication, movie browsing, search functionality, and responsive video player. Integrated with TMDB API for real-time movie data and trailers.",
        ghLink: "https://github.com/Fraol-D/Netflix-Clone",
        demoLink: "https://fraol-d.github.io/Netflix-Clone",
        tags: ["Frontend"],
      },
    ],
    []
  );

  const filters = ["All", "Frontend", "Backend", "Full-stack"];
  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter, projects]);
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
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="btn btn-primary"
              style={{
                marginRight: 8,
                opacity: filter === f ? 1 : 0.7,
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {visible.map((p) => (
            <Col key={p.key} md={4} className="project-card">
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={false}
                title={p.title}
                description={p.description}
                ghLink={p.ghLink}
                demoLink={p.demoLink}
              />
              <div style={{ marginTop: 10 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      display: "inline-block",
                      border: "1px solid #fff",
                      color: "#fff",
                      padding: "2px 8px",
                      borderRadius: 12,
                      fontSize: 12,
                      marginRight: 6,
                      opacity: 0.85,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
