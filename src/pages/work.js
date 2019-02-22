import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";

const Work = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges;
  const [filters, setFilters] = useState({
    graphicDesign: {
      label: "Graphic Design",
      value: true,
    },
    UXUIDesign: {
      label: "Graphic Design",
      value: true,
    },
    frontEndDevelopment: {
      label: "Graphic Design",
      value: true,
    },
    illustration: {
      label: "Graphic Design",
      value: true,
    },
  });

  const toggleFilter = (filter) => {
    setFilters({ ...filters, [filter]: {...filters[filter], value: !filters[filter].value } });
    filterProjects();
  };

  const filterProjects = () => {
    // let test = [];
    // const activeFilters = Object.keys(filters).map(x => {
    //   if (filters[x].value === true) {
    //     return filters[x];
    //   }
    // });
    //
    // console.log(activeFilters);

    // items.map((x) => {
    //   x.node.frontmatter.tags.map(i => {
    //     activeFilters.map(filter => {
    //       // console.log(key);
    //       // console.log(filters[key].label);
    //       if (i.toLowerCase() === filter.label.toLowerCase()) test.push(x);
    //     });
    //   });
    // });

    // console.log(test);
  };

  return (
    <Layout location={ location }>
      <div className="container">
        <Intro>
          <p>Latest <a onClick={ () => toggleFilter("graphicDesign") }
                       className={ filters.graphicDesign.value ? "is-active" : "" }>Graphic Design,</a> <a
            onClick={ () => toggleFilter("UXUIDesign") } className={ filters.UXUIDesign.value ? "is-active" : "" }>UX/UI
            Design,</a> <a onClick={ () => toggleFilter("frontEndDevelopment") }
                           className={ filters.frontEndDevelopment.value ? "is-active" : "" }>Front-End Development</a> and <a
            onClick={ () => toggleFilter("illustration") }
            className={ filters.illustration.value ? "is-active" : "" }>Illustration</a> Projects.</p>
        </Intro>
        <WorksContainer>
          { items.map((item, key) => (
            <WorkItem key={ key } to={ item.node.fields.slug }>
              <Img sizes={
                item.node.frontmatter.featuredImage.childImageSharp.sizes
              } alt={ item.node.frontmatter.title } />
              <h4>{ item.node.frontmatter.category }</h4>
              <h3>{ item.node.frontmatter.title }</h3>
              <p>{ item.node.excerpt }</p>
            </WorkItem>
          )) }
        </WorksContainer>
      </div>
    </Layout>
  );
};

const Intro = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  
  p {
    font-size: 60px;
    line-height: 1.2;
    font-weight: bold;    
  }
  
  a {
    font-size: 60px;
    text-decoration: line-through;
    font-weight: bold;
    opacity: 0.3;
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
  
  @media (min-width: ${ props => props.theme.md }) {
    width: 50%;
  }

  @media (min-width: ${ props => props.theme.lg }) {
    width: 33.33%;
  }
`;

export default Work;

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
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
            featuredImage {
              childImageSharp {
                sizes(quality: 90, maxWidth: 1240) {
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
