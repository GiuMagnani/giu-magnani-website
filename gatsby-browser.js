import React from "react";
import Layout from "./src/layouts/layout";

const transitionDelay = 200;

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
  // prevRouterProps,
  // pathname,
}) => {
  // console.log(props);
  // const shouldAnimate = () => {
  //   return (
  //     prevRouterProps.pathname.split("/").length === 1 &&
  //     pathname !== "/es" &&
  //     pathname !== "/it"
  //   );
  // };
  // pathname.split('/').length > 1

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
