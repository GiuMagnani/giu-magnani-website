import styled from "styled-components";

const PageIntro = styled.header`
  border-bottom: 1px solid ${props => props.theme.main};
  min-height: 55vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  @media (min-width: ${props => props.theme.lg}) {
    padding-top: 60px;
  }

  h1 {
    font-size: 30px;
    padding-bottom: 1rem;
  }

  h2,
  p {
    font-size: 55px;
    line-height: 1.1;
    font-weight: bold;
  }
  
  h3 {
    margin: 1rem 0;
    font-size: 23px;
    max-width: 70%;
    line-height: 1.1;
    font-weight: normal;
  }
`;

const PageWrapper = styled.div`
  padding-bottom: 4rem;
`;

export { PageIntro, PageWrapper };
