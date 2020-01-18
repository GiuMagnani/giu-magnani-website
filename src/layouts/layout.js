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
import { FormattedMessage, injectIntl } from "react-intl";

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

const Layout = ({ location, children, locale, pageContext }) => {
  const isLanding = pageContext.isLanding;
  const shouldAnimate = !(location.state && location.state.stopTransition);
  // const shouldAnimate = false;

  const getLocalTitle = () => {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = location.pathname
      .replace(pathPrefix, "")
      .replace(`${locale}/`, "")
      .replace("/", "");

    if (currentPath === "") {
      return "title.home";
    } else if (currentPath === "about") {
      return "title.about";
    } else if (currentPath === "work") {
      return "title.work";
    } else if (currentPath === "contact") {
      return "title.contact";
    } else if (currentPath === "journal") {
      return "title.journal";
    } else {
      return "title.home";
    }
  };

  return (
    <>
      <SEO locale={locale} />
      <FormattedMessage id={getLocalTitle()}>
        {title => <Helmet><title>{`${config.siteTitle} | ${title}`}</title></Helmet>}
      </FormattedMessage>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          <Header location={location} isLanding={isLanding} />
          {/*<PoseGroup>*/}
            {/*<Transition key={location.pathname} shouldAnimate={shouldAnimate}>*/}
              <Main>{children}</Main>
            {/*</Transition>*/}
          {/*</PoseGroup>*/}
          <Footer config={config} />
        </>
      </ThemeProvider>
    </>
  );
};

const Main = styled.main`
  min-height: calc(100vh - 98px);
`;

export default injectIntl(Layout);
