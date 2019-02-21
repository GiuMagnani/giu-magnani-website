import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layouts/layout";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.behanceProjects;
    const { previous, next } = this.props.pageContext;
    console.log(this.props);

    return (
      <Layout location={this.props.location}>
        <p>{post.name}</p>
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
        <p>{post.description}</p>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const projectQuery = graphql`
  query projectQuery($id: String) {
    behanceProjects(id: { eq: $id }) {
      id
      name
      description
      published_on
      url
      fields
      covers {
        404
      }
      stats {
        views
        appreciations
      }
      featured_on
      owners
      modules
    }
  }
`;
