import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const ContactForm = () => {
  const defaultValues = {
    honeypot: "",
    // nonProfit: false,
    reason: "work",
    // type: "",
    message: "",
    name: "",
    email: "",
  };

  const [values, setValues] = useState(defaultValues);
  const [isFormSuccess, setFormState] = useState(false);
  const [isFormLoading, setFormLoading] = useState(false);

  const handleOnChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (values.honeypot !== "") return;
    setFormLoading(true);
    fetch(process.env.GATSBY_CONTACT_POST_URL, {
      method: "POST",
      body: JSON.stringify({
        ses_address: "hello@giumagnani.com",
        send_to: "hello@giumagnani.com",
        subject: "Giu Magnani | Contact form",
        name: values.name,
        email: values.email,
        reason: values.reason,
        // type: values.type,
        message: values.message,
      }),
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
      }),
    })
      .then(() => {
        setFormState(true);
        setFormLoading(false);
        setTimeout(() => setFormState(false), 4000);
        setValues(defaultValues);
      })
      .catch(err => {
        setFormState(false);
        setFormLoading(false);
        console.log(err);
      });
  };

  return (
    <FormWrapper>
      <div className="container">
        <Form onSubmit={onSubmit}>
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
              <label htmlFor="work">
                <FormattedMessage id="contact.reasonWork" />
              </label>
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
              <label htmlFor="hi">
                <FormattedMessage id="contact.reasonHi" />
              </label>
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
          {/*{values.reason === "work" && (*/}
          {/*<>*/}
          {/*<FormReason>*/}
          {/*<FormReasonItem>*/}
          {/*<input*/}
          {/*name="type"*/}
          {/*id="website"*/}
          {/*type="radio"*/}
          {/*value="website"*/}
          {/*onChange={handleOnChange}*/}
          {/*defaultChecked={values.type === "website"}*/}
          {/*/>*/}
          {/*<FormattedMessage id="contact.website" tagName="label" />*/}
          {/*</FormReasonItem>*/}
          {/*<FormReasonItem>*/}
          {/*<input*/}
          {/*name="type"*/}
          {/*id="app"*/}
          {/*type="radio"*/}
          {/*value="app"*/}
          {/*onChange={handleOnChange}*/}
          {/*defaultChecked={values.type === "app"}*/}
          {/*/>*/}
          {/*<FormattedMessage id="contact.app" tagName="label" />*/}
          {/*</FormReasonItem>*/}
          {/*<FormReasonItem>*/}
          {/*<input*/}
          {/*name="type"*/}
          {/*id="other"*/}
          {/*type="radio"*/}
          {/*value="other"*/}
          {/*onChange={handleOnChange}*/}
          {/*defaultChecked={values.type === "other"}*/}
          {/*/>*/}
          {/*<FormattedMessage id="contact.other" tagName="label" />*/}
          {/*</FormReasonItem>*/}
          {/*</FormReason>*/}
          {/*/!*<div>Budget - Slider</div>*!/*/}
          {/*/!*<div>Timeline - Slider</div>*!/*/}
          {/*/!*<div>Company name Current Website</div>*!/*/}
          {/*</>*/}
          {/*)}*/}
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
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleOnChange}
              value={values.name}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">
              <FormattedMessage id="contact.email" />
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleOnChange}
              value={values.email}
            />
          </FormGroup>
          <FormGroup>
            <TextareaLabel htmlFor="message">
              {values.reason === "work" ? (
                <FormattedMessage id="contact.projectDetails" />
              ) : (
                <FormattedMessage id="contact.message" />
              )}
            </TextareaLabel>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={handleOnChange}
              value={values.message}
            />
          </FormGroup>
          <FormButtonContainer>
            <FormButton type="submit">
              {!isFormLoading &&
                !isFormSuccess && (
                  <>
                    <FormattedMessage id="contact.send" />
                  </>
                )}
              {isFormLoading && "Sending..."}
              {isFormSuccess && !isFormLoading && "Thank you!"}
            </FormButton>
          </FormButtonContainer>
        </Form>
      </div>
    </FormWrapper>
  );
};

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

export default ContactForm;
