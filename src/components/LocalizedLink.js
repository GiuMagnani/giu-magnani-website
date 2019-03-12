import React from "react";
import { Link } from "gatsby";
import { injectIntl } from "react-intl";

import languages from "../i18n/languages";

const LocalizedLink = ({ to, intl: { locale }, ...props }) => {
  const path = languages[locale].default ? to : `/${locale}${to}`;

  return <Link {...props} to={path} />;
};

export default injectIntl(LocalizedLink);
