import React from "react";
import Layout from "./src/layouts/layout";
import { IntlProvider, addLocaleData } from "react-intl";
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";
import itData from "react-intl/locale-data/it";
import { messages, defaultLocale } from "./src/i18n/i18n";
addLocaleData([...esData, ...enData, ...itData]);

console.log(
  `%cWelcome to GiuMagnani.com version 1.0!`,
  `font-size:10px;background:#ffffff;color:#2222ff;padding: 2px 5px;`
);

export const wrapPageElement = ({ props, element }) => {
  console.log(props.pageContext);
  const locale = props.pageContext.locale;
  const pageLocale = locale || defaultLocale;

  return (
    <IntlProvider
      locale={locale}
      messages={messages[pageLocale]}
      textComponent={React.Fragment}>
      <Layout locale={locale} {...props}>
        {element}
      </Layout>
    </IntlProvider>
  );
};

// https://github.com/gaearon/overreacted.io/blob/master/gatsby-browser.js
//
// Forked Gatsby default to not remount on switches between
// translated versions of the same page.
export function replaceComponentRenderer({ props, loader }) {
  return React.createElement(props.pageResources.component, {
    ...props,

    // Gatsby default is:
    // key: props.pageResources.page.path,

    // But we're happy with letting React do its thing.
  });
}

function countSlashes(url) {
  let n = 0;
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "/") {
      n++;
    }
  }
  return n;
}

function shouldPreserveScrollBetween(oldPathname, newPathname) {
  // Don't reset scroll when switching within a post.
  // TODO: this is kinda gross and flaky.
  if (
    // /lang/stuff/ -> /stuff/
    (oldPathname.indexOf(newPathname) > 0 &&
      countSlashes(oldPathname) === 3 &&
      countSlashes(newPathname) === 2) ||
    // /stuff/ -> /lang/stuff/
    (newPathname.indexOf(oldPathname) > 0 &&
      countSlashes(oldPathname) === 2 &&
      countSlashes(newPathname) === 3) ||
    // /lang/stuff/ -> /other-lang/stuff/
    (countSlashes(oldPathname) === 3 &&
      countSlashes(newPathname) === 3 &&
      // /stuff/ === /stuff/
      oldPathname.substr(oldPathname.substr(1).indexOf("/") + 1) ===
        newPathname.substr(newPathname.substr(1).indexOf("/") + 1))
  ) {
    return true;
  }
  return false;
}

// Forked to not update scroll on transitions between translations.
// Sadness. I have to override a *plugin* because it already has its own logic,
// and Gatsby just ignores mine, lol. TODO: fork this plugin?
let oldShouldUpdateScroll = require("gatsby-remark-autolink-headers/gatsby-browser")
  .shouldUpdateScroll;
if (typeof oldShouldUpdateScroll !== "function") {
  throw new Error("No monkeypatching today :-(");
}
require("gatsby-remark-autolink-headers/gatsby-browser").shouldUpdateScroll = function shouldUpdateScroll({
  prevRouterProps,
  routerProps,
}) {
  const { pathname, hash } = routerProps.location;
  if (prevRouterProps) {
    const {
      location: { pathname: oldPathname },
    } = prevRouterProps;
    if (shouldPreserveScrollBetween(oldPathname, pathname)) {
      return false;
    }
  } else {
    // Always forget scroll for first load.
    return [0, 0];
  }
  // Call it manually so we have a chance to preserve scroll the line before.
  // TODO: maybe inline whatever it does.
  return oldShouldUpdateScroll.apply(this, arguments);
};
