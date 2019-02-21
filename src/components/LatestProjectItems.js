import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { slugify } from "../../utils.js";

const LatestProjectItems = ({ projects }) => {
  const getExcerpt = string => {
    return `${string
      .split(" ")
      .slice(0, 20)
      .join(" ")}...`;
  };

  return (
    <ProjectWrapper>
      <div className="container">
        <h2>UX/UI and Front-End Development Projects</h2>
        {projects.map(({ node }, index) => (
          <Project key={index}>
            <ProjectIndex>0{index + 1}</ProjectIndex>
            <ProjectImage>
              <img src={node.covers.size_original} alt={node.name} />
            </ProjectImage>
            <ProjectBody>
              <ProjectAreas>{node.areas.join(" | ")}</ProjectAreas>
              <ProjectName>{node.name}</ProjectName>
              <ProjectDescription>
                {getExcerpt(node.description)}
              </ProjectDescription>
              {/*<ProjectDate>{new Date(node.published).toString()}</ProjectDate>*/}
              <ProjectLink to={slugify(node.name)}>
                See full project ->
              </ProjectLink>
            </ProjectBody>
          </Project>
        ))}
      </div>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div``;

const Project = styled.article`
  width: 100%;
  position: relative;
  margin-top: 2rem;
  //border-bottom: 1px solid ${props => props.theme.main};

  @media (min-width: ${props => props.theme.lg}) {
      height: 300px;
  }

  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 1px;
  //   background: ${props => props.theme.main};
  // }
`;

const ProjectBody = styled.div``;

const ProjectName = styled.h2`
  font-size: 20px;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

const ProjectAreas = styled.h3`
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.lg}) {
    margin-bottom: 4rem;
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const ProjectImage = styled.div`
  border: 1px solid ${props => props.theme.main};
  margin-bottom: 1rem;

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

const ProjectDate = styled.span``;

const ProjectLink = styled(Link)`
  font-size: 14px;
  background: ${props => props.theme.main};
  color: white;
  height: 40px;
  line-height: 38px;
  display: block;
  text-decoration: none;
  letter-spacing: 1px;
  padding-left: 20px;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
`;

const ProjectIndex = styled.div`
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${props => props.theme.main};
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: -20px;
  left: -10px;
`;

export default LatestProjectItems;
