// import config from "../../../data/SiteConfig";
import { createGlobalStyle } from "styled-components";

const Theme = {
  main: "#2222ff", // same color as Theme main color
  background: "#fff", // same color as Theme background color
  text: "#000",
  mainLight3: "#F3F6F8",
  grey1: "#F2F2F2",
  grey2: "#d8d8d8",
  grey3: "#9f9f9f",
  grey4: "#4a4a4a",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

const GlobalStyle = createGlobalStyle`
  body {
    color: #2222ff;
    
    p {
      font-size: 44px;
      margin: 0.5rem 0;
      display: block;
      line-height: 1.6;
    }
    
    strong {
      font-weight: bold;
    }
  }

  a {
    color: ${ props => props.theme.main };
  }
  
  strong {
    font-weight: 400;
  }
`;

export { Theme, GlobalStyle };
