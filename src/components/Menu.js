import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import posed from "react-pose";

const sidebarProps = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const MenuGroup = posed.nav({
  open: { x: "0%", staggerChildren: 100 },
  closed: { x: "-100%" },
});

const Item = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 },
});

const Menu = ({ isMenuOpen, setMenuVisibility }) => (
  <MenuWrapper pose={isMenuOpen ? "open" : "closed"}>
    <button onClick={() => setMenuVisibility(!isMenuOpen)}>MENU</button>
    <MenuGroup pose={isMenuOpen ? "open" : "closed"}>
      <Item key="0">A</Item>
      <Item key="1">B</Item>
      <Item key="2">C</Item>
    </MenuGroup>
  </MenuWrapper>
);

const MenuWrapper = styled(posed.div(sidebarProps))`
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

export default Menu;
