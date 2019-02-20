import React from "react";
import get from "lodash/get";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../layouts/layout";

class Journal extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={ this.props.location }>
        <JournalWrapper className="container">
          <h1>My Journal</h1>
          <p>Here I’ll post my design, development and drawing explorations and processes. Totally experimental
            stuff.</p>
          Filter by:
          <ul>
            <li>Art</li>
            <li>Code</li>
            <li>Other stuff</li>
          </ul>
          <JournalList>
            { items.map((item, index) => (
              <JournalItem key={ index } to={ item.node.fields.slug }>
                <JournalIndex>0{ index + 1 }</JournalIndex>
                <JournalDate>{ item.node.frontmatter.date }</JournalDate>
                <h3>{ item.node.frontmatter.title }</h3>
                <p>{ item.node.excerpt }</p>
              </JournalItem>
            )) }
          </JournalList>
        </JournalWrapper>
      </Layout>
    );
  }
}

const JournalWrapper = styled.div`
  padding-top: 15vh;
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/journal/" } }) {
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

