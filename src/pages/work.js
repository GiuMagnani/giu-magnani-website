import React from 'react';
import Img from "gatsby-image";

class Work extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <h2>WORKS</h2>
        <p>mis trabajos:</p>
        {items.map((item, key) => (
          <div key={key}>
            <Img
              sizes={item.node.frontmatter.featuredImage.childImageSharp.sizes}
              alt={item.node.frontmatter.title}
            />
            <h3>{item.node.frontmatter.title}</h3>
            <p>{item.node.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Work;

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
