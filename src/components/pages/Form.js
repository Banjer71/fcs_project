import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Content, Container } from "./PagesStyles";
import defaultMessage from "../../translation/message";

const FormContent = styled.div`
  .email-response {
    color: green;
    font-size: 18px;
    margin: 20px;
  }

  @media screen and (min-width: 780px) {
    display: flex;
    margin-left: 5rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > input {
    height: 35px;
    border-radius: 4px;
    border: 1px solid #efece1;
  }

  .submit-button {
    background-color: #efece1;
  }

  > textarea {
    height: 150px;
    border-radius: 4px;
    border: 1px solid #efece1;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 780px) {
    max-width: 400px;
    margin: 0 2rem;
  }
`;

const Info = styled.div`
  font-size: 14px;
  padding: 10px;
  color: #747679;

  .address {
    padding: 10px 0;

    > p {
      padding: 4px 0;
    }
  }
`;

const ContactUs = () => {
  const [isSent, setIsSent] = useState("");

  const removeResponse = () => {
    setIsSent("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "contact_form",
        e.target,
        "user_iESDZWRha1lEH2BnEdu5t"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(
            <FormattedMessage
              id="formMessage"
              defaultMessage={defaultMessage.def.formMessage}
            />
          );
          setTimeout(removeResponse, 4000);
        },
        (error) => {
          console.log(error.text);
          setIsSent("Something went wrong");
        }
      );
    e.target.reset();
  };

  return (
    <Content>
      <Container>
        <FormContent>
          <Form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className="submit-button" />
            <p className="email-response">{isSent}</p>
          </Form>
          <Info>
            <div className="address">
              <p>Fabric Consulting Services</p>
              <p>info@fabricservices.it</p>
            </div>
            <div className="address">
              <p>Via Montecavallo, 15</p>
              <p>02039 Toffi - Rieti, Italy</p>
              <p>P.I. 028999850735</p>
            </div>
          </Info>
        </FormContent>
      </Container>
    </Content>
  );
};

export default ContactUs;
