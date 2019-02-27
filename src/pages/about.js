import React from "react";
import Layout from "../layouts/layout";
import styled from "styled-components";

class About extends React.Component {
  render() {
    return (
      <>
        <Intro>
          <div className="container">
            <h1>Hi! I'm Giu Magnani.</h1>
            <p>
              Front-End Developer and UI/UX Designer based in Milan, Italy. I'm
              a creative and passionate professional who loves Web as much as
              Design.
            </p>
          </div>
        </Intro>
        <AboutWrapper>
          <div className="container">
            <AboutInner>
              <MainText>
                <p>
                  I started working with small business and participating in
                  design contests to build a strong portfolio and references. With
                </p>
                <Highlight>Santiago, Chile</Highlight>
                <p>
                  perseverance and hard work, in 2012 I was contacted to work
                  remotely with a company in USA which produces logo and print
                  design services. In 2013, I went
                </p>
                <Highlight>London, UK</Highlight>
                <p>
                  to London, UK to find new perspectives and inspiration, where I
                  had the pleasure to work with a vintage lighting signs company
                  and a Swedish design studio. In January 2014, with more than 3
                  years of experience, I launched my new design brand, to fully
                  pursue what I love, Web Development, Design and Illustration.
                </p>
                <Highlight>Milan, Italy</Highlight>
                <p>
                  Right now I'm living in Milan, Italy. I'm working as a Front-End
                  Developer, I keep learning and facing new challenges to improve
                  every day more and more.
                </p>
              </MainText>
              <MainImage>a</MainImage>
            </AboutInner>
            <Colophon>
              <div>
                This site was built with <a>React</a>, <a>GatsbyJS</a> and{" "}
                <a>Styled Components</a>. The font used is <a>Chakra Petch</a> from
                Google Fonts, designed by <a href="http://font.cadsondemak.com/foundry/">Cadson Demak</a>.
              </div>
            </Colophon>
          </div>
        </AboutWrapper>
      </>
    );
  }
}

const Intro = styled.div`
  h1 {
    font-size: 30px;
    padding-bottom: 1rem;
  }

  p {
    font-size: 55px;
    line-height: 1.2;
    font-weight: bold;
  }
  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    min-height: 50vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AboutWrapper = styled.div`
  .container {
    border: 1px solid ${props => props.theme.main};
    border-bottom: 0;
    border-top: 0;
    padding: 0 1rem 1rem;
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 18px;
  }
`;

const Highlight = styled.strong`
  font-size: 30px;
  font-weight: bold;
  display: block;
  margin: 1.5rem 0;
`;

const Colophon = styled.div`
  border: 1px solid ${props => props.theme.main};
  text-align: left;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.4;

  a {
    text-decoration: underline;
  }

  > div {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    border-bottom: 0;
    padding: 1rem;
    max-width: 400px;
    margin: 0 auto;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: -5px;
      width: 4px;
      height: 1rem;
      background-color: ${props => props.theme.main};
    }
  }
`;

const MainImage = styled.div`
  width: 50%;
  background: ${props => props.theme.main};
  padding: 1rem;
  flex: 1;
  margin: 1rem 0 1rem 1rem;
`;

const MainText = styled.div`
  border: 1px solid ${props => props.theme.main};
  margin: 1rem 0;
  padding: 2rem 1rem;
  width: 50%;
  flex: 1;
`;

const AboutInner = styled.div`
  text-align: justify;
  position: relative;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    left: -0.3rem;
    width: 0.3rem;
    height: 2.5rem;
    background-color: ${props => props.theme.main};
  }

  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: -1.4rem;
  //   left: -2.4rem;
  //   width: 2rem;
  //   height: 2rem;
  //   border: 1px solid ${props => props.theme.main};
  // }
`;

export default About;
