import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../style/reset.css";
import "../style/grid.css";
import "../style/animations.css";
import "../style/styles.css";
import { Theme, GlobalStyle } from "../style/Theme";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../SEO/SEO";
// import { setConfig } from "react-hot-loader";

// setConfig({ pureSFC: true });

class Layout extends Component {
  // componentDidMount() {
  //   console.log("Developed by Giu Magnani.");
  //   console.log("Milan, Italy. 2019.");
  //   console.log("https://www.giumagnani.com");
  // }

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
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer config={config} />
      </div>
    );
  }
}

export default Layout;
