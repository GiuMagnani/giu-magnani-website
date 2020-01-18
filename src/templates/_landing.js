import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import LatestProjectItems from "../components/LatestProjectItems";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import SEO from "../SEO/SEO";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import LocalizedLink from "../components/LocalizedLink";
import { PageWrapper } from "../style/PageStyles";
import {
  HeroDiv,
  Summary,
  HeroDivWrapper,
  MainHeading,
  HeroImg,
  HeroSocialLinksText,
  HeroSocialLinks,
} from "../style/HeroStyles";

const LandingPage = ({ location, data, pageContext }) => {
  console.log(pageContext);
  const projects = data.projects.edges;
  const heroImage = data.heroImage;

  return (
    <PageWrapper>
      <Helmet htmlAttributes={{ lang: pageContext.landingLocale }}></Helmet>
      <HeroDivWrapper>
        <HeroDiv className="container">
          <MainHeading>
            <h1>
              {pageContext.title}
            </h1>
            <h2>
              {pageContext.introduction}
            </h2>
            <Summary>
              <FormattedMessage id="home.summary" />
            </Summary>
            Contact Me!
            >form
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
      > World Map with countries indicators
      > I work with clients from everywhere
      > Reviews
      <ProjectsWrapper>
        <div className="container">
          <ProjectsHeading>
            <FormattedMessage id="projects.intro" />
          </ProjectsHeading>
          <LatestProjectItems projects={projects} />
          <LatestProjectSeeMore>
            <LocalizedLink to={"/work"}>
              <FormattedMessage id="projects.seeProjects" /> →
            </LocalizedLink>
          </LatestProjectSeeMore>
        </div>
      </ProjectsWrapper>
    </PageWrapper>
  );
};

const ProjectsWrapper = styled.section`
  border-top: 1px solid blue;
  margin-top: 0.5rem;

  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
  }
`;

const ProjectsHeading = styled.h2`
  border-bottom: 1px solid ${props => props.theme.main};
  width: calc(100% + 2rem);
  margin-left: -1rem;
  padding: 3rem 0 3rem 1rem;
`;

const LatestProjectSeeMore = styled.div`
  padding-bottom: 1rem;
  text-align: center;
  width: 100%;

  a {
    font-size: 14px;
    background: white;
    color: ${props => props.theme.main};
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    height: 56px;
    line-height: 56px;
    display: block;
    text-decoration: none;
    letter-spacing: 1px;
    padding-left: 20px;
    text-align: left;
    width: 100%;
  }

  @media (min-width: ${props => props.theme.lg}) {
    a {
      width: calc(50% + 7px);
      font-size: 20px;

      &:hover {
        background: ${props => props.theme.main};
        color: white;
      }
    }
  }

  @media (min-width: ${props => props.theme.lg}) {
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export const pageQuery = graphql`
  query LandingQuery($locale: String!) {
    site {
      siteMetadata {
        rssMetadata {
          title
        }
      }
    }
    heroImage: file(relativePath: { eq: "giu-magnani.jpg" }) {
      childImageSharp {
        sizes(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 8
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        fields: { langKey: { eq: $locale } }
        frontmatter: {
          categories: {
            in: ["Front-End Development", "UX/UI Design", "WordPress"]
          }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            categories
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                sizes(quality: 100, maxWidth: 700) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default LandingPage;
