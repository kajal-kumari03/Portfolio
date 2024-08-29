import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";

import chatify from "../../Assets/Projects/petpal.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import brightfuture from "../../Assets/Projects/brightfuture.png";
import Travel from '../../Assets/Projects/Travel.png'


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
              imgPath={chatify}
              isBlog={false}
              title="PetPals"
              description="This website is designed to facilitate the adoption of pets, such as dogs and cats, from shelters or rescue organizations. The platform serves as a digital marketplace where potential adopters can browse and select pets, shelters can list available pets, and donors can contribute to support animal welfare."
              ghLink="https://github.com/kajal-kumari03/Petpals"
              demoLink="https://pet-petpals.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Beyond Boundries"
              description="We specialize in connecting skilled professionals with exciting job opportunities from around the globe. Say goodbye to limitations and let us help you find your next career adventure. Explore beyond boundaries with us today!"
              ghLink="https://github.com/adithyasudev/Gomti-Script-021"
              demoLink="https://6645cad5f9b1737972e5748c--glistening-pithivier-5a324a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brightfuture}
              isBlog={false}
              title="BrightFuture"
              description="The Masai School Crowdfunding Platform is a student-driven initiative aimed at addressing the financial challenges faced by many students at Masai School in Bangalore. By leveraging their coding skills, a dedicated group of students has developed this platform to facilitate fundraising for educational purposes, thereby promoting financial equity and supporting their peers in achieving their academic goals."
              ghLink="https://github.com/Sgrprsd11704088/Brawlers_017"
              demoLink="https://brawlers-017.vercel.app/"              
            />
          </Col>

          { <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travel}
              isBlog={false}
              title="Plant AI"
              description="Travel With Us is an online travel agency and accommodation booking platform that facilitates users in finding and booking accommodations worldwide. As a comprehensive travel solution, Travel With Us offers a vast array of options including hotels, apartments, villas, hostels, and resorts."
              ghLink="https://github.com/kajal-kumari03/Js-204"
              demoLink="https://iridescent-zabaione-98adaa.netlify.app/"
            />
          </Col> }
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
