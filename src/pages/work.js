import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import LatestProjectItems from "../components/LatestProjectItems";
import { FormattedMessage } from "react-intl";
import { PageIntro, PageWrapper } from "../style/PageStyles";

const Work = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges;
  const [filters, setFilters] = useState({
    "Graphic Design": true,
    "UX/UI Design": true,
    "Front-End Development": true,
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
          if (tag.toLowerCase() === key.toLowerCase()) {
            filteredItems = [...filteredItems, item];
          }
        });
      });
    });

    return filteredItems;
  };

  return (
    <PageWrapper>
      <PageIntro>
        <div className="container">
          <h2>
            <FormattedMessage id="projects.latest" /> {/*<FilterLink*/}
            {/*onClick={() => toggleFilter("Graphic Design")}*/}
            {/*className={filters["Graphic Design"] ? "is-active" : ""}>*/}
            {/*<FormattedMessage id="projects['Graphic Design']" />,*/}
            {/*</FilterLink>{" "}*/}
            {/*<FilterLink*/}
            {/*onClick={() => toggleFilter("UX/UI Design")}*/}
            {/*className={filters["UX/UI Design"] ? "is-active" : ""}>*/}
            {/*<FormattedMessage id="projects['UX/UI Design']" />,*/}
            {/*</FilterLink>{" "}*/}
            {/*<FilterLink*/}
            {/*onClick={() => toggleFilter("Front-End Development")}*/}
            {/*className={filters["Front-End Development"] ? "is-active" : ""}>*/}
            {/*<FormattedMessage id="projects['Front-End Development']" />*/}
            {/*</FilterLink>{" "}*/}
            {/*<FormattedMessage id="projects.and" />{" "}*/}
            {/*<FilterLink*/}
            {/*onClick={() => toggleFilter("Illustration")}*/}
            {/*className={filters["Illustration"] ? "is-active" : ""}>*/}
            {/*<FormattedMessage id="projects['Illustration']" />*/}
            {/*</FilterLink>*/}
            <FilterLink className="is-active">
              <FormattedMessage id="projects['Graphic Design']" />,
            </FilterLink>{" "}
            <FilterLink className="is-active">
              <FormattedMessage id="projects['UX/UI Design']" />,
            </FilterLink>{" "}
            <FilterLink className="is-active">
              <FormattedMessage id="projects['Front-End Development']" />
            </FilterLink>{" "}
            <FormattedMessage id="projects.and" />{" "}
            <FilterLink className="is-active">
              <FormattedMessage id="projects['Illustration']" />
            </FilterLink>
            <FormattedMessage id="projects.projects" />
          </h2>
        </div>
      </PageIntro>
      <ProjectListWrapper>
        <div className="container">
          <ProjectList projects={data.allMarkdownRemark.edges} />
        </div>
      </ProjectListWrapper>
    </PageWrapper>
  );
};

const ProjectListWrapper = styled.section`
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

const FilterLink = styled.a`
  font-size: 60px;
  text-decoration: line-through;
  font-weight: bold;
  //cursor: pointer;

  &.is-active {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const pageQuery = graphql`
  query ProjectsQuery($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        fileAbsolutePath: { regex: "/work/" }
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
            date(formatString: "DD MMMM, YYYY" , locale: $locale )
            title
            tags
            categories
            featuredImage {
              childImageSharp {
                sizes(quality: 100, maxWidth: 1240) {
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

export default Work;
