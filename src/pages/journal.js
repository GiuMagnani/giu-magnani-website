import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Img from "gatsby-image";

class Journal extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        Filter by:
        <ul>
          <li>Art</li>
          <li>Code</li>
          <li>Other stuff</li>
        </ul>
        {items.map((item, key) => (
          <div key={key}>
            {/*<img*/}
            {/*src={`./${item.node.frontmatter.featuredImage.childImageSharp.sizes.src}`}*/}
            {/*alt={item.node.frontmatter.title}*/}
            {/*/>*/}
            <h3>{item.node.frontmatter.title}</h3>
            <p>{item.node.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Journal;

export const pageQuery = graphql`
  query JournalQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/journal/" } }) {
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

