import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";

class Work extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={ this.props.location }>
        <div>
          <h2>WORKS</h2>
          <p>Filter by:</p>
          <p>Show me everything</p>
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
  }
}

export default Work;

const WorksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const WorkItem = styled(Link)`
  width: 25%;
  padding: 10px;
  text-decoration: none;
  color: black;

  small {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: monospace;
    display: block;
    padding-bottom: 4px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
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
`;

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
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
