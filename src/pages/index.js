import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import LatestJournalItems from "../components/LatestJournalItems";
import LatestProjectItems from "../components/LatestProjectItems";
import Hero from "../components/Hero";
import styled from "styled-components";
import Menu from "../components/Menu";

const BlogIndex = ({ location, data }) => {
  const journal = data.journal.edges;
  const projects = data.projects.edges;
  const [isMenuOpen, setMenuVisibility] = useState(false);

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setMenuVisibility={setMenuVisibility} />
      <button onClick={() => setMenuVisibility(!isMenuOpen)}>MENU</button>
      <Hero />
      <ProjectsWrapper>
        <div className="container">
          <ProjectsHeading>
            UX/UI and Front-End Development Projects
          </ProjectsHeading>
          <LatestProjectItems projects={projects} />
          <LatestProjectSeeMore>
            <Link to={"/work"}>See all my Work →</Link>
          </LatestProjectSeeMore>
        </div>
      </ProjectsWrapper>
      <JournalWrapper>
        <div className="container">
          <LatestPostsHeading>Latest on my Journal</LatestPostsHeading>
          <LatestJournalItems journal={journal} />
          <LatestPostsSeeMore>
            <Link to={"/journal"}>See my Journal →</Link>
          </LatestPostsSeeMore>
        </div>
      </JournalWrapper>
    </>
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

const LatestPostsHeading = styled.h2`
  border-bottom: 1px solid ${props => props.theme.main};
  width: calc(100% + 2rem);
  margin-left: -1rem;
  padding: 3rem 0 3rem 1rem;
`;

const LatestPostsSeeMore = styled.div`
  padding-bottom: 1rem;
  text-align: center;
  width: 100%;

  a {
    font-size: 14px;
    background: white;
    color: ${props => props.theme.main};
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    height: 40px;
    line-height: 38px;
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

      &:hover {
        background: ${props => props.theme.main};
        color: white;
      }
    }
  }

  @media (min-width: ${props => props.theme.lg}) {
    a {
      width: calc(20% + 7px);
      width: 100%;
      text-align: center;
    }
  }
`;

const JournalWrapper = styled.section`
  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    border-bottom: 0;
    position: relative;
    padding-top: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 0.5rem;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${props => props.theme.main};
    }
  }
`;

const LatestProjectSeeMore = styled(LatestPostsSeeMore)``;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        rssMetadata {
          title
        }
      }
    }
    journal: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/journal/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 8
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            category
            date
            featuredImage {
              childImageSharp {
                sizes(
                  quality: 100
                  maxWidth: 800
                  duotone: { highlight: "#ffffff", shadow: "#2222ff" }
                  toFormat: PNG
                ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogIndex;
