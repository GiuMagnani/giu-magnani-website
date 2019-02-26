import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const LatestJournalItems = ({ journal }) => (
  <LatestPostsContainer>
    <LatestPosts>
      {journal.map(({ node }, index) => {
        return (
          <LatestPostsItem key={node.fields.slug} to={node.fields.slug}>
            <JournalIndex>{`${(index + 1).toString().length === 1 ? '0' + (index + 1) : index + 1}`}</JournalIndex>
            <small>{node.frontmatter.date}</small>
            <h3>{node.frontmatter.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </LatestPostsItem>
        );
      })}
    </LatestPosts>

  </LatestPostsContainer>
);

const LatestPosts = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${ props => props.theme.main };
  display: flex;
  flex-direction: column;

  @media (min-width: ${ props => props.theme.lg }) {
    flex-direction: row;
  }
`;

const LatestPostsItem = styled(Link)`
  border: 0 solid ${ props => props.theme.main };
  border-bottom-width: 1px;
  width: 100%;
  min-height: 280px;
  text-decoration: none;
  padding: 30px 30px 40px;
  position: relative;

  @media (min-width: ${ props => props.theme.lg }) {
    width: 25%;
    border-bottom-width: 0;
    border-right-width: 1px;
  }

  &&:last-of-type {
    border: 0;
  }

  small {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: block;
    padding-bottom: 4px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    line-height: 1.3;
  }

  p {
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    line-height: 1.4;
    padding-bottom: 5px;
  }
`;

const JournalIndex = styled.span`
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${ props => props.theme.main };
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 10px;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
  text-align: right;
  display: block;
`;

const LatestPostsContainer = styled.div`
`;

export default LatestJournalItems;
