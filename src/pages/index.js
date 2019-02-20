import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";
import LatestJournalItems from "../components/LatestJournalItems";
import LatestProjectItems from "../components/LatestProjectItems";
import Hero from "../components/Hero";

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const projects = this.props.data.allBehanceProjects.edges;

    return (
      <Layout location={this.props.location}>
        <Hero />
        <LatestProjectItems projects={projects} />
        <LatestJournalItems posts={posts} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        rssMetadata {
          title
        }
      }
    }
    allBehanceProjects(limit: 5) {
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
      limit: 4
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
