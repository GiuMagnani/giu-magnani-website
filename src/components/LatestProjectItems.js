import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import posed, { PoseGroup } from "react-pose";
const ProjectProps = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const LatestProjectItems = ({ projects, className }) => {
  return (
    <PoseGroup>
      {projects.map(({ node }, index) => (
        <Project key={index} className={className}>
          {/*<ProjectIndex>{`${(index + 1).toString().length === 1 ? '0' + (index + 1) : index + 1}`}</ProjectIndex>*/}
          <ProjectImage>
            <Img
              sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              alt={node.frontmatter.title}
            />
          </ProjectImage>
          <ProjectBody>
            <ProjectDate>{node.frontmatter.date}</ProjectDate>
            <ProjectBodyInner>
              <ProjectAreas>{node.frontmatter.categories}</ProjectAreas>
              <ProjectName>{node.frontmatter.title}</ProjectName>
              <ProjectDescription>{node.excerpt}</ProjectDescription>
            </ProjectBodyInner>
            <ProjectLink to={node.fields.slug}>See full project →</ProjectLink>
          </ProjectBody>
        </Project>
      ))}
    </PoseGroup>
  );
};

const ProjectBody = styled.div`
  border: 1px solid ${props => props.theme.main};
  border-width: 0 1px;

  @media (min-width: ${props => props.theme.lg}) {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid ${props => props.theme.main};
    border-left-width: 0;
    padding: 0;
    //padding-left: 2rem;
  }
`;

const ProjectBodyInner = styled.div`
  padding: 1rem;

  @media (min-width: ${props => props.theme.lg}) {
    padding: 2rem;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const ProjectIndex = styled.div`
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${props => props.theme.main};
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 8px;
  left: 10px;
  z-index: 1;
`;

const Project = styled(posed.article(ProjectProps))`
  width: 100%;
  //margin-top: 2rem;
  margin-top: -1px;
  position: relative;

  @media (min-width: ${props => props.theme.lg}) {
    display: flex;
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 1rem;
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;

      ${ProjectBody} {
        padding-left: 0;
        border-right: 0;
        border-left-width: 1px;
        //padding-right: 2rem;
      }

      ${ProjectIndex} {
        right: 10px;
        left: auto;
      }
    }
  }
`;

const ProjectName = styled.h2`
  font-size: 20px;
  margin-bottom: 0.5rem;

  @media (min-width: ${props => props.theme.lg}) {
    font-size: 32px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;

  @media (min-width: ${props => props.theme.lg}) {
    font-size: 18px;
    line-height: 1.3;
  }
`;

const ProjectAreas = styled.h3`
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;

  @media (min-width: ${props => props.theme.lg}) {
    margin-bottom: 1rem;
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const ProjectImage = styled.div`
  border: 1px solid ${props => props.theme.main};
  overflow: hidden;
  height: 300px;

  .gatsby-image-wrapper {
    height: 100%;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.lg}) {
    width: 50%;
    height: 390px;
  }
`;

const ProjectDate = styled.span`
  font-size: 12px;
  //font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
  width: 100%;
  display: block;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${props => props.theme.main};

  @media (min-width: ${props => props.theme.lg}) {
    //font-size: 12px;
  }
`;

const ProjectLink = styled(Link)`
  font-size: 14px;
  background: white;
  color: ${props => props.theme.main};
  height: 56px;
  line-height: 56px;
  display: block;
  text-decoration: none;
  letter-spacing: 1px;
  padding-left: 1rem;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid ${props => props.theme.main};
  border-width: 1px 0;
  
  &:hover {
    background: ${props => props.theme.main};
    color: white;
  }

  
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 16px;
    margin-top: 0;
    position: relative;
    border-width: 1px 0 0;
    
    // &::after {
    //   content: "";
    //   position: absolute;
    //   bottom: 50%;
    //   z-index: -1;
    //   right: 0;
    //   width: 100vw;
    //   height: 1px;
    //   background: ${props => props.theme.main};
    // }
  }
`;

export default LatestProjectItems;
