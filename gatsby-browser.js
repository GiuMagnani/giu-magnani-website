import React from "react";
import Layout from "./src/layouts/layout";
import { IntlProvider, addLocaleData } from "react-intl";
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";
import { messages, defaultLocale } from "./src/i18n/i18n";
addLocaleData([...esData, ...enData]);

const transitionDelay = 200;

console.log(
  `%cWelcome to GiuMagnani.com version 0.1!`,
  `font-size:10px;background:#ffffff;color:#2222ff;padding: 2px 5px;`
);

console.log(
  `%cYou can see the code in my GitHub repo:`,
  `font-size:10px;background:#ffffff;color:#2222ff;padding: 2px 5px;`
);

console.log(
  `https://github.com/GiuMagnani/giu-magnani-website`
);

export const wrapPageElement = ({ props, element }) => {
  const locale = props.pageContext.locale;
  const pageLocale = locale || defaultLocale;

  return (
    <IntlProvider locale={locale} messages={messages[pageLocale]} textComponent={ React.Fragment }>
      <Layout locale={locale} {...props}>
        {element}
      </Layout>
    </IntlProvider>
  );
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};
