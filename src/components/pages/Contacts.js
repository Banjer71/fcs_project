import React from "react";
import { FormattedMessage } from "react-intl";
import Form from "./Form";
import { SubContainer } from "./PagesStyles";
import defaultMessage from "../../translation/message";

const Contacts = () => {
  return (
    <div>
      <SubContainer>
        <h2>
          <FormattedMessage
            id="contacts"
            defaultMessage={defaultMessage.def.contacts}
          />
        </h2>
      </SubContainer>
      <Form />
    </div>
  );
};

export default Contacts;
