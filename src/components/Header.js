import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <HeaderNav>
        <h1>
          <Link to={'/'}>Giu Magnani</Link>
        </h1>
        <Link to={'/about'}>About | </Link>
        <Link to={'/work'}>Work | </Link>
        <Link to={'/journal'}>Journal | </Link>
        <Link to={'/shop'}>Shop | </Link>
        <Link to={'/contact'}>Contact </Link>
        <div>
          <button>EN</button>
          <button>ES</button>
          <button>IT</button>
        </div>
      </HeaderNav>
    );
  }
}

const HeaderNav = styled.nav`
  height: 60px;
  background-color: #2222ff;
  color: white;
`;

export default Header;
