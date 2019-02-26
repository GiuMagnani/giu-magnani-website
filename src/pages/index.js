import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";
import LatestJournalItems from "../components/LatestJournalItems";
import LatestProjectItems from "../components/LatestProjectItems";
import Hero from "../components/Hero";
import styled from "styled-components";

const BlogIndex = ({location, data}) => {
  const journal = data.journal.edges;
  const projects = data.projects.edges;

  return (
    <Layout location={location}>
      <Hero />
      <ProjectsWrapper>
        <div className="container">
          <ProjectsHeading>UX/UI and Front-End Development Projects</ProjectsHeading>
          <LatestProjectItems projects={projects} />
        </div>
      </ProjectsWrapper>
      <div className="container">
      <LatestPostsHeading>Latest on my Journal</LatestPostsHeading>
      <LatestJournalItems journal={journal} />
      <LatestPostsSeeMore>
        <Link to={"/journal"}>See my Journal</Link>
      </LatestPostsSeeMore>
      </div>
    </Layout>
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
  padding: 0.5rem 0;
  margin: 1.5rem 0;
`;

const LatestPostsSeeMore = styled.div`
  margin-bottom: 80px;
  text-align: center;
  width: 100%;

  a {
    font-size: 14px;
    background: ${ props => props.theme.main };
    color: white;
    height: 40px;
    line-height: 38px;
    display: block;
    text-decoration: none;
    letter-spacing: 1px;
    padding-left: 20px;
    text-align: left;
    width: 100%;
  }

  @media (min-width: ${ props => props.theme.lg }) {
    a {
      width: calc(50% + 7px);
    }
  }

  @media (min-width: ${ props => props.theme.lg }) {
    a {
      width: calc(20% + 7px);
    }
  }
`;

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
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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
            featuredImage{
              childImageSharp {
                sizes(quality: 100, maxWidth: 800) {
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
