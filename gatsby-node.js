const locales = require("./src/i18n/languages");
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
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

  return new Promise(resolve => {
    resolve(
      graphql(
        `
          {
            journal: allMarkdownRemark(
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
            work: allMarkdownRemark(
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
            shop: allMarkdownRemark(
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
      ).then(result => {
        if (result.errors) {
          throw result.errors;
        }

        let { work, journal, shop } = result.data;
        work = work.edges;
        journal = journal.edges;
        shop = shop.edges;

        const createPagesByType = (array, component) => {
          array.forEach((post, index) => {
            const previous =
              index === array.length - 1 ? null : array[index + 1].node;
            const next = index === 0 ? null : array[index - 1].node;

            Object.keys(locales).map(lang => {
              const localizedPath = locales[lang].default
                ? post.node.fields.slug
                : locales[lang].locale + post.node.fields.slug;

              createPage({
                path: localizedPath,
                component: component,
                context: {
                  slug: localizedPath,
                  locale: lang,
                  previous,
                  next,
                },
              });

            });
          });
        };

        createPagesByType(work, projectSingle);
        createPagesByType(journal, journalSingle);
        createPagesByType(shop, shopSingle);
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    // console.log(node);
    // console.log(value);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
