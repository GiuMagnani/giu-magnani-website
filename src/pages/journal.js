import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import styled from 'styled-components';

class Journal extends React.Component {
  render() {
    const items = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <h1>My Journal</h1>
        <p>Here I’ll post my design, development and drawing explorations and processes. Totally experimental stuff.</p>
        Filter by:
        <ul>
          <li>Art</li>
          <li>Code</li>
          <li>Other stuff</li>
        </ul>
        <JournalContainer className="container">
          {items.map((item, index) => (
            <JournalItem key={index} to={item.node.fields.slug}>
              <JournalIndex>{index}</JournalIndex>
              <h5>{item.node.frontmatter.date}</h5>
              <h3>{item.node.frontmatter.title}</h3>
              <p>{item.node.excerpt}</p>
            </JournalItem>
          ))}
        </JournalContainer>
      </div>
    );
  }
}

const JournalContainer = styled.div`
  border: 1px solid #2222ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0;
  padding-right: 0;
`;

const JournalItem = styled(Link)`
  width: 25%;
  height: 250px;
  border-right: 1px solid #2222ff;
  text-align: left;
  flex-direction: column;
  color: #2222ff;
`;

const JournalIndex = styled.span`
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
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
            tags
            featuredImage {
              childImageSharp {
                sizes(quality: 90, maxWidth: 1240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

