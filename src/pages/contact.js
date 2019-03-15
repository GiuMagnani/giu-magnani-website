import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { PageIntro, PageWrapper } from "../style/PageStyles";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  // const [copySuccess, setCopySuccess] = useState('');
  // const textAreaRef = useRef(null);

  const [values, setValues] = useState({
    nonProfit: false,
    reason: "work",
    type: "",
    message: "",
    name: "",
    email: "",
  });

  const handleOnChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

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
          <h2>
            ¿Necesitas el diseño o desarrollo de una aplicación o sitio web?
          </h2>
          <h3>
            Envíame un mensaje a través del formulario y me pondré en contacto
            contigo lo antes que pueda.
          </h3>
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
      <FormWrapper>
        <div className="container">
          <FormReason>
            <FormReasonItem>
              <input
                name="reason"
                id="work"
                type="radio"
                value="work"
                onChange={handleOnChange}
                defaultChecked={values.reason === "work"}
              />
              <label htmlFor="work">I'd like to work with you</label>
            </FormReasonItem>
            <FormReasonItem>
              <input
                name="reason"
                id="hi"
                type="radio"
                value="hi"
                onChange={handleOnChange}
                defaultChecked={values.reason === "hi"}
              />
              <label htmlFor="hi">Just to say hi!</label>
            </FormReasonItem>
          </FormReason>
          <div>
            {/*Non-profit? If you have an idea please let me know. I'd love to get*/}
            {/*involved in organizations pro-animals, vegetarianism/veganism,*/}
            {/*environmental issues.*/}
            {/*<input*/}
            {/*name="nonProfit"*/}
            {/*id="nonProfit"*/}
            {/*type="checkbox"*/}
            {/*value={isNonProfit}*/}
            {/*onChange={() => setNonProfit(!isNonProfit)}*/}
            {/*/>*/}
          </div>
          {values.reason === "work" && (
            <>
              <FormReason>
                <FormReasonItem>
                  <input
                    name="type"
                    id="website"
                    type="radio"
                    value="website"
                    onChange={handleOnChange}
                    defaultChecked={values.type === "website"}
                  />
                  <label htmlFor="website">Website</label>
                </FormReasonItem>
                <FormReasonItem>
                  <input
                    name="type"
                    id="app"
                    type="radio"
                    value="app"
                    onChange={handleOnChange}
                    defaultChecked={values.type === "app"}
                  />
                  <label htmlFor="app">App</label>
                </FormReasonItem>
                <FormReasonItem>
                  <input
                    name="type"
                    id="other"
                    type="radio"
                    value="other"
                    onChange={handleOnChange}
                    defaultChecked={values.type === "other"}
                  />
                  <label htmlFor="other">Other</label>
                </FormReasonItem>
              </FormReason>
              {/*<div>Budget - Slider</div>*/}
              {/*<div>Timeline - Slider</div>*/}
              {/*<div>Company name Current Website</div>*/}
            </>
          )}
          <Form action="contact">
            {/*{values.nonProfit && (*/}
              {/*<FormGroup>*/}
                {/*<label htmlFor="name">Project Name:</label>*/}
                {/*<input type="text" id="name" />*/}
              {/*</FormGroup>*/}
            {/*)}*/}
            <FormGroup>
              <label htmlFor="name">
                <FormattedMessage id="contact.name" />
              </label>
              <input type="text" id="name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">
                <FormattedMessage id="contact.email" />
              </label>
              <input type="text" id="email" />
            </FormGroup>
            <FormGroup>
              <TextareaLabel htmlFor="message">
                {values.reason === "work" ? (
                  <FormattedMessage id="contact.projectDetails" />
                ) : (
                  <FormattedMessage id="contact.message" />
                )}
              </TextareaLabel>
              <textarea name="message" id="message" cols="30" rows="10" />
            </FormGroup>
            <FormButtonContainer>
              <FormButton>
                <FormattedMessage id="contact.send" />
              </FormButton>
            </FormButtonContainer>
          </Form>
        </div>
      </FormWrapper>
    </PageWrapper>
  );
};

const ContactIntro = styled(PageIntro)`
  @media (min-width: ${props => props.theme.lg}) {
    padding-top: 140px;
    padding-bottom: 80px;
  }
`;

const FormWrapper = styled.section`
  border-width: 4px 0;
  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.main};

  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    padding: 1rem;
  }
`;

const Form = styled.form`
  //border: 1px solid ${props => props.theme.main};
`;

const TextareaLabel = styled.label`
  height: 300px;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${props => props.theme.main};
  border-bottom-width: 1px;
  margin: 0.5rem 0;

  label {
    width: 150px;
    padding: 0 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-right: 1px solid ${props => props.theme.main};
    height: 100%;
    min-height: 56px;
    display: flex;
    align-items: center;
  }

  textarea,
  input {
    width: 100%;
    font-size: 22px;
    padding: 20px;
    line-height: 56px;
    border: 0;
    height: 56px;

    &:focus {
      outline: 0;
    }
  }

  textarea {
    resize: none;
    height: 300px;
    line-height: 1.5;
  }

  ${TextareaLabel} {
    height: 300px;
  }
`;

const FormButtonContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

const FormButton = styled.button`
  background-color: ${props => props.theme.main};
  font-size: 20px;
  color: white;
  margin: 0;
  padding: 0 20px;
  height: 56px;
  min-width: 50%;
  width: 100%;

  &:focus {
    outline: 0;
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

const FormReason = styled.div`
  border: 1px solid ${props => props.theme.main};
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FormReasonItem = styled.div`
  position: relative;
  width: 50%;
  text-align: center;
  height: 56px;
  line-height: 56px;
  border-right: 1px solid ${props => props.theme.main};

  &:last-child {
    border: 0;
  }

  label {
    font-size: 20px;
    position: relative;
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: block;
  }

  input {
    opacity: 0;
    width: 0;
    position: absolute;
    visibility: hidden;
  }

  input:checked ~ label {
    background-color: ${props => props.theme.main};
    color: white;
  }
`;

export default Contact;
