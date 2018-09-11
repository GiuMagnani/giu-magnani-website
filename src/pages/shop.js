import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

class Shop extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        {items.map((item, key) => (
          <div key={key}>
            <Img
              sizes={item.node.frontmatter.featuredImage.childImageSharp.sizes}
              alt={item.node.frontmatter.title}
            />
            <Link to={item.node.fields.slug}><h3>{item.node.frontmatter.title}</h3></Link>
            <p>{item.node.excerpt}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Shop;

export const pageQuery = graphql`
  query ShopQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/shop/" } }) {
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
