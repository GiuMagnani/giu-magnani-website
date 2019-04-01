import React from "react";
import Layout from "../layouts/layout";
import styled from "styled-components";
import { PageIntro, PageWrapper } from "../style/PageStyles";
import {
  FormattedHTMLMessage,
  FormattedMessage
} from "react-intl";
import Tools from "../components/Tools";

const About = () => {
  const getRandom = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <PageWrapper>
      <PageIntro>
        <div className="container">
          <FormattedMessage id="about.heading1" tagName="h1" />
          <FormattedMessage id="about.heading2" tagName="h2" />
        </div>
      </PageIntro>
      <AboutWrapper>
        <div className="container">
          <AboutInner>
            <MainText>
              <FormattedMessage id="about.bio1" tagName="p" />
              <Highlight>
                <FormattedMessage id="about.quote1" />
              </Highlight>
              <br />
              <FormattedMessage id="about.bio2" tagName="p" />
              <Highlight>
                <FormattedMessage id="about.quote2" />
              </Highlight>
              <br />
              <FormattedMessage id="about.bio3" tagName="p" />
              <Highlight>
                <FormattedMessage id="about.quote3" />
              </Highlight>
              <br />
              <FormattedMessage id="about.bio4" tagName="p" />
              <Highlight>
                <FormattedMessage id="about.quote4" />
              </Highlight>
            </MainText>
            <MainImage>a</MainImage>
          </AboutInner>
          <Tools />
          <Colophon x={getRandom(0, 100)} y={getRandom(0, 100)}>
            <FormattedHTMLMessage id="about.colophon" tagName="div"/>
          </Colophon>
        </div>
      </AboutWrapper>
    </PageWrapper>
  );
};

const AboutWrapper = styled.section`
  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.main};

  > .container {
    border: 1px solid ${props => props.theme.main};
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
  margin: 1.5rem 0 1rem;
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
      bottom: ${props => props.x}%;
      right: -5px;
      width: 4px;
      height: 1rem;
      background-color: ${props => props.theme.main};
    }

    &::before {
      content: "";
      position: absolute;
      bottom: ${props => props.y}%;
      right: -5px;
      width: 4px;
      height: 0.5rem;
      background-color: ${props => props.theme.main};
    }
  }
`;

const MainImage = styled.div`
  background: ${props => props.theme.main};
  padding: 1rem;
  flex: 1;
  margin: 1rem 0 1rem 1rem;
  width: 100%;
  display: none;

  @media (min-width: ${props => props.theme.md}) {
    display: block;
    width: 30%;
    flex-basis: 30%;
  }
`;

const MainText = styled.div`
  border: 1px solid ${props => props.theme.main};
  margin: 1rem 0;
  padding: 2rem 1rem;
  flex: 1;
  width: 100%;

  @media (min-width: ${props => props.theme.md}) {
    width: 70%;
    flex-basis: 70%;
  }
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
