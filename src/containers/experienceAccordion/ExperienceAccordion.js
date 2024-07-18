// src/containers/experience/ExperienceAccordion.js
import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div className="section" key={section["title"]}>
              <h2
                className="section-title"
                style={{
                  backgroundColor: `${theme.body}`,
                  border: `1px solid`,
                  borderRadius: `5px`,
                  borderColor: `${theme.headerColor}`,
                  marginBottom: `3px`,
                  fontFamily: "Google Sans Regular",
                  color: `${theme.text}`,
                  padding: '10px'
                }}
              >
                {section["title"]}
              </h2>
              <div
                className="experiences"
                style={{
                  backgroundColor: `${theme.body}`,
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
