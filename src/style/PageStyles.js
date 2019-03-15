import styled from "styled-components";

const PageIntro = styled.header`
  border-bottom: 1px solid ${props => props.theme.main};
  min-height: 55vh;
  display: flex;
  align-items: center;
  flex-direction: column;
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
    line-height: 1.2;
    font-weight: bold;
  }

  .container {
    border-top: 0;
    min-height: 50vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PageWrapper = styled.div`
  padding-bottom: 4rem;
`;

export { PageIntro, PageWrapper };
