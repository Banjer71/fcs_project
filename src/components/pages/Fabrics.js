import React from "react";
import { FormattedMessage } from "react-intl";
import defaultMessage from "../../translation/message";
import { Content, SubContainer, Container, SlideCard } from "./PagesStyles";
import Slideshow from "../SlideShow";
import jerseyOne from "../assets/jersey/jersy1.jpg";
import jsersyTwo from "../assets/jersey/jersy2.jpg";
import jersyThree from "../assets/jersey/jersy3.jpg";
import jerseyFour from "../assets/jersey/riga4.jpg";
import jerseyFive from "../assets/jersey/riga6.jpg";
import cottonLinenOne from "../assets/lino/lino.jpg";
import cottonLinenTwo from "../assets/lino/lino3.jpg";
import cottonLinenThree from "../assets/lino/lino4.jpg";
import cottonLinenFour from "../assets/lino/lino5.jpg";
import cottonLinenFive from "../assets/lino/shirtman.jpg";
import cottonLinenSix from "../assets/lino/shirtman2.jpg";
import cottonLinenSeven from "../assets/lino/shirtman3.jpg";
import organdisOne from "../assets/organdis/org1.png";
import organdisTwo from "../assets/organdis/org2.jpg";
import organdisThree from "../assets/organdis/org3.jpg";
import organdisFour from "../assets/organdis/org4.jpg";
import organdisFive from "../assets/organdis/org5.jpg";
import organdisSix from "../assets/organdis/org6.jpg";
import technoFabricsOne from "../assets/technofabrics/orange.jpg";
import technoFabricsTwo from "../assets/technofabrics/whitesheet.jpg";
import technoFabricsThree from "../assets/technofabrics/techno3.png";
import technoFabricsFour from "../assets/technofabrics/fuxia.png";
import technoFabricsFive from "../assets/technofabrics/techno4.png";
import technoFabricsSix from "../assets/technofabrics/reterossa.jpg";
import technoFabricsSeven from "../assets/technofabrics/techno5.png";
import technoFabricsEight from "../assets/technofabrics/techno6.jpg";
import matchOne from "../assets/match/fish.jpg";
import matchTwo from "../assets/match/match1.jpg";
import matchThree from "../assets/match/match2.jpg";
import matchFour from "../assets/match/match3.jpg";
import leatherOne from "../assets/leather/blu.jpg";
import leatherTwo from "../assets/leather/cross.jpg";
import leatherThree from "../assets/leather/fiori.jpg";
import leatherFour from "../assets/leather/green.jpg";
import leatherFive from "../assets/leather/rosa.jpg";
import leatherSix from "../assets/leather/yellow.jpg";

const jersey = [jerseyOne, jsersyTwo, jersyThree, jerseyFour, jerseyFive];

const cottonLinen = [
  cottonLinenOne,
  cottonLinenTwo,
  cottonLinenThree,
  cottonLinenFour,
  cottonLinenFive,
  cottonLinenSix,
  cottonLinenSeven,
];

const organdis = [
  organdisOne,
  organdisTwo,
  organdisThree,
  organdisFour,
  organdisFive,
  organdisSix,
];

const technoFabrics = [
  technoFabricsOne,
  technoFabricsTwo,
  technoFabricsThree,
  technoFabricsFour,
  technoFabricsFive,
  technoFabricsSix,
  technoFabricsSeven,
  technoFabricsEight,
];

const match = [matchOne, matchTwo, matchThree, matchFour];

const leather = [
  leatherOne,
  leatherTwo,
  leatherThree,
  leatherFour,
  leatherFive,
  leatherSix,
];

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
