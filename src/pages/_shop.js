import React from "react";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

const Shop = ({ data }) => {
  const items = data.allMarkdownRemark.edges;
  return (
    <>
      <div>
        {items.map((item, key) => (
          <div key={key}>
            <Img
              sizes={item.node.frontmatter.featuredImage.childImageSharp.sizes}
              alt={item.node.frontmatter.title}
            />
            <Link to={item.node.fields.slug}>
              <h3>{item.node.frontmatter.title}</h3>
            </Link>
            <p>{item.node.excerpt}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;

// export const pageQuery = graphql`
//   query ShopQuery($locale: String!) {
//     allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/shop/" } }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY" , locale: $locale )
//             title
//             tags
//             featuredImage {
//               childImageSharp {
//                 sizes(quality: 100, maxWidth: 1240) {
//                   ...GatsbyImageSharpSizes_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
