import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fraol Demisse </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently exploring freelancing opportunities on Upwork and
            learning agentic AI development.
            <br />
            I am pursuing a Bachelor of Science in Computer Science at Unity
            University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 📖 Studying the Bible
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎬 Watching Science Channels
            </li>
            <li className="about-activity">
              <ImPointRight /> 🏋️‍♂️ Weight Training
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "He is before all things, and in Him all things hold together."{" "}
          </p>
          <footer className="blockquote-footer">Colossians 1:17</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
