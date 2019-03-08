import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Contact = () => {
  const [isNonProfit, setNonProfit] = useState(false);

  return (
    <>
      <Intro>
        <div className="container">
          <h1>Contact me!</h1>
          <label htmlFor="sayHi">Just to say hi</label>
          <input name="reason" id="sayHi" type="radio" />
          <label htmlFor="forWork">Work</label>
          <input name="reason" id="forWork" type="radio" />
          Non-profit? If you have an idea please let me know. I'd love to get
          involved in organizations pro-animals, vegetarianism/veganism,
          environmental issues.
          <input
            name="nonProfit"
            id="nonProfit"
            type="checkbox"
            value={isNonProfit}
            onChange={() => setNonProfit(!isNonProfit)}
          />
          <br />
          <button>Just copy email to clipboard</button>
        </div>
      </Intro>
      <FormContainer>
        <div className="container">
          // if reason === work // development | design | illustration
          <label htmlFor="app">App</label>
          <input name="projectType" id="app" type="radio" />
          <label htmlFor="website">Website</label>
          <input name="projectType" id="website" type="radio" />
          <label htmlFor="other">E-Commerce</label>
          <input name="projectType" id="other" type="radio" />
          <div>Budget - Slider</div>
          <div>Timeline - Slider</div>
          <div>Company name Current Website</div>
          // Steps of form
          <Form action="contact">
            {isNonProfit && (
              <FormGroup>
                <label htmlFor="name">Project Name:</label>
                <input type="text" id="name" />
              </FormGroup>
            )}
            <FormGroup>
              <TextareaLabel htmlFor="projectDetails">
                Project details
              </TextareaLabel>
              <textarea
                name="projectDetails"
                id="projectDetails"
                cols="30"
                rows="10"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" />
            </FormGroup>
            <FormGroup>
              <TextareaLabel htmlFor="message">Message:</TextareaLabel>
              <textarea name="message" id="message" cols="30" rows="10" />
            </FormGroup>
            <FormButtonContainer>
              <FormButton>Send!</FormButton>
            </FormButtonContainer>
          </Form>
        </div>
      </FormContainer>
    </>
  );
};

const Intro = styled.header`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${props => props.theme.main};

  h1 {
    font-size: 60px;
    line-height: 1.2;
    font-weight: bold;
  }
`;

const FormContainer = styled.div`
  border-width: 4px 0;
  margin-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.main};

  .container {
    border: 1px solid ${props => props.theme.main};
    border-top: 0;
    border-bottom: 0;
    padding: 1rem;
  }
`;

const Form = styled.form`
  border: 1px solid ${props => props.theme.main};
`;

const TextareaLabel = styled.label`
  height: 300px;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  border: 0 solid ${props => props.theme.main};
  border-bottom-width: 1px;

  label {
    width: 150px;
    padding: 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border-right: 1px solid ${props => props.theme.main};
    height: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
  }

  textarea,
  input {
    width: 100%;
    font-size: 22px;
    padding: 20px;
    border: 0;
    height: 60px;

    &:focus {
      outline: 0;
    }
  }

  textarea {
    resize: none;
    height: 300px;
  }

  ${TextareaLabel} {
    height: 300px;
  }
`;

const FormButtonContainer = styled.div`
  width: 100%;
  border-style: solid;
  border-color: ${props => props.theme.main};
  border-width: 0;
`;

const FormButton = styled.button`
  background-color: ${props => props.theme.main};
  font-size: 20px;
  color: white;
  border: 0 solid ${props => props.theme.main};
  border-width: 2px 0;
  margin: 0;
  padding: 20px;
  min-width: 50%;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

export default Contact;
