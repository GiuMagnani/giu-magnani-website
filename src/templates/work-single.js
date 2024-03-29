import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import posed from "react-pose";
import SEO from "../SEO/SEO";
import Helmet from "react-helmet";
import { Icon } from "../components/Icons/Icons";
import { Content } from "../style/PageStyles";

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

  return <>
      <ContentWrapper className="container">
        <SEO postNode={{ title: post.frontmatter.title, excerpt: post.excerpt, featuredImage: post.frontmatter.featuredImage && post.frontmatter.featuredImage.publicURL }} postPath={post.fields.slug} postSEO={true} />
        <Helmet>
          <title>{`${siteTitle} | ${post.frontmatter.title}`}</title>
        </Helmet>
        <Intro>
          <IntroDetails>
            <div>
              <small>{post.frontmatter.date}</small>
              <SingleTitle>{post.frontmatter.title}</SingleTitle>
            </div>
            <ul>
              {post.frontmatter.tags && <li>
                  {post.frontmatter.tags.map((tag, index) => (
                    <span key={index}>
                      {`${tag}${
                        index === post.frontmatter.tags.length - 1 ||
                        post.frontmatter.tags.length === 1
                          ? ""
                          : " | "
                      }`}
                    </span>
                  ))}
                </li>}
              {post.frontmatter.tools && <li>
                  {post.frontmatter.tools.map((tool, index) => (
                    <span key={index}>
                      {`${tool}${
                        index === post.frontmatter.tools.length - 1 ||
                        post.frontmatter.tools.length === 1
                          ? ""
                          : " | "
                      }`}
                    </span>
                  ))}
                </li>}
                {post.frontmatter.work_url && <li>
                  <a href={post.frontmatter.work_url[1]} target="_blank">{post.frontmatter.work_url[0]}</a>
                </li>}
              {(post.frontmatter.dribbble_url || post.frontmatter.behance_url || post.frontmatter.github_url || post.frontmatter.artstation_url) && <LinkIcon>
                  <span>SEE IT ALSO ON</span>
                  {post.frontmatter.dribbble_url && <a href={post.frontmatter.dribbble_url} rel="noopener" target="_blank">
                      <Icon name="dribbble" />
                    </a>}
                  {post.frontmatter.behance_url && <a href={post.frontmatter.behance_url} rel="noopener" target="_blank">
                      <Icon name="behance" />
                    </a>}
                  {post.frontmatter.github_url && <a href={post.frontmatter.github_url} rel="noopener" target="_blank">
                      <Icon name="github" />
                    </a>}
                  {post.frontmatter.artstation_url && <a href={post.frontmatter.artstation_url} rel="noopener" target="_blank">
                      <Icon name="artstation" />
                    </a>}
                </LinkIcon>}
              {/* {post.frontmatter.colors && <li>
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
                </li>} */}
            </ul>
          </IntroDetails>
          <IntroImage />
        </Intro>
        <FeaturedImage>
          <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} alt={post.frontmatter.altFeaturedImage || post.frontmatter.title} />
        </FeaturedImage>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <Pagination>
          <li>
            {previous && <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>}
          </li>
          <li>
            {next && <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>}
          </li>
        </Pagination>
      </ContentWrapper>
    </>;
};

const ContentWrapper = styled.article`
  padding-bottom: 38px;
`;

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

const LinkIcon = styled.li`
  height: 2rem;
  padding: 0;
  text-align: left;
  line-height: 2rem;
  display: flex;
  align-items: center;

  span {
    margin-right: 0.5rem;
  }

  a {
    display: inline-block;
    height: 100%;
    width: 1rem;
    margin-right: 1rem;
  }
`;

const IntroImage = styled.div`
  border: 1px solid ${props => props.theme.main};
  flex: 1;
  margin-left: 1rem;
  background: ${props => props.theme.main};
  max-height: calc(100vh - 98px - 2rem);
`;

const FeaturedImage = styled.section`
  margin: 1rem 0;
  border: 1px solid ${props => props.theme.main};
  /* max-height: 80vh; */
  overflow: hidden;

  .gatsby-image-wrapper {
    /* max-height: calc(80vh - 1rem); */
    border: 1rem solid white;

    /* img { */
      /* height: 100%; */
    /* } */
  }
`;

const Intro = styled.header`
  min-height: calc(100vh - 97px);
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

  @media (min-width: ${props => props.theme.lg}) {
    margin-top: 60px;
  }
`;

const SingleTitle = styled(posed.h1(H1Props))`
  font-size: 50px;
  margin-bottom: 1rem;
`;

const Pagination = styled.ul`
  margin: 2rem 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  list-style-type: none;
  border: 1px solid ${props => props.theme.main};
  padding: 1rem;

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
  query ProjectSingleBySlug($slug: String!, $locale: String!) {
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
        date(formatString: "MMMM DD, YYYY", locale: $locale)
        featuredImage {
          publicURL
          childImageSharp {
            sizes(quality: 100, maxWidth: 1240) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
        altFeaturedImage
        tags
        categories
        tools
        work_url
        behance_url
        dribbble_url
        artstation_url
        colors
      }
    }
  }
`;
