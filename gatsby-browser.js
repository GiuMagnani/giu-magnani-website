import React from "react";
import Layout from "./src/layouts/layout";
import { IntlProvider, addLocaleData } from "react-intl";
import enData from "react-intl/locale-data/en";
import esData from "react-intl/locale-data/es";
import { messages, defaultLocale } from "./src/i18n/i18n";
addLocaleData([...esData, ...enData]);

const transitionDelay = 200;

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
