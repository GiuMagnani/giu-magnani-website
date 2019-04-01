import React from "react";
import { Link, graphql } from "gatsby";

const ShopSingle = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <>
      {/*<SEO title={ post.frontmatter.title } description={ post.excerpt } />*/}
      SHOP
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ul>
        <li>
          {previous && (
            <Link to={`journal${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`journal${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default ShopSingle;

export const pageQuery = graphql`
  query ShopSingleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
