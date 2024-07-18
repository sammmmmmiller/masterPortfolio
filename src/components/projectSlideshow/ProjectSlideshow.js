// src/components/projectSlideshow/ProjectSlideshow.js
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectSlideshow.css";

const ProjectSlideshow = ({ projects, theme }) => {
  return (
    <div className="project-slideshow">
      <Carousel 
        showArrows={true} 
        showThumbs={false} 
        infiniteLoop={true} 
        showIndicators={true} 
        showStatus={false} 
        autoPlay={false}
        dynamicHeight={true}
      >
        {projects.map((project, index) => (
          <div key={index} className="slide">
            <div className="project-content" style={{ color: theme.text }}>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              <div className="project-media">
                {project.mediaType === "image" ? (
                  <img src={project.media} alt={project.title} />
                ) : (
                  <video src={project.media} controls />
                )}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.primary }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectSlideshow;
