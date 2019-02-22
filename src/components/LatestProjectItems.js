import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { slugify } from "../../utils.js";
import Img from "gatsby-image";

const LatestProjectItems = ({ projects }) => {
  const getExcerpt = string => {
    return `${string
      .split(" ")
      .slice(0, 20)
      .join(" ")}...`;
  };

  return (
    <>
      {projects.map(({ node }, index) => (
        <Project key={index}>
          <ProjectIndex>0{index + 1}</ProjectIndex>
          <ProjectImage>
            <Img
              sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              alt={node.frontmatter.title}
            />
          </ProjectImage>
          <ProjectBody>
            <ProjectAreas>{node.frontmatter.category}</ProjectAreas>
            <ProjectName>{node.frontmatter.title}</ProjectName>
            <ProjectDescription>{node.excerpt}</ProjectDescription>
            <ProjectLink to={node.fields.slug}>
              See full project ->
            </ProjectLink>
          </ProjectBody>
        </Project>
      ))}
    </>
  );
};

const ProjectBody = styled.div`
  @media (min-width: ${props => props.theme.lg}) {
    width: 50%;
    padding-left: 2rem;
  }
`;

const ProjectIndex = styled.div`
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${props => props.theme.main};
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 1;
`;

const Project = styled.article`
  width: 100%;
  margin-top: 2rem;
  position: relative;

  @media (min-width: ${props => props.theme.lg}) {
      display: flex;
      margin-top: 3rem;
      
      &:nth-child(odd) {
        flex-direction: row-reverse;
        
        ${ProjectBody} {
          padding-left: 0;
          padding-right: 2rem;
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
    margin-bottom: 1.5rem;
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
    margin-bottom: 3rem;
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const ProjectImage = styled.div`
  border: 1px solid ${props => props.theme.main};
  margin-bottom: 1rem;
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

const ProjectDate = styled.span``;

const ProjectLink = styled(Link)`
  font-size: 14px;
  background: ${props => props.theme.main};
  color: white;
  height: 56px;
  line-height: 56px;
  display: block;
  text-decoration: none;
  letter-spacing: 1px;
  padding-left: 20px;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
  
  @media (min-width: ${props => props.theme.lg}) {
    font-size: 16px;
    margin-top: 2rem;
    width: 50%;
    position: relative;
    
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
