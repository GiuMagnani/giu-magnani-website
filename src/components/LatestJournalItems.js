import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const LatestJournalItems = ({ posts }) => (
  <div className="container">
    <LatestPostsContainer>
      <LatestPostsHeading>Latest on my Journal</LatestPostsHeading>
      <LatestPosts>
        {posts.map(({ node }) => {
          return (
            <LatestPostsItem key={node.fields.slug} to={node.fields.slug}>
              <small>{node.frontmatter.date}</small>
              <h3>{node.frontmatter.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </LatestPostsItem>
          );
        })}
      </LatestPosts>
      <LatestPostsSeeMore>
        <Link to={"/journal"}>See my Journal</Link>
      </LatestPostsSeeMore>
    </LatestPostsContainer>
  </div>
);

const LatestPosts = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #2222ff;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const LatestPostsItem = styled(Link)`
  border: 0 solid #2222ff;
  border-bottom-width: 1px;
  width: 100%;
  min-height: 280px;
  text-decoration: none;
  padding: 30px 30px 40px;

  @media (min-width: 900px) {
    width: 25%;
    border: 0;
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

const LatestPostsHeading = styled.h2`
  font-size: 30px;
  padding: 10px 30px;
  margin: 1.5rem 0;
`;

const LatestPostsSeeMore = styled.div`
  margin-bottom: 80px;
  text-align: center;
  width: 100%;

  a {
    font-size: 14px;
    background: #2222ff;
    color: white;
    height: 40px;
    line-height: 38px;
    display: block;
    text-decoration: none;
    letter-spacing: 1px;
    padding-left: 20px;
    text-align: left;
    width: 100%;
  }

  @media (min-width: 600px) {
    a {
      width: calc(50% + 7px);
    }
  }

  @media (min-width: 900px) {
    a {
      width: calc(20% + 7px);
    }
  }
`;

const LatestPostsContainer = styled.div`
  margin-bottom: 100px;
`;

export default LatestJournalItems;