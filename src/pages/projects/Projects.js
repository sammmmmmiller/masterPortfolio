// src/pages/projects/Projects.js
import React, { Component } from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import ProjectSlideshow from "../../components/projectSlideshow/ProjectSlideshow.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const selectedProjects = ProjectsData.data;

    return (
      <div className="projects-main">
        <div className="basic-projects">
        
            <div className="projects-heading-div">
             
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          
        </div>

        <div >
          <ProjectSlideshow projects={selectedProjects} theme={theme} />
        </div>

        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {publications.data.length > 0 && (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1 className="publications-heading-text" style={{ color: theme.text }}>
                    {publicationsHeader.title}
                  </h1>
                  <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                    {publicationsHeader.description}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        )}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => (
            <PublicationCard pub={pub} theme={theme} key={pub.id} />
          ))}
        </div>

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
