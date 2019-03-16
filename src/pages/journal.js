import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import LatestJournalItems from "../components/LatestJournalItems";
import { FormattedMessage } from "react-intl";
import { PageIntro, PageWrapper } from "../style/PageStyles";
// import posed from "react-pose";

// const Section = posed.section({
//   enter: { y: 0, opacity: 1 },
//   exit: { y: 50, opacity: 0, delay: 300 },
// });

const Journal = ({ data }) => {
  const items = data.allMarkdownRemark.edges;
  return (
    <PageWrapper>
      <PageIntro>
        <div className="container">
          <FormattedMessage id="journal.heading1" tagName="h1" />
          <FormattedMessage id="journal.heading2" tagName="h2" />
        </div>
        {/*Filter by:*/}
        {/*<ul>*/}
        {/*<li>Art</li>*/}
        {/*<li>Code</li>*/}
        {/*<li>Other stuff</li>*/}
        {/*</ul>*/}
      </PageIntro>
      <JournalListWrapper>
        <div className="container">
          <JournalList journal={items} />
        </div>
      </JournalListWrapper>
    </PageWrapper>
  );
};

const JournalListWrapper = styled.section`
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

export const pageQuery = graphql`
  query JournalQuery($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        fileAbsolutePath: { regex: "/journal/" }
        fields: { langKey: { eq: $locale } }
      }
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

export default Journal;
