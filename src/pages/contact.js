import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { PageIntro, PageWrapper } from "../style/PageStyles";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  // const [copySuccess, setCopySuccess] = useState('');
  // const textAreaRef = useRef(null);

  // const copyToClipboard = (e) => {
  //   console.log(textAreaRef.current);
  //   // textAreaRef.current.select();
  //   document.execCommand('copy');
  //   // This is just personal preference.
  //   // I prefer to not show the the whole text area selected.
  //   e.target.focus();
  //   setCopySuccess('Copied!');
  // };

  return (
    <PageWrapper>
      <ContactIntro>
        <div className="container">
          <FormattedMessage id="contact.contactMe" tagName="h1" />
          <FormattedMessage id="contact.heading2" tagName="h2" />
          <FormattedMessage id="contact.heading3" tagName="h3" />
          {/*<Links>*/}
            {/*/!*Curriculum ES | Curriculum EN | Curriculum IT | Portfolio*!/*/}
            {/*/!*<h3>*!/*/}
              {/*/!*O escríbeme un Email a:{" "}*!/*/}
              {/*/!*<a href="mailto:hello@giumagnani.com" ref={textAreaRef} >hello@giumagnani.com</a>*!/*/}
              {/*/!*{*!/*/}
                {/*/!*document.queryCommandSupported('copy') &&*!/*/}
                {/*/!*<>*!/*/}
                  {/*/!*<CopyEmailButton onClick={copyToClipboard}>C</CopyEmailButton>*!/*/}
                  {/*/!*{copySuccess}*!/*/}
                {/*/!*</>*!/*/}
              {/*/!*}*!/*/}
            {/*/!*</h3>*!/*/}
          {/*</Links>*/}
        </div>
      </ContactIntro>
      <ContactForm />
    </PageWrapper>
  );
};

const ContactIntro = styled(PageIntro)`
  @media (min-width: ${props => props.theme.lg}) {
    padding-top: 140px;
    padding-bottom: 80px;
  }
`;

const CopyEmailButton = styled.button`
  display: inline;
  font-size: 20px;
  color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
  margin: 0;
  padding: 0 20px;
  height: 56px;
  width: 25px;

  &:focus {
    outline: 0;
  }
`;

const Links = styled.div`
  margin-top: 1.5rem;

  a {
    text-decoration: underline;
  }
`;

export default Contact;
