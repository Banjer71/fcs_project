import React from "react";
import { FormattedMessage } from "react-intl";
import defaultMessage from "../../translation/message";
import { Content, SubContainer, Container, SlideCard } from "./PagesStyles";
import Slideshow from "../SlideShow";
import {cottonLinen, organdis, technoFabrics, match, jersey, leather} from './imagesArrays'


const Fabrics = () => {
  return (
    <Content>
    <SubContainer>
        <h2>
          <FormattedMessage
            id="title-fabrics"
            defaultMessage={defaultMessage.def["title-fabrics"]}
          />
        </h2>
      </SubContainer>
      <Container>
        <SlideCard>
          <h3>
            <FormattedMessage
              id="tessuti_slide-1"
              defaultMessage={defaultMessage.def["tessuti_slide-1"]}
            />
          </h3>
          <Slideshow image={cottonLinen} />
        </SlideCard>
        <SlideCard>
          <h3>
            <FormattedMessage
              id="tessuti_slide-2"
              defaultMessage={defaultMessage.def["tessuti_slide-2"]}
            />
          </h3>
          <Slideshow image={organdis} />
        </SlideCard>
        <SlideCard>
          <h3>
            <FormattedMessage
              id="tessuti_slide-3"
              defaultMessage={defaultMessage.def["tessuti_slide-3"]}
            />
          </h3>
          <Slideshow image={technoFabrics} />
        </SlideCard>
        <SlideCard>
          <h3>
            <FormattedMessage
              id="tessuti_slide-4"
              defaultMessage={defaultMessage.def["tessuti_slide-4"]}
            />
          </h3>
          <Slideshow image={match} />
        </SlideCard>
        <SlideCard>
          <h3>
            <FormattedMessage
              id="tessuti_slide-5"
              defaultMessage={defaultMessage.def["tessuti_slide-5"]}
            />
          </h3>
          <Slideshow image={jersey} />
        </SlideCard>
        <SlideCard>
          <h3>
            <FormattedMessage
              id="tessuti_slide-6"
              defaultMessage={defaultMessage.def["tessuti_slide-6"]}
            />
          </h3>
          <Slideshow image={leather} />
        </SlideCard>
      </Container>
    </Content>
  );
};

export default Fabrics;
