import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import { Link, Element } from "react-scroll";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import Header from "../components/header/Header.js"
export default class Main extends Component {
  render() {
    return (
      <div>

        <Header theme={this.props.theme} />
        <Element name="home">
          <Home theme={this.props.theme} />
        </Element>
        <Element name="experience">
          <Experience theme={this.props.theme} />
        </Element>
        <Element name="education">
          <Education theme={this.props.theme} />
        </Element>

        <Element name="projects">
          <Projects theme={this.props.theme} />
        </Element>
        <Element name="contact">
          <Contact theme={this.props.theme} />
        </Element>
      </div>
    );
  }
}