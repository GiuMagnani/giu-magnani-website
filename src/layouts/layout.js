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
    transition: ({ shouldAnimate }) => {
      return { duration: shouldAnimate ? transitionDuration : 0 };
    },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: {
    opacity: ({ shouldAnimate }) => (shouldAnimate ? 0 : 1),
    transition: ({ shouldAnimate }) => {
      return { duration: shouldAnimate ? transitionDuration : 0 };
    },
  },
});

const Layout = ({ location, children }) => {
  const shouldAnimate = !(location.state && location.state.stopTransition);

  const getLocalTitle = () => {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "about") {
      title = "About";
    } else if (currentPath === "work") {
      title = "Work";
    } else if (currentPath === "contact") {
      title = "Contact";
    } else if (currentPath === "journal") {
      title = "Journal";
    }
    return title;
  };

  return (
    <>
      <SEO />
      <Helmet>
        <title>{`${config.siteTitle} |  ${getLocalTitle()}`}</title>
      </Helmet>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          <Header />
          <PoseGroup>
            <Transition key={location.pathname} shouldAnimate={shouldAnimate}>
              <Main>{children}</Main>
            </Transition>
          </PoseGroup>
          <Footer config={config} />
        </>
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  min-height: calc(100vh - 98px);
`;

export default Layout;
