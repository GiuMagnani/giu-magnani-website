import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import favicon16 from "../images/favicon-16x16.png";
import favicon32 from "../images/favicon-32x32.png";
import appleTouchIcon from "../images/apple-touch-icon.png";

export default props => {
  const { postNode, postPath, postSEO } = props;
  let title;
  let description;
  let image;
  let postURL;
  let fbShareImage = '/facebook-share-image.png';
  let twShareImage = '/twitter-share-image.png';

  if (postSEO) {
    const postMeta = postNode;
    title = postMeta.title;
    description = postNode.excerpt;
    image = postMeta.featuredImage || fbShareImage;
    postURL = config.siteUrl + postPath;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = fbShareImage;
  }
  const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
  image = config.siteUrl + realPrefix + image;
  twShareImage = config.siteUrl + realPrefix + twShareImage;
  const blogURL = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push([
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
      },
    ]);
  }
  return (
    <Helmet>
      {/* Images */ }
      <link rel="apple-touch-icon" sizes="180x180" href={ appleTouchIcon } />
      <link rel="icon" type="image/png" sizes="32x32" href={ favicon32 } />
      <link rel="icon" type="image/png" sizes="16x16" href={ favicon16 } />

      {/* General tags */ }
      <meta name="description" content={ description } />
      <meta name="image" content={ image } />

      {/* Schema.org tags */ }
      <script type="application/ld+json">
        { JSON.stringify(schemaOrgJSONLD) }
      </script>

      {/* OpenGraph tags */ }
      <meta property="og:url" content={ postSEO ? postURL : blogURL } />
      { postSEO ? <meta property="og:type" content="article" /> : null }
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:image" content={ image } />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="fb:app_id" content={ config.siteFBAppID ? config.siteFBAppID : "" } />

      {/* Twitter Card tags */ }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={ config.userTwitter ? config.userTwitter : "" } />
      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content={ description } />
      <meta name="twitter:image" content={ twShareImage } />
    </Helmet>
  );
};
