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
          <h2>UX/UI and Front-End Development Projects</h2>
          <LatestProjectItems projects={projects} />
        </div>
      </ProjectsWrapper>
      <LatestJournalItems journal={journal} />
    </Layout>
  );
};

const ProjectsWrapper = styled.section`
  padding-top: 3rem;
`;

export default BlogIndex;

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
