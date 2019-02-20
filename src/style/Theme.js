// import config from "../../../data/SiteConfig";
import { createGlobalStyle } from "styled-components";

const Theme = {
  main: "#2222ff",
  background: "#fff",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

const GlobalStyle = createGlobalStyle`
  body {
    color: ${ props => props.theme.main };
    
    p {
      line-height: 1.5;
    }
    
    strong {
      font-weight: bold;
    }
  }

  a {
    color: ${ props => props.theme.main };
  }
  
  h2 {
    font-size: 30px;
  }
`;

export { Theme, GlobalStyle };
