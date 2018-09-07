import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Header;
