import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import styled from "styled-components";
import placeholderImgWork from "../../static/depto-work.png";
import Layout from "../layouts/layout";
import SocialLinks from "../components/SocialLinks";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    const projects = get(this, "props.data.allBehanceProjects.edges");
    console.log(projects);

    return (
      <Layout location={ this.props.location }>
        <HeroDiv className="container">
          <MainHeading>
            <h1>I'm Giu Magnani.</h1>
            <h2>
              I’m a Front-End Developer and UI/UX Designer from Chile working and living in Milan, Italy. </h2>
            <p>
              I'm a creative and passionate professional who loves Web as much as Design.

              I started working with small business and participating in design contests to build a strong portfolio and
              references. With perseverance and hard work, in 2012 I was contacted to work remotely with a company in USA
              which produces logo and print design services. In 2013, I went to London, UK. </p>
            <strong>
              See what I’ve been sharing on Social Media:
            </strong>
            <SocialLinks isBlue={true} />
          </MainHeading>
        </HeroDiv>
        <div className="container">
          <LatestPostsContainer>
            <LatestPostsHeading>Latest on my Journal</LatestPostsHeading>
            <LatestPosts>
              { posts.map(({ node }) => {
                const title = get(node, "frontmatter.title") || node.fields.slug;
                return (
                  <LatestPostsItem key={ node.fields.slug } to={ node.fields.slug }>
                    <small>{ node.frontmatter.date }</small>
                    <h3>{ title }</h3>
                    <p dangerouslySetInnerHTML={ { __html: node.excerpt } } />
                  </LatestPostsItem>
                );
              }) }
            </LatestPosts>
            <LatestPostsSeeMore>
              <Link to={ "/journal" }>See my Journal</Link>
            </LatestPostsSeeMore>
          </LatestPostsContainer>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

const HeroDiv = styled.div`
  height: 90vh;
  display: flex;
  //justify-content: center;
  align-items: center;
  background-size: unset;
  background: url("../../static/giu-magnani.jpg") no-repeat 100% 100%;
  padding: 20px;
`;

const MainHeading = styled.div`
  h1 {
    font-size: 70px;
    line-height: 1;
    font-weight: 700;
    display: block;
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    padding-right: 5px;
    display: inline-block;
  }
`;

const LatestPosts = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #2222ff;
  display: flex;
`;

const LatestPostsItem = styled(Link)`
  border: 0 solid #2222ff;
  border-right-width: 1px;
  padding: 30px 20px;
  width: 25%;
  //height: 230px;
  text-decoration: none;

  &&:last-of-type {
    border: 0;
  }

  small {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Chakra Petch", sans-serif;
    display: block;
    padding-bottom: 4px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    line-height: 1.3;
  }

  p {
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    line-height: 1.4;
    padding-bottom: 5px;
  }
`;

const LatestPostsHeading = styled.h2`
  font-size: 30px;
  padding: 10px 30px;
  //margin-top: -50px;
`;

const LatestPostsSeeMore = styled.div`
  margin-bottom: 80px;
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 14px;
    background: #2222ff;
    color: white;
    height: 40px;
    line-height: 38px;
    display: block;
    text-decoration: none;
    width: calc(20% + 7px);
    letter-spacing: 1px;
    padding-left: 20px;
    text-align: left;
    //text-transform: uppercase;
  }
`;

const LatestPostsContainer = styled.div`
  margin-bottom: 100px;
`;

const AboutSection = styled.div`
  background: #2222ff;
  padding: 40px 20px;
  display: flex;
`;

const AboutSectionBody = styled.div`
  width: 40%;
  color: white;

  h2 {
    font-size: 40px;
    padding-bottom: 20px;
    line-height: 1;
    padding-right: 20px;
  }
`;

const AboutSectionWorks = styled.div`
  width: 60%;
  text-align: center;
  margin-top: -110px;
`;

const PlaceHolderWorkImg = styled.div`
  text-align: center;
  img {
    border: 20px solid white;
    border-top: none;
    display: block;
    margin: 0 auto;
  }

  small {
    font-size: 11px;
    //letter-spacing: 1px;
    //text-transform: uppercase;
    //  font-family: monospace;
    color: white;
  }
`;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        rssMetadata {
          title
        }
      }
    }
    allBehanceProjects(limit: 6) {
      edges {
        node {
          id
          name
          description
          published
          areas
          shortURL
          tags
          covers {
            size_original
          }
          tools {
            title
          }
          stats {
            views
            appreciations
            comments
          }
          owners {
            username
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/journal/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
