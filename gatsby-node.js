const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const projectSingle = path.resolve(`./src/templates/project-single.js`);
  const journalSingle = path.resolve(`./src/templates/journal-single.js`);
  const shopSingle = path.resolve(`./src/templates/shop-single.js`);

  const { createPage } = actions;

  const createPageByType = (result, type) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const getComponent = () => {
        switch (type) {
          case 'journal':
            return journalSingle;
          case 'projects':
            return projectSingle;
          case 'shop':
            return shopSingle;
          default:
            return null;
        }
      };

      console.log(post.node.fields.slug);

      createPage({
        path: post.node.fields.slug,
        component: getComponent(),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  };

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/journal/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => createPageByType(result, 'journal'));

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => createPageByType(result, 'projects'));

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/shop/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => createPageByType(result, 'shop'));
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
