import React from "react";
import styled from "styled-components";
import giuNeonImage from "../../static/giu-magnani.jpg";
import SocialLinks from "./SocialLinks";

const Hero = () => (
  <HeroDivWrapper>
    <HeroDiv className="container">
      <MainHeading>
        <h1>I'm Giu Magnani.</h1>
        <h2>
          I’m a Front-End Developer and UI/UX Designer from Chile working and
          living in Milan, Italy.
        </h2>
        <p>
          I'm a creative and passionate professional who loves Web as much as
          Design. I started working with small business and participating in
          design contests to build a strong portfolio and references. With
          perseverance and hard work, in 2012 I was contacted to work remotely
          with a company in USA which produces logo and print design services.
          In 2013, I went to London, UK.
        </p>
        <strong>See what I’ve been sharing on Social Media:</strong>
        <SocialLinks isBlue={true} />
      </MainHeading>
      <HeroImg>
        <img src={giuNeonImage} alt="Giu Magnani 3D Neon Logo" />
      </HeroImg>
    </HeroDiv>
  </HeroDivWrapper>
);

const HeroDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroDivWrapper = styled.div`
  border: 1px solid #2222ff;
  border-width: 0 0 1px;
`;

const MainHeading = styled.div`
  width: 55%;

  h1 {
    font-size: 70px;
    line-height: 1;
    font-weight: 700;
    display: block;
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    padding-right: 5px;
    display: inline-block;
  }
`;

const HeroImg = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  img {
    width: 100%;
  }
`;

export default Hero;
