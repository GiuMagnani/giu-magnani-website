import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { FormattedMessage } from "react-intl";

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <div className="container">
          <Logo to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 39 40">
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
          </Logo>
          <FooterEmailLink>
            <a href="mailto:hello@giumagnani.com">hello@giumagnani.com</a>
          </FooterEmailLink>
          <FooterSocialLinks />
          <FooterCopyright>
            <span>
              <FormattedMessage id="footer.copyright" />
            </span>
          </FooterCopyright>
        </div>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.main};
  color: white;
  overflow: hidden;
  //padding: 30px 0 20px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  a {
    color: white;
  }

  @media (min-width: ${props => props.theme.lg}) {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;

    .container {
      flex-direction: row;
      border-style: solid;
      border-color: white;
      border-width: 0 1px;
    }
  }
`;

const Logo = styled.div`
  height: 38px;
  width: 25px;

  svg {
    height: 25px;
    position: relative;
    top: 6px;
  }

  @media (min-width: ${props => props.theme.lg}) {
    border-right: 1px solid white;
    width: calc(25px + 1rem);
  }
`;

const FooterEmailLink = styled.div`
  margin-bottom: 1rem;

  a {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (min-width: ${props => props.theme.lg}) {
    margin-bottom: 0;

    a {
      font-size: 13px;
      letter-spacing: 3px;
    }
  }
`;

const FooterCopyright = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 1rem 0;

  @media (min-width: ${props => props.theme.lg}) {
    margin: 0;
    font-size: 10px;
  }
`;

const FooterSocialLinks = styled(SocialLinks)`
  margin-bottom: 0;

  ul {
    margin-top: -1px;
  }

  @media (min-width: ${props => props.theme.lg}) {
    margin-bottom: 0;
  }
`;

export default Footer;
