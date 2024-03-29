import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import LatestJournalItems from "../components/LatestJournalItems";
import LatestProjectItems from "../components/LatestProjectItems";
import Hero from "../components/Hero";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import LocalizedLink from "../components/LocalizedLink";
import { PageWrapper } from "../style/PageStyles";

const BlogIndex = ({ location, data }) => {
  const journal = data.journal.edges;
  const projects = data.projects.edges;
  const IllustrationProjects = data.IllustrationProjects.edges;
  const heroImage = data.heroImage;

  return (
    <PageWrapper>
      <Hero heroImage={heroImage} />
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
      {/* Drawings */}
      <JournalWrapper>
        <div className="container">
          <ProjectsHeading>
          <FormattedMessage id="projects.introDrawings" />
          </ProjectsHeading>
          <LatestProjectItems projects={IllustrationProjects} />
          <LatestProjectSeeMore>
            <LocalizedLink to={"/work"}>
              <FormattedMessage id="projects.seeProjects" /> →
            </LocalizedLink>
          </LatestProjectSeeMore>
        </div>
      </JournalWrapper>
      <JournalWrapper>
        <div className="container">
          <LatestPostsHeading>
            <FormattedMessage id="journal.intro" />
          </LatestPostsHeading>
          <LatestJournalItems journal={journal} />
          <LatestPostsSeeMore>
            <LocalizedLink to={"/journal"}>
              <FormattedMessage id="journal.seeJournal" /> →
            </LocalizedLink>
          </LatestPostsSeeMore>
        </div>
      </JournalWrapper>
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

const JournalWrapper = styled.section`
  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    position: relative;
    margin-top: 0.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${props => props.theme.main};
    }
  }
`;

const LatestProjectSeeMore = styled(LatestPostsSeeMore)``;

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
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
    journal: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/journal/" }
        fields: { langKey: { eq: $locale } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: $locale)
            title
          }
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        fields: { langKey: { eq: $locale } }
        frontmatter: {
          categories: {
            in: ["Front-End Development", "UX/UI Design"]
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
    IllustrationProjects: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
        fields: { langKey: { eq: $locale } }
        frontmatter: { categories: { eq: "Illustration" } }
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

export default BlogIndex;
