import React from "react";
import { FormattedMessage } from "react-intl";
import Img from "gatsby-image";
import {HeroDiv,  Summary,  HeroDivWrapper,  MainHeading,  HeroImg,  HeroSocialLinksText,  HeroSocialLinks} from "../style/HeroStyles";

const Hero = ({ heroImage }) => (
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
        <Img
          sizes={heroImage.childImageSharp.sizes}
          alt="Giu Magnani 3D Neon Logo"
        />
      </HeroImg>
    </HeroDiv>
  </HeroDivWrapper>
);



export default Hero;
