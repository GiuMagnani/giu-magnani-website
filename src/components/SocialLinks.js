import React from "react";
import styled from "styled-components";
import { Icon } from "./Icons/Icons";

const links = {
  behance: "https://www.behance.net/giumagnani",
  github: "https://www.github.com/giumagnani",
  dribbble: "https://www.dribbble.com/GiuMagnani",
  pinterest: "https://www.pinterest.com/giumagnani",
  linkedin: "https://www.linkedin.com/in/giumagnani",
  twitter: "https://www.twitter.com/_GiuMagnani",
};

const SocialLinks = ({ isBlue, className }) => {
  return (
    <SocialLinksWrapper is-blue={isBlue} className={className}>
      <ul>
        {Object.keys(links).map(key => (
          <li key={key}>
            <a href={links[key]} rel="noopener" target="_blank">
              <Icon name={key} />
            </a>
          </li>
        ))}
      </ul>
    </SocialLinksWrapper>
  );
};

const SocialLinksWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    //border: 0 solid white;
    //border-width: 1px;
  }

  li {
    height: 36px;
    width: 36px;
    text-align: center;
    display: block;
    border: 1px solid
      ${props => (props["is-blue"] ? props.theme.main : "white")};
    line-height: 40px;
    margin-right: -1px;
    margin-bottom: -1px;

    a {
      height: 100%;
      width: 100%;
      display: block;
      transition: background-color 200ms ease-out, color 200ms ease-out;
    }

    &:hover a {
      background-color: ${props =>
        props["is-blue"] ? props.theme.main : "white"};
      color: ${props => (props["is-blue"] ? "white" : props.theme.main)};
    }
  }

  svg {
    fill: currentColor;
    height: 16px;
    width: 16px;
  }

  @media (min-width: ${props => props.theme.md}) {
    ul {
      justify-content: flex-start;
    }

    li {
      height: 40px;
      width: 40px;
      line-height: 44px;
    }
  }
`;

export default SocialLinks;
