import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts/layout";

class Contact extends React.Component {
  render() {
    return (
      <Layout location={ this.props.location }>
        <div>
          <h2>Contact me!</h2>
          <label htmlFor="sayHi">Just to say hi</label>
          <input name="sayHi" id="sayHi" />
          <label htmlFor="forWork">Work reasons</label>
          <input name="forWork" id="forWork" />
          <br />
          <button>Or just copy email to clipboard</button>
          <FormContainer>
            <div>
              <form action="contact">
                <FormGroup>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" cols="30" rows="10" />
                </FormGroup>
                <FormButtonContainer>
                  <FormButton>Send!</FormButton>
                </FormButtonContainer>
              </form>
            </div>
          </FormContainer>
        </div>
      </Layout>
    );
  }
}

const FormContainer = styled.div`
  margin: 0 auto;
  //max-width: 800px;
  border: 0 solid #2222ff;
  border-width: 4px 0;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  border: 0 solid #2222ff;
  border-bottom-width: 1px;
  //margin-bottom: -2px;

  label {
    width: 150px;
    padding: 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Teko', sans-serif;
    //font-weight: bold;
    letter-spacing: 1px;
    border-right: 1px solid #2222ff;
  }

  textarea,
  input {
    width: 80%;
    font-size: 22px;
    font-weight: bold;
    padding: 20px;
    border: 0;

    &:focus {
      outline: 0;
    }
  }

  textarea {
    resize: vertical;
  }
`;

const FormButtonContainer = styled.div`
  width: 100%;
  border-style: solid;
  border-color: #2222ff;
  border-width: 0;
`;

const FormButton = styled.button`
  background-color: #2222ff;
  font-size: 20px;
  color: white;
  border: 0 solid #2222ff;
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
