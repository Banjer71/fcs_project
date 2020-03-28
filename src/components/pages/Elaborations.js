import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Container } from "./PagesStyles";
import Slideshow from "../SlideShow";

const embroidery = [
  "/assets/embroidery/bordeaux.jpg",
  "/assets/embroidery/reding.jpg",
  "/assets/embroidery/tasca.jpg"
];
const Content = styled.div`
  width: 100%;
`;

const ContainerTwo = styled(Container)`
  @media screen and (min-width: 960px) {
    margin-top: 170px;
  }
`;

const Elaborations = () => {
  return (
    <Content>
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
