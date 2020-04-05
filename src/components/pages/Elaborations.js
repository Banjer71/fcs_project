import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Container, Content, SubContainer } from "./PagesStyles";
import Slideshow from "../SlideShow";
import defaultMessage from "../../translation/message";

const embroidery = [
  "/assets/embroidery/bordeaux.jpg",
  "/assets/embroidery/reding.jpg",
  "/assets/embroidery/tasca.jpg",
];

const ContainerTwo = styled(Container)`
  @media screen and (min-width: 960px) {
    margin-top: 150px;
  }
`;

const Elaborations = () => {
  return (
    <Content>
    <SubContainer>
        <h2>
          <FormattedMessage
            id="title-elaborations"
            defaultMessage={defaultMessage.def["title-elaborations"]}
          />
        </h2>
      </SubContainer>
      <ContainerTwo>
        <h3>
          <FormattedMessage id="slide_elaborations" />
        </h3>
        <Slideshow image={embroidery} className="emb" />
      </ContainerTwo>
    </Content>
  );
};

export default Elaborations;
