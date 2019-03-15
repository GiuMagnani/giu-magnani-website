import React from "react";
import styled from "styled-components";
import giuNeonImage from "../../static/giu-magnani.jpg";
import SocialLinks from "./SocialLinks";
import { FormattedMessage } from "react-intl";

const Hero = () => (
  <HeroDivWrapper>
    <HeroDiv className="container">
      <MainHeading>
        <h1>
          <FormattedMessage id="home.heading1" />
        </h1>
        <h2>
          <FormattedMessage id="home.heading2" />
        </h2>
        <Summary>
          <FormattedMessage id="home.summary" />
        </Summary>
        <HeroSocialLinksText>
          <FormattedMessage id="home.socialIntro" tagName="strong" />
        </HeroSocialLinksText>
        <HeroSocialLinks isBlue={true} />
      </MainHeading>
      <HeroImg>
        <img src={giuNeonImage} alt="Giu Magnani 3D Neon Logo" />
      </HeroImg>
    </HeroDiv>
  </HeroDivWrapper>
);

const HeroDiv = styled.div`
  position: relative;

  @media (min-width: ${props => props.theme.lg}) {
    height: calc(100vh - 60px);
  }
`;

const Summary = styled.p`
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.lg}) {
    font-size: 18px;
  }
`;

const HeroDivWrapper = styled.section`
  border: 1px solid ${props => props.theme.main};
  border-width: 0 0 1px;
`;

const MainHeading = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 36px;
    line-height: 1;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    padding-right: 5px;
    display: inline-block;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  @media (min-width: ${props => props.theme.md}) {
    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 22px;
      font-weight: bold;
    }
  }

  @media (min-width: ${props => props.theme.lg}) {
    padding-bottom: 0;
    max-width: 60%;

    h1 {
      font-size: 70px;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 26px;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
  }
`;

const HeroImg = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;

  img {
    height: 40vh;
    opacity: 0.3;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (min-width: ${props => props.theme.lg}) {
    height: 100%;

    img {
      height: 60vh;
      opacity: 1;
    }
  }
`;

const HeroSocialLinksText = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 0;

  @media (min-width: ${props => props.theme.md}) {
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const HeroSocialLinks = styled(SocialLinks)`
  margin-bottom: 1rem;
  width: 100%;

  ul {
    justify-content: flex-start;
  }
`;

export default Hero;
