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
  const landingTemplate = path.resolve(`./src/templates/landing.js`);

  const { createPage } = actions;

  return new Promise(resolve => {
    resolve(
      graphql(`
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
      `).then(result => {
        if (result.errors) {
          throw result.errors;
        }

        // Landing query
        // allLandingCsv {
        //   nodes {
        //     slug
        //     title
        //     introduction
        //   }
        // }

        // let { work, journal, allLandingCsv } = result.data;
        let { work, journal } = result.data;
        work = work.edges;
        journal = journal.edges;
        // allLandingCsv = allLandingCsv.nodes;
        // shop = shop.edges;

        const createPagesByType = (array, component) => {
          const defaultLocale = "en";
          const defaultLangPosts = array.filter(post => {
            return post.node.fields.langKey === defaultLocale;
          });

          defaultLangPosts.forEach((post, index) => {
            const previous =
              index === defaultLangPosts.length - 1
                ? null
                : defaultLangPosts[index + 1].node;
            const next = index === 0 ? null : defaultLangPosts[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: component,
              context: {
                slug: post.node.fields.slug,
                directoryName: post.node.fields.directoryName,
                locale: defaultLocale,
                originalIndex: index,
                previous,
                next,
              },
            });
          });

          const translatedPosts = array.filter(post => {
            return post.node.fields.langKey !== defaultLocale;
          });

          translatedPosts.forEach((post, index) => {
            // TODO: previous and next are wrong, -1 is the same post but in the other language (do -2 or sort the posts by languages first)
            const previous =
              index === translatedPosts.length - 1
                ? null
                : translatedPosts[index + 1].node;
            const next = index === 0 ? null : translatedPosts[index - 1].node;

            Object.keys(locales).map(lang => {
              if (lang === defaultLocale || !post.node.frontmatter.title)
                return;

              createPage({
                path: post.node.fields.slug,
                component: component,
                context: {
                  slug: post.node.fields.slug,
                  directoryName: post.node.fields.directoryName,
                  locale: post.node.fields.langKey,
                  originalIndex: index,
                  previous,
                  next,
                },
              });
            });
          });
        };

        createPagesByType(work, projectSingle);
        createPagesByType(journal, journalSingle);

        // allLandingCsv.forEach(page => {
        //   createPage({
        //     path: page.slug,
        //     component: landingTemplate,
        //     context: {
        //       ...page,
        //       isLanding: true,
        //       locale: "en",
        //     },
        //   });
        // });

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
    console.log(node);
    // console.log(node.frontmatter.title);
    // console.log(node.frontmatter.featuredImage);
    //
    // if (node.frontmatter.featuredImage) {
    //   const path = `../../static/${node.frontmatter.featuredImage}`;
    //
    //   createNodeField({
    //     node,
    //     name: "image",
    //     value: path,
    //   });
    // }

    createNodeField({
      name: "directoryName",
      node,
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
};
