import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Container } from "./PagesStyles";
import Catch22 from "../images/catch22.jpg";
import AllTM from "../images/allthemoney.jpg";
import Zoolander2 from "../images/zoolander_2.jpg";
import Confratello from "../images/casadel_confratello.jpg";
import Suspiria from "../images/suspiria.jpg";
import Card from "./Card";
import defaultMessage from "../../translation/message";

const Content = styled.div`
  width: 100%;
`;

const SubContainer = styled(Container)`
  max-width: 100%;
  margin: 1rem 0;
  padding: 1rem 0;
  background-color: #f6f6f7;
  > h2 {
    text-align: center;
  }
`;

const Collaboration = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Collaborations = () => {
  return (
    <Content>
      <SubContainer>
        <h2>
          <FormattedMessage
            id="title-collaborations"
            defaultMessage={defaultMessage.def["title-collaborations"]}
          />
        </h2>
      </SubContainer>
      <Container>
        <Collaboration>
          <Card
            image={Catch22}
            name="Emanuela Naccarati"
            company="Fabric Consultant"
            fromCollab={true}
            textTitle="Catch-22"
            textDesign="Costume Designer"
            textName="Jenny Eagan"
            objective={
              <FormattedMessage
                id="collaboration-obj"
                defaultMessage={defaultMessage.def["collaboration-obj"]}
              />
            }
            text={
              <FormattedMessage
                id="search-suppliers"
                defaultMessage={defaultMessage.def["search-suppliers"]}
              />
            }
            text2={
              <FormattedMessage
                id="text-card-catch22"
                defaultMessage={defaultMessage.def["text-card-catch22"]}
              />
            }
          />
          <Card
            image={AllTM}
            name="Emanuela Naccarati"
            company="Fabric Consultant"
            fromCollab={true}
            textTitle="All The Money"
            textDesign="Costume Designer"
            textName="Janty Jates"
            objective={
              <FormattedMessage
                id="collaboration-obj"
                defaultMessage={defaultMessage.def["collaboration-obj"]}
              />
            }
            text={
              <FormattedMessage
                id="search-suppliers"
                defaultMessage={defaultMessage.def["search-suppliers"]}
              />
            }
            text2={
              <FormattedMessage
                id="text-card-alltm"
                defaultMessage={defaultMessage.def["text-card-alltm"]}
              />
            }
          />
          <Card
            image={Zoolander2}
            name="Emanuela Naccarati"
            company="Fabric Consultant"
            fromCollab={true}
            textTitle="Zoolander"
            textDesign="Costume Designer"
            textName="Leesa Evans"
            objective={
              <FormattedMessage
                id="collaboration-obj"
                defaultMessage={defaultMessage.def["collaboration-obj"]}
              />
            }
            text={
              <FormattedMessage
                id="search-suppliers"
                defaultMessage={defaultMessage.def["search-suppliers"]}
              />
            }
            text2={
              <FormattedMessage
                id="text-card-zool"
                defaultMessage={defaultMessage.def["text-card-zool"]}
              />
            }
          />
          <Card
            image={Suspiria}
            name="Emanuela Naccarati"
            company="Fabric Consultant"
            fromCollab={true}
            textTitle="Suspiria"
            textDesign="Costume Designer"
            textName="Giulia Piersanti"
            objective={
              <FormattedMessage
                id="collaboration-obj"
                defaultMessage={defaultMessage.def["collaboration-obj"]}
              />
            }
            text={
              <FormattedMessage
                id="search-suppliers"
                defaultMessage={defaultMessage.def["search-suppliers"]}
              />
            }
            text2={
              <FormattedMessage
                id="text-card-suspiria"
                defaultMessage={defaultMessage.def["text-card-suspiria"]}
              />
            }
          />
          <Card
            image={Confratello}
            name="Emanuela Naccarati"
            company="Art Director - Fabric Consultant"
            fromCollab={true}
            textTitle="Casa del Confratello"
            text="Casa del confratello: Art Director Emanuela Naccarati"
            text2={
              <FormattedMessage
                id="text-card-confra"
                defaultMessage={defaultMessage.def["text-card-confra"]}
              />
            }
          />
        </Collaboration>
      </Container>
    </Content>
  );
};

export default Collaborations;
