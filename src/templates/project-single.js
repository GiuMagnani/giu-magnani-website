import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

const ProjectSingle = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <>
      <ContentWrapper className="container">
        {/*<SEO title={ post.frontmatter.title } description={ post.excerpt } />*/}
        <Intro>
          <small>{post.frontmatter.date}</small>
          <SingleTitle>{post.frontmatter.title}</SingleTitle>
          <small>{post.frontmatter.tags}</small>
          <small>{post.frontmatter.tools}</small>
          <small>{post.frontmatter.behance_url}</small>
          <small>{post.frontmatter.dribbble_url}</small>
          {post.frontmatter.colors &&
            post.frontmatter.colors.map(color => (
              <span
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#" + color,
                }}
              />
            ))}
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
  margin-bottom: 1rem;
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

export default ProjectSingle;

export const pageQuery = graphql`
  query ProjectSingleBySlug($slug: String!) {
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
        tags
        category
        tools
        behance_url
        dribbble_url
        colors
      }
    }
  }
`;
