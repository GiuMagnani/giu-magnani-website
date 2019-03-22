import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import SEO from "../SEO/SEO";
import Helmet from "react-helmet";

const JournalSingle = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO
        postNode={{
          title: post.frontmatter.title,
          excerpt: post.excerpt,
          featuredImage:
            post.frontmatter.featuredImage &&
            post.frontmatter.featuredImage.publicURL,
        }}
        postPath={post.fields.slug}
        postSEO={true}
      />
      <Helmet>
        <title>{`${siteTitle} | ${post.frontmatter.title}`}</title>
      </Helmet>
      <ContentWrapper className="container">
        <Intro>
          <small>{post.frontmatter.date}</small>
          <SingleTitle>{post.frontmatter.title}</SingleTitle>
        </Intro>

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />

        <Pagination>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </Pagination>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.article``;

const Intro = styled.header`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  small {
    margin-bottom: 0.75rem;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: block;
  }
`;

const Content = styled.div`
  p {
    margin: 1rem auto;
    max-width: 590px;
    font-size: 18px;
  }

  a {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
  }

  img,
  .gatsby-resp-image-link {
    display: block;
    margin: 3rem auto;
  }
`;

const SingleTitle = styled.h1`
  font-size: 50px;
`;

const Pagination = styled.ul`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  list-style-type: none;

  li {
    a {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
`;

export default JournalSingle;

export const pageQuery = graphql`
  query JournalSingleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          publicURL
          childImageSharp {
            sizes(quality: 100, maxWidth: 1240) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
