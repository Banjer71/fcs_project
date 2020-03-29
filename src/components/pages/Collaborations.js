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
        <h2><FormattedMessage id='title-collaborations' /></h2>
      </SubContainer>
      <Container>
        <Collaboration>
          <Card
            image={Catch22}
            name="Emanuela Naccarati"
            company="Fabric Consultant Costume P.A."
            fromCollab={true}
            textTitle="Catch-22"
            textDesign="Costume Design"
            textName="Janity Jates"
            objective={<FormattedMessage id='collaboration-obj' defaultMessage='text' />}
            text={<FormattedMessage id='search-suppliers' defaultMessage='text' />}
            text2={<FormattedMessage id='text-card-catch22' defaultMessage='text' />}
          />
          <Card
            image={AllTM}
            name="Emanuela Naccarati"
            company="Fabric Consultant Costume P.A."
            fromCollab={true}
            textTitle="All The Money"
            textDesign="Costume Design"
            textName="Janity Jates"
            objective={<FormattedMessage id='collaboration-obj' defaultMessage='text' />}
            text={<FormattedMessage id='search-suppliers' defaultMessage='text' />}
            text2={<FormattedMessage id='text-card-alltm' defaultMessage='text' />}
          />
          <Card
            image={Zoolander2}
            name="Emanuela Naccarati"
            company="Fabric Consultant Costume P.A."
            fromCollab={true}
            textTitle="Zoolander"
            textDesign=""
            textName="Leesa Evans"
            objective={<FormattedMessage id='collaboration-obj' defaultMessage='text' />}
            text={<FormattedMessage id='search-suppliers' defaultMessage='text' />}
            text2={<FormattedMessage id='text-card-zool' defaultMessage='text' />}
          />
          <Card
            image={Confratello}
            name="Emanuela Naccarati"
            company="Fabric Consultant Costume P.A."
            fromCollab={true}
            textTitle="Casa del Confratello"
            text="Casa del confratello: Art Director Emanuela Naccarati Fornitori"
            text2={<FormattedMessage id='text-card-confra' defaultMessage='text' />}
          />
          <Card
            image={Suspiria}
            name="Emanuela Naccarati"
            company="Fabric Consultant Costume P.A."
            fromCollab={true}
            textTitle="Suspiria"
            objective={<FormattedMessage id='collaboration-obj' defaultMessage='text' />}
            text={<FormattedMessage id='search-suppliers' defaultMessage='text' />}
            text2={<FormattedMessage id='text-card-suspiria' defaultMessage='text' />}
          />
        </Collaboration>
      </Container>
    </Content>
  );
};

export default Collaborations;
