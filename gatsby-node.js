const locales = require("./src/i18n/languages");
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    console.log(page);
    deletePage(page);

    Object.keys(locales).map(lang => {
      console.log(lang);

      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].locale + page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      });
    });

    resolve();
  });
};

exports.createPages = ({ graphql, actions }) => {
  const projectSingle = path.resolve(`./src/templates/work-single.js`);
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
          case "journal":
            return journalSingle;
          case "work":
            return projectSingle;
          case "shop":
            return shopSingle;
          default:
            return null;
        }
      };

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
  ).then(result => createPageByType(result, "journal"));

  graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/work/" } }
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
  ).then(result => createPageByType(result, "work"));

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
  ).then(result => createPageByType(result, "shop"));
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
