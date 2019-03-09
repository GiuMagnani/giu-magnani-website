import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import LatestProjectItems from "../components/LatestProjectItems";

const Work = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges;
  const [filters, setFilters] = useState({
    "Graphic Design": true,
    "UX/UI Design": true,
    "Front-End Development": true,
    "Logo Design": true,
    Illustration: true,
  });

  const toggleFilter = filter => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  const getFilteredItems = () => {
    let filteredItems = [];

    Object.keys(filters).map(key => {
      if (!filters[key]) return;

      items.map(item => {
        item.node.frontmatter.categories.map(tag => {
          if (tag.toLowerCase() === key.toLowerCase()) filteredItems.push(item);
        });
      });
    });

    return filteredItems;
  };

  return (
    <ProjectsWrapper>
      <Intro>
        <div className="container">
          <p>
            Latest{" "}
            <a
              onClick={() => toggleFilter("Graphic Design")}
              className={filters["Graphic Design"] ? "is-active" : ""}>
              Graphic Design,
            </a>{" "}
            <a
              onClick={() => toggleFilter("Logo Design")}
              className={filters["Logo Design"] ? "is-active" : ""}>
              Logo Design,
            </a>{" "}
            <a
              onClick={() => toggleFilter("UX/UI Design")}
              className={filters["UX/UI Design"] ? "is-active" : ""}>
              UX/UI Design,
            </a>{" "}
            <a
              onClick={() => toggleFilter("Front-End Development")}
              className={filters["Front-End Development"] ? "is-active" : ""}>
              Front-End Development
            </a>{" "}
            and{" "}
            <a
              onClick={() => toggleFilter("Illustration")}
              className={filters["Illustration"] ? "is-active" : ""}>
              Illustration
            </a>{" "}
            Projects.
          </p>
        </div>
      </Intro>
      <ProjectListWrapper>
        <div className="container">
          <ProjectList projects={getFilteredItems()} />
        </div>
      </ProjectListWrapper>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  margin-bottom: 4rem;
`;

const ProjectListWrapper = styled.div`
  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.main};

  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
  }
`;

const ProjectList = styled(LatestProjectItems)`
  margin-top: 0;
  padding-top: 1rem;
`;

const Intro = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${props => props.theme.main};

  p {
    font-size: 60px;
    line-height: 1.2;
    font-weight: bold;
  }

  a {
    font-size: 60px;
    text-decoration: line-through;
    font-weight: bold;
    //opacity: 0.3;
    cursor: pointer;
  }

  .is-active {
    opacity: 1;
    text-decoration: underline;
  }
`;

const WorksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const WorkItem = styled(Link)`
  width: 100%;
  padding: 10px;
  text-decoration: none;
  margin-bottom: 2rem;

  small {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: monospace;
    display: block;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0.75rem;
    margin-top: 1rem;
  }

  p {
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    line-height: 1.4;
    padding-bottom: 5px;
  }

  .gatsby-image-wrapper {
    height: 250px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  @media (min-width: ${props => props.theme.md}) {
    width: 50%;
  }

  @media (min-width: ${props => props.theme.lg}) {
    width: 33.33%;
  }
`;

export default Work;

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { fileAbsolutePath: { regex: "/work/" } }
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
            tags
            categories
            featuredImage {
              childImageSharp {
                sizes(quality: 100, maxWidth: 1240) {
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
