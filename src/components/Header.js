import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <HeaderNav>
        <NavLogo to={'/'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="39"
            height="40"
          >
            <defs>
              <path id="a" d="M38.9264.0746v39.3698H.0001V.0746z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                fill="#FFF"
                d="M11.1182 20.2416c-1.5347 0-2.7795-1.259-2.7795-2.8112s1.2448-2.811 2.7795-2.811c1.5347 0 2.7794 1.2588 2.7794 2.811 0 1.5523-1.2447 2.8112-2.7794 2.8112zm22.2355-4.2167c0-2.3289-1.8665-4.2167-4.1692-4.2167-1.0678 0-2.0417.4067-2.7794 1.0745-.7377-.6678-1.7116-1.0745-2.7794-1.0745-1.0679 0-2.0418.4067-2.7795 1.0745-.7377-.6678-1.7116-1.0745-2.7794-1.0745-1.2744 0-2.4147.579-3.1793 1.49-.9904-.925-2.3148-1.49-3.7693-1.49-3.07 0-5.5589 2.5172-5.5589 5.6222 0 3.105 2.4889 5.6223 5.5589 5.6223a5.487 5.487 0 0 0 2.7794-.7523v2.1578c0 1.5522-1.2447 2.8111-2.7794 2.8111s-2.7795-1.2589-2.7795-2.811H5.5593c0 3.105 2.4889 5.6221 5.5589 5.6221 3.0656 0 5.5506-2.5094 5.5589-5.6077v-8.4478c0-.7761.6223-1.4056 1.3897-1.4056.7673 0 1.3897.6295 1.3897 1.4056v8.4478h2.7794v-8.4478c0-.7761.6224-1.4056 1.3898-1.4056.7673 0 1.3897.6295 1.3897 1.4056v8.4478h2.7794v-8.4478c0-.7761.6224-1.4056 1.3897-1.4056.768 0 1.3897.6295 1.3897 1.4056v8.4478h2.7795v-8.4478z"
              />
              <g transform="translate(0 .481)">
                <mask id="b" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <path
                  fill="#FFF"
                  d="M19.4633.0746C8.7312.0746.0001 8.905.0001 19.7596c0 10.8544 8.731 19.685 19.4632 19.685 10.7321 0 19.4632-8.8306 19.4632-19.685 0-10.8545-8.731-19.685-19.4632-19.685m0 2.825c9.2062 0 16.6695 7.5483 16.6695 16.86 0 9.311-7.4633 16.8594-16.6695 16.8594-9.2067 0-16.67-7.5483-16.67-16.8594 0-9.3117 7.4633-16.86 16.67-16.86"
                  mask="url(#b)"
                />
              </g>
            </g>
          </svg>
          <span>Giu Magnani Website</span>
        </NavLogo>
        <NavLinks>
          <Link to={'/about'}>About</Link>
          <Link to={'/work'}>Projects</Link>
          <Link to={'/journal'}>Journal</Link>
          {/*<Link to={'/shop'}>Shop</Link>*/}
          <Link to={'/contact'}>Contact</Link>
        </NavLinks>
        {/*<NavLanguages>*/}
          {/*<button>EN</button>*/}
          {/*<button>ES</button>*/}
          {/*<button>IT</button>*/}
        {/*</NavLanguages>*/}
      </HeaderNav>
    );
  }
}

const HeaderNav = styled.nav`
  height: 60px;
  background-color: ${ props => props.theme.main };
  color: white;
  display: flex;
  align-items: center;
  margin-top: -20px;
`;

const NavLogo = styled(Link)`
  padding-left: 30px;
  padding-top: 7px;
  
  span {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
    left: -9999px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  
  a {
  color: white;
  text-decoration: none;
  padding-right: 30px;
  }
`;

const NavLanguages = styled.div`
  padding: 0 20px;
  flex-grow: 1;
  text-align: right;

  button {
    background: none;
    border: 0;
    color: white;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

export default Header;
