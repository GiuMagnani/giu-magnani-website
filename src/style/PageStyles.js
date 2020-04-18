import styled from "styled-components";

const PageIntro = styled.header`
  border-bottom: 1px solid ${props => props.theme.main};
  min-height: 55vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  h1 {
    font-size: 20px;
    padding-bottom: 1rem;
  }

  h2,
  p {
    font-size: 30px;
    line-height: 1.1;
    font-weight: bold;
  }

  h3 {
    margin: 1rem 0;
    font-size: 16px;
    max-width: 70%;
    line-height: 1.2;
    font-weight: normal;
  }

  @media (min-width: ${props => props.theme.md}) {
    h1 {
      font-size: 25px;
    }

    h2,
    p {
      font-size: 45px;
    }

    h3 {
      font-size: 27px;
    }
  }

  @media (min-width: ${props => props.theme.lg}) {
    padding-top: 60px;

    h1 {
      font-size: 30px;
    }

    h2,
    p {
      font-size: 55px;
    }

    h3 {
      font-size: 23px;
    }
  }
`;

const PageWrapper = styled.div`
  padding-bottom: 4rem;
  overflow: hidden;
`;

const Content = styled.div`
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    max-width: 700px;
    margin: 2rem auto;
  }

  h2 {
    line-height: 1.3;
    margin-bottom: 2rem;
  }

  em {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-style: italic;

    a {
      font-size: 14px;
    }
  }

  p {
    margin: 1rem auto;
    font-size: 21px;
  }

  a {
    font-size: 21px;
    font-weight: bold;
    text-decoration: underline;
  }

  .gatsby-resp-image-wrapper {
    margin: 3rem auto;
  }

  .caption {
    display: block;
    font-size: 16px;
    margin-bottom: 3rem;
    text-align: center;
  }

  .gatsby-resp-image-wrapper + .caption {
    margin-top: -2rem;
  }

  .images-400w {
    .gatsby-resp-image-wrapper {
      max-width: 400px !important;
      margin: 1rem auto;
    }

    .gatsby-resp-image-wrapper + .caption {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export { PageIntro, PageWrapper, Content };
