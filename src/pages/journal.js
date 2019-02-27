import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import LatestJournalItems from "../components/LatestJournalItems";
// import posed from "react-pose";

// const Section = posed.section({
//   enter: { y: 0, opacity: 1 },
//   exit: { y: 50, opacity: 0, delay: 300 },
// });

const Journal = ({ data }) => {
  const items = data.allMarkdownRemark.edges;
  return (
    <>
      <JournalWrapper>
        <Intro>
          <div className="container">
            <h1>My Journal</h1>
            <p>
              Here I’ll post my thoughts and experiments on art, design and
              development.
            </p>
          </div>
          {/*Filter by:*/}
          {/*<ul>*/}
          {/*<li>Art</li>*/}
          {/*<li>Code</li>*/}
          {/*<li>Other stuff</li>*/}
          {/*</ul>*/}
        </Intro>
        <JournalListWrapper>
          <div className="container">
            <JournalList journal={items} />
          </div>
        </JournalListWrapper>
        {/*<JournalList>*/}
        {/*{ items.map(({node}, index) => (*/}
        {/*<JournalItem key={ index } to={node.fields.slug}>*/}
        {/*<JournalIndex>0{ index + 1 }</JournalIndex>*/}
        {/*<JournalDate>{ node.frontmatter.date }</JournalDate>*/}
        {/*<h3>{ node.frontmatter.title }</h3>*/}
        {/*<p>{ node.excerpt }</p>*/}
        {/*</JournalItem>*/}
        {/*)) }*/}
        {/*</JournalList>*/}
      </JournalWrapper>
    </>
  );
};

const Intro = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${props => props.theme.main};

  h1 {
    font-size: 30px;
    padding-bottom: 1rem;
  }

  p {
    font-size: 55px;
    line-height: 1.2;
    font-weight: bold;
  }
`;

const JournalWrapper = styled.div`
`;

const JournalListWrapper = styled.div`
  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.main};

  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    padding: 1rem;
  }
`;

const JournalList = styled(LatestJournalItems)`
  > div {
    margin-top: 0;
  }
`;

export default Journal;

export const pageQuery = graphql`
  query JournalQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { fileAbsolutePath: { regex: "/journal/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
