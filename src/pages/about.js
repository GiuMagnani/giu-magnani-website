import React from "react";
import Layout from "../layouts/layout";

class About extends React.Component {
  render() {
    return (
      <Layout location={ this.props.location }>
        <div>
          <h1>Hi! I'm Giu Magnani.</h1>
          <p>
            Front-End Developer and UI/UX Designer based in Milan, Italy. I'm a
            creative and passionate professional who loves Web as much as Design.
            <br />
            <br />
            I started working with small business and participating in design
            contests to build a strong portfolio and references. With perseverance
            and hard work, in 2012 I was contacted to work remotely with a company
            in USA which produces logo and print design services. In 2013, I went
            to London, UK to find new perspectives and inspiration, where I had
            the pleasure to work with a vintage lighting signs company and a
            Swedish design studio. In January 2014, with more than 3 years of
            experience, I launched my new design brand, to fully pursue what I
            love, Web Development, Design and Illustration.
            <br />
            <br />
            Right now I'm living in Milan, Italy, working as a Front-End
            Developer, I keep learning and facing new challenges to improve every
            day more and more. </p>
          <hr />
          <em>
            This site was built with React, Gatsby and Styled Components. <br />
            The font used is ... etc...
          </em>
        </div>
      </Layout>
    );
  }
}

export default About;
