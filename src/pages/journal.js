import React from "react";
import get from "lodash/get";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../layouts/layout";
import LatestJournalItems from "../components/LatestJournalItems";

class Journal extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={ this.props.location }>
        <JournalWrapper className="container">
          <Intro>
          <h1>My Journal</h1>
          <p>Here I’ll post my thoughts and experiments on art, design and development.</p>
          {/*Filter by:*/}
          {/*<ul>*/}
            {/*<li>Art</li>*/}
            {/*<li>Code</li>*/}
            {/*<li>Other stuff</li>*/}
          {/*</ul>*/}
          </Intro>
          <LatestJournalItems journal={items} />
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
      </Layout>
    );
  }
}

const Intro = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  
  h1 {
    font-size: 30px;
    padding-bottom: 1rem;
  }
  
  p {
    font-size: 55px;
    line-height: 1.2;
    font-weight: bold;
  }
  
  a {
    font-size: 60px;
    text-decoration: line-through;
    font-weight: bold;
    opacity: 0.3;
    cursor: pointer;
  }
  
  .is-active {
    opacity: 1;
    text-decoration: underline;
  }
`;

const JournalWrapper = styled.div`
  //padding-top: 15vh;
`;

const JournalList = styled.div`
  border: 1px solid ${ props => props.theme.main };
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const JournalItem = styled(Link)`
  width: 25%;
  height: 280px;
  border-right: 1px solid ${ props => props.theme.main };
  text-align: left;
  flex-direction: column;
  position: relative;
  padding: 30px 30px 40px;
  
  h3 {
    font-size: 20px;
    padding-bottom: 0.75rem;
  }
  
  p {
    font-size: 16px;
  }
  
  &:last-of-type {
    border: 0;
  }
`;

const JournalDate = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  padding-bottom: 0.5rem;
  display: block;
`;

const JournalIndex = styled.span`
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${ props => props.theme.main };
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
  text-align: right;
  display: block;
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

