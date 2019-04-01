import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import LatestJournalItems from "../components/LatestJournalItems";
import { FormattedMessage } from "react-intl";
import { PageIntro, PageWrapper } from "../style/PageStyles";

const Journal = ({ data }) => {
  // const items = data.allMarkdownRemark.edges;
  return (
    <PageWrapper>
      <PageIntro>
        <div className="container">
          <FormattedMessage id="sketchbook.heading1" tagName="h1" />
          <FormattedMessage id="sketchbook.heading2" tagName="h2" />
        </div>
      </PageIntro>
      <JournalListWrapper>
        <div className="container">
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

// export const pageQuery = graphql`
//   query JournalQuery($locale: String!) {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: ASC }
//       filter: {
//         fileAbsolutePath: { regex: "/journal/" }
//         fields: { langKey: { eq: $locale } }
//       }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY" , locale: $locale )
//             title
//           }
//         }
//       }
//     }
//   }
// `;

export default Journal;
