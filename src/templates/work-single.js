import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import posed from "react-pose";

const IntroProps = {
  enter: { opacity: 1, y: "0%", transition: { duration: 150 } },
  exit: { opacity: 0, y: "15%", transition: { duration: 150, delay: 150 } },
};

const H1Props = {
  enter: { opacity: 1, x: "0%", transition: { duration: 150, delay: 150 } },
  exit: { opacity: 0, x: "15%", transition: { duration: 150, delay: 150 } },
};

const WorkSingle = props => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <>
      <ContentWrapper className="container">
        {/*<SEO title={ post.frontmatter.title } description={ post.excerpt } />*/}
        <Intro>
          <IntroDetails>
            <div>
              <small>{post.frontmatter.date}</small>
              <SingleTitle>{post.frontmatter.title}</SingleTitle>
            </div>
            <ul>
              {post.frontmatter.tags && (
                <li>
                  {post.frontmatter.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))}
                </li>
              )}
              {post.frontmatter.tools && (
                <li>
                  {post.frontmatter.tools.map((tool, index) => (
                    <span key={index}>{tool} </span>
                  ))}
                </li>
              )}
              {(post.frontmatter.dribbble_url ||
                post.frontmatter.behance_url ||
                post.frontmatter.github_url) && (
                <li>
                  {post.frontmatter.dribbble_url && (
                    <a href={post.frontmatter.dribbble_url}>dribbble</a>
                  )}
                  {post.frontmatter.behance_url && (
                    <a href={post.frontmatter.behance_url}>behance</a>
                  )}
                  {post.frontmatter.github_url && (
                    <a href={post.frontmatter.github_url}>GitHub</a>
                  )}
                </li>
              )}
              {post.frontmatter.colors && (
                <li>
                  {post.frontmatter.colors.map((color, index) => (
                    <span
                      key={index}
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: "#" + color,
                      }}
                    />
                  ))}
                </li>
              )}
            </ul>
          </IntroDetails>
          <IntroImage />
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

const IntroDetails = styled(posed.div(IntroProps))`
  border: 1px solid ${props => props.theme.main};
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  > div {
    padding: 1rem;
  }

  ul {
    border: 1px solid ${props => props.theme.main};
    border-width: 1px 0 0;

    li {
      padding: 0.5rem 1rem;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1px;
      min-height: 2rem;
      line-height: 1.2;
      border-bottom: 1px solid ${props => props.theme.main};

      &:last-of-type {
        border-bottom: 0;
      }
    }
  }
`;

const IntroImage = styled.div`
  border: 1px solid ${props => props.theme.main};
  flex: 1;
  margin-left: 1rem;
  background: ${props => props.theme.main};
`;

const Intro = styled.header`
  min-height: calc(100vh - 59px);
  display: flex;
  border: 1px solid ${props => props.theme.main};
  border-top: 0;
  padding: 1rem;

  small {
    margin-bottom: 0.75rem;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: block;
  }
`;

const Content = styled.div`
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    max-width: 700px;
    margin: 2rem auto;
  }

  h2 {
    line-height: 1.3;
    margin-bottom: 2rem;
  }

  em {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-style: italic;

    a {
      font-size: 14px;
    }
  }

  p {
    margin: 1rem auto;
    font-size: 21px;
  }

  a {
    font-size: 21px;
    font-weight: bold;
    text-decoration: underline;
  }

  .gatsby-resp-image-wrapper {
    margin: 3rem auto;
  }
`;

const SingleTitle = styled(posed.h1(H1Props))`
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

export default WorkSingle;

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
        categories
        tools
        behance_url
        dribbble_url
        colors
      }
    }
  }
`;
