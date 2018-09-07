import React from 'react';
import Link from 'gatsby-link';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={'/'}>Giu Magnani 2018</Link>
        </h1>
        <Link to={'/work'}>GitHub</Link>
        <Link to={'/journal'}>Behance</Link>
        <Link to={'/about'}>LinkedIn</Link>
        <Link to={'/shop'}>Twitter</Link>
        <Link to={'/contact'}>Pinterest</Link>
      </div>
    );
  }
}

export default Footer;
