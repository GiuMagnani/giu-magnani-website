const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const locales = require("./src/i18n/locales");

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
  // const shopSingle = path.resolve(`./src/templates/shop-single.js`);

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
                    langKey
                    directoryName
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
                    langKey
                    directoryName
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

        let { work, journal } = result.data;
        work = work.edges;
        journal = journal.edges;
        // shop = shop.edges;

        const createPagesByType = (array, component) => {
          const defaultLocale = "en";
          const defaultLangPosts = array.filter(post => {
            return post.node.fields.langKey === defaultLocale;
          });

          defaultLangPosts.forEach((post, index) => {
            const previous =
              index === array.length - 1 ? null : array[index + 1].node;
            const next = index === 0 ? null : array[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: component,
              context: {
                slug: post.node.fields.slug,
                directoryName: post.node.fields.directoryName,
                locale: defaultLocale,
                previous,
                next,
              },
            });
          });

          const translatedPosts = array.filter(post => {
            return post.node.fields.langKey !== defaultLocale;
          });

          translatedPosts.forEach((post, index) => {
            const previous =
              index === array.length - 1 ? null : array[index + 1].node;
            const next = index === 0 ? null : array[index - 1].node;

            Object.keys(locales).map(lang => {
              if (lang === defaultLocale || !post.node.frontmatter.title) return;

              const localizedPath = locales[lang].locale + post.node.fields.slug;

              createPage({
                path: localizedPath,
                component: component,
                context: {
                  slug: localizedPath,
                  directoryName: post.node.fields.directoryName,
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
        // defaultLangPosts.forEach((post, index) => {
        //   const previous =
        //     index === array.length - 1 ? null : array[index + 1].node;
        //   const next = index === 0 ? null : array[index - 1].node;
        //
        //   Object.keys(locales).map(lang => {
        //     const localizedPath = locales[lang].default
        //       ? post.node.fields.slug
        //       : locales[lang].locale + post.node.fields.slug;
        //
        //     createPage({
        //       path: localizedPath,
        //       component: component,
        //       context: {
        //         slug: localizedPath,
        //         directoryName: post.node.fields.directoryName,
        //         locale: lang,
        //         previous,
        //         next,
        //       },
        //     });
        //   });
        // });
        // };

        // createPagesByType(shop, shopSingle);
        // shop: allMarkdownRemark(
        //     sort: { fields: [frontmatter___date], order: DESC }
        //   filter: { fileAbsolutePath: { regex: "/shop/" } }
        // ) {
        //     edges {
        //       node {
        //         fields {
        //           slug
        //         }
        //         frontmatter {
        //           title
        //         }
        //       }
        //     }
        // };
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: "directoryName",
      node,
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
};
