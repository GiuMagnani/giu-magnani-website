import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import posed from "react-pose";
import { FormattedMessage, injectIntl } from "react-intl";
import languages from "../i18n/languages";

const fullScreenMenuProps = {
  open: { x: 0, transition: { duration: 350 } },
  closed: { x: "100%", transition: { duration: 350 } },
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
    return languages[locale].default ? to : `/${languages[locale].locale}${to}`;
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

  button {
    color: white;
  }
`;

const MenuGroup = styled(posed.nav(MenuProps))`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 1rem;

  li {
    list-style-type: none;

    a {
      color: white;
    }
  }
`;

const MenuButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
`;

export default injectIntl(Menu);
