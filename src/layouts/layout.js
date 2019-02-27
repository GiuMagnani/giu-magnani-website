import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../style/reset.css";
import "../style/grid.css";
import "../style/animations.css";
import "../style/styles.css";
import { Theme, GlobalStyle } from "../style/Theme";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../SEO/SEO";
import posed, { PoseGroup } from "react-pose";

const transitionDuration = 150;
const transitionDelay = 200;

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: transitionDuration,
    },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: { opacity: 0, transition: { duration: transitionDuration } },
});

class Layout extends Component {
  getLocalTitle() {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "about") {
      title = "About";
    } else if (currentPath === "projects") {
      title = "Projects";
    } else if (currentPath === "contact") {
      title = "Contact";
    } else if (currentPath === "journal") {
      title = "Journal";
    }
    return title;
  }

  render() {
    return (
      <div>
        <SEO />
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
        </Helmet>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <Header />
            <PoseGroup>
              <Transition key={this.props.location.pathname}>
                <Main>{this.props.children}</Main>
              </Transition>
            </PoseGroup>
            <Footer config={config} />
          </>
        </ThemeProvider>
      </div>
    );
  }
}

const Main = styled.main`
  min-height: calc(100vh - 98px);
`;

export default Layout;
