import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const CV = () => {
  const [isNonProfit, setNonProfit] = useState(false);

  return (
    <>
      <Intro>
        <div className="container">
          <h1><FormattedMessage id="cv.heading" /></h1>
        </div>
      </Intro>
      <div className="container">
        Download my CV:
        {/*<a></a>*/}
      </div>
    </>
  );
};

const Intro = styled.header`
  padding-top: 60px;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.main};

  h1 {
    font-size: 60px;
    line-height: 1.2;
    font-weight: bold;
  }
`;

export default CV;
