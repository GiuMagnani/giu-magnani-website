import React from "react";
import styled from "styled-components";
import IconList from "./IconList";

const Icon = ({ name, iconWidth, iconHeight, style, inButton }) => {
  return (
    <IconWrapper
      style={style}
      className={`icon-wrapper ${inButton ? "inButton" : ""}`}>
      {IconList[name] ? (
        <Svg
          viewBox={IconList[name].viewBox}
          role="img"
          aria-labelledby={`icon-${IconList[name].name}`}
          className="icon"
          iconHeight={iconHeight}>
          <title id={`icon-${IconList[name].name}`}>
            {IconList[name].name}
          </title>
          <path d={IconList[name].path} />
        </Svg>
      ) : (
        "?"
      )}
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  color: currentColor;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  &.inButton {
    margin: 0 0 0 1rem;
    line-height: 21px;
  }
`;

const Svg = styled.svg`
  fill: currentColor;
  width: 100%;
  height: ${props => (props.iconHeight ? props.iconHeight : "100%")};
`;

export { Icon };
