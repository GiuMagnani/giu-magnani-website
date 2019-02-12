// import React, { Component } from "react";
// import { Link } from "gatsby";
// import get from "lodash/get";
// import styled from "styled-components";
//
// const FeaturedImage = styled.div`
//   margin: 0 auto;
// `;
//
// const Title = styled.h1`
//   font-size: 28px;
//   line-height: 26px;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   font-weight: 700;
//   font-family: "Chakra Petch", sans-serif;
//   margin-bottom: 1rem;
// `;
//
// class BlogPostTemplate extends Component {
//   render() {
//     console.log(this.props.data);
//     const post = this.props.data.markdownRemark;
//     const siteTitle = get(this.props, "data.site.siteMetadata.title");
//     const { previous, next } = this.props.pathContext;
//
//     return (
//       <div>
//         {/*<Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />*/}
//         <Title>{post.frontmatter.title}</Title>
//         <p>{post.frontmatter.date}</p>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr />
//
//         <ul>
//           {previous && (
//             <li>
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             </li>
//           )}
//
//           {next && (
//             <li>
//               <Link to={next.fields.slug} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default BlogPostTemplate;
//
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         rssMetadata {
//           title
//           author
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={ this.props.location } title={ siteTitle }>
        {/*<SEO title={ post.frontmatter.title } description={ post.excerpt } />*/}
        <h1>{ post.frontmatter.title }</h1>

        <div dangerouslySetInnerHTML={ { __html: post.html } } />

        <ul>
          <li>
            { previous && (
              <Link to={ previous.fields.slug } rel="prev">
                ← { previous.frontmatter.title }
              </Link>
            ) }
          </li>
          <li>
            { next && (
              <Link to={ next.fields.slug } rel="next">
                { next.frontmatter.title } →
              </Link>
            ) }
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
