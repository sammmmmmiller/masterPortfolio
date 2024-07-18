// src/components/projectSlideshow/ProjectSlideshow.js
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectSlideshow.css";

import hastur from "../../assests/images/hastur.png"; 
import bungo from "../../assests/images/bungo.gif"; 
import trivia from "../../assests/images/trivia.gif"; 
import match from "../../assests/images/match.gif"; 
import megaphone from "../../assests/images/megaphone.gif"; 

const images = {
  "megaphone.gif": megaphone,
  "bungo.gif": bungo,
  "trivia.gif": trivia,
  "match.gif": match,
  "hastur.png": hastur,
};

const ProjectSlideshow = ({ projects, theme }) => {
  const getLinks = (project) => {
    switch (project.title) {
      case "Megaphone Meltdown":
      case "Mega Match":
      case "CHEER Trivia":
        return (
          <>
            <a href={project.iosLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
              Download on iOS
            </a>
            {" | "}
            <a href={project.androidLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
              Download on Android
            </a>
            {" | "}
            <a href={project.pcLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
              Download on PC
            </a>
          </>
        );
      case "Bungo Bash":
        return (
          <a href={project.steamLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
            Wishlist on Steam
          </a>
        );
      case "ChromaThoth":
        return (
          <a href={project.itchioLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
            Play Now on Itch.io
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="project-slideshow">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={false}
        dynamicHeight={false}
      >
        {projects.map((project, index) => (
          <div key={index} className="slide">
            <div className="project-content" style={{ color: theme.text }}>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              <div className="project-media">
                <img src={images[project.media]} alt={project.title} />
              </div>
              <div className="project-links">
                {getLinks(project)}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlideshow;
