import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import posed from "react-pose";
import { FormattedMessage, injectIntl } from "react-intl";
import locales from "../i18n/locales";

const fullScreenMenuProps = {
  open: { opacity: 1, x: 0, transition: { duration: 350 } },
  closed: {  opacity: 0, x: "100%", transition: { duration: 350 } },
};

const MenuProps = {
  open: { opacity: 1, staggerChildren: 100 },
  closed: { opacity: 0 },
};

const Item = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 },
});

const Menu = ({ intl: { locale }, isMenuOpen, setMenuVisibility }) => {
  const getTo = to => {
    return locales[locale].default ? to : `/${locales[locale].locale}${to}`;
  };

  const getLocalizedPath = key => {
    if (key === locale) {
      // return same path
      return location.pathname;
    } else {
      if (locales[key].default === true) {
        // default language, return pathname without locale
        return `/${location.pathname.split(`/${locale}/`)[1]}`;
      } else if (location.pathname === `/${locale}/`) {
        // return link pathname removing current locale and adding new one
        return `/${key}/`;
      } else {
        // return locale + pathname

        let link = locales[locale].default === true
          ? `/${key}${location.pathname}`
          : location.pathname.replace(`/${locale}/`, `/${key}/`);
        return link;
      }
    }
  };

  return (
    <MenuWrapper pose={isMenuOpen ? "open" : "closed"}>
      <MenuButton onClick={() => setMenuVisibility(!isMenuOpen)}>
        MENU
      </MenuButton>
      <MenuGroup pose={isMenuOpen ? "open" : "closed"}>
        <Item key="0">
          <Link to={getTo("/about")}>
            <FormattedMessage id="menu.about" />
          </Link>
        </Item>
        <Item key="1">
          <Link to={getTo("/work")}>
            <FormattedMessage id="menu.work" />
          </Link>
        </Item>
        <Item key="2">
          <Link to={getTo("/journal")}>
            <FormattedMessage id="menu.journal" />
          </Link>
        </Item>
        {/*<Item key="3">*/}
          {/*<Link to={getTo("/shop")}>*/}
            {/*<FormattedMessage id="menu.shop" />*/}
          {/*</Link>*/}
        {/*</Item>*/}
        <Item key="4">
          <Link to={getTo("/contact")}>
            <FormattedMessage id="menu.contact" />
          </Link>
        </Item>
        <Item key="5">
          <NavLanguages>
            {Object.keys(locales).map(key => (
              <Link
                className={key === locale ? "is-active" : ""}
                key={locales[key].locale}
                to={getLocalizedPath(key)}
                state={{ stopTransition: false }}>
                {locales[key].locale}
              </Link>
            ))}
          </NavLanguages>
        </Item>
      </MenuGroup>
      {/* random featured work with link, maybe another thing... */}
    </MenuWrapper>
  );
};

const MenuWrapper = styled(posed.div(fullScreenMenuProps))`
  background: blue;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  color: white;
  padding-top: 10vh;
  opacity: 0;
  transform: translateX(100%);

  button {
    color: white;
  }
`;

const MenuGroup = styled(posed.nav(MenuProps))`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  /* align-content: space-between; */
  /* justify-content: space-between; */
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  opacity: 0;

  li {
    list-style-type: none;
    padding-bottom: 30px;

    a {
      color: white;
    }
  }

  @media (min-width: ${props => props.theme.sm}) {
    font-size: 50px;

    li {
      padding-bottom: 50px;
    }
  }
`;

const MenuButton = styled.button`
  position: absolute;
  right: 35px;
  top: 20px;
  z-index: 1;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  height: 20px;
  outline: 0;
`;

const NavLanguages = styled.div`
  flex-grow: 1;
  text-align: left;

  a {
    background: none;
    color: white;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 4px 7px;
    text-align: center;
    margin-right: 10px;
    //border: 1px solid white;
  }

  a.is-active {
    background: white;
    color: ${props => props.theme.main};
  }
`;

export default injectIntl(Menu);
