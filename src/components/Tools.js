import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Icon } from "./Icons/Icons";

const ToolsItem = ({ name, index }) => (
  <ToolsItemWrapper index={index}>
    {name ? <Icon name={name} iconHeight="30px" /> : <span />}
    <ToolName>
      <h4>{name}</h4>
    </ToolName>
  </ToolsItemWrapper>
);

const designTools = [
  "Pencil",
  "Sketchbook",
  "Graphic Tablet",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe Xd",
  "Sketch",
  "InVision",
  "Blender",
  "",
];

const developmentTools = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Vue.js",
  "Gatsby",
  "GraphQL",
  "WordPress",
  "Git",
];

const Tools = () => {
  return (
    <ToolsWrapper>
      <ToolsHeader>Tools</ToolsHeader>
      <ToolsRow className="container">
        <ToolsColumn>
          <h3>Design</h3>
          <ToolsContainer>
            {designTools.map((item, index) => (
              <ToolsItem key={"design" + index} name={item} index={index} />
            ))}
          </ToolsContainer>
        </ToolsColumn>
        <ToolsColumn>
          <h3>Development</h3>
          <ToolsContainer>
            {developmentTools.map((item, index) => (
              <ToolsItem key={"dev" + index} name={item} index={index} />
            ))}
          </ToolsContainer>
        </ToolsColumn>
      </ToolsRow>
    </ToolsWrapper>
  );
};

const ToolsWrapper = styled.div`
  border: 1px solid ${props => props.theme.main};
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const ToolsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${props => props.theme.main};
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const ToolsItemWrapper = styled.li`
  border-right: 1px solid ${props => props.theme.main};
  border-bottom: 1px solid ${props => props.theme.main};
  margin-bottom: -1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 20%;
  height: 90px;
  
  // &:last-child {
  //   border-right-width: ${props => `${props.length === 10 ? 0 : "1px"}`};
  // }
  &:nth-child(5n) {
    border-right-width: 0;
  }
`;

const ToolName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h4 {
    margin: 0.75rem 0 0;
    font-weight: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
  }
`;

const ToolsHeader = styled.div`
  border-bottom: 1px solid ${props => props.theme.main};
  padding-bottom: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const ToolsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: ${props => props.theme.lg}) {
  }
`;

const ToolsColumn = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.lg}) {
    width: calc(50% - 0.5rem);
  }
`;

export default Tools;
