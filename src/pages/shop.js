import React from 'react';

class Shop extends React.Component {
  render() {
    const products = this.props.data.allMarkdownRemark.edges;
    console.log(products);
    return (
      <div>
        {products.map((product, key) => (
          <div key={key}>
            <img
              src={`./${product.node.frontmatter.featuredImage.childImageSharp.sizes.src}`}
              alt={product.node.frontmatter.title}
            />
            <h3>{product.node.frontmatter.title}</h3>
            <p>{product.node.excerpt}</p>
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
                sizes(maxWidth: 200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
