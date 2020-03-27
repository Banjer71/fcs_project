import React from "react";
import styled from "styled-components";
import { Content, Container, SlideCard } from "./PagesStyles";
import Slideshow from "../SlideShow";

const cottonLinen = [
  "/assets/lino/lino.jpg",
  "/assets/lino/lino3.jpg",
  "/assets/lino/lino4.jpg",
  "/assets/lino/lino5.jpg",
  "/assets/lino/shirtman.jpg",
  "/assets/lino/shirtman2.jpg",
  "/assets/lino/shirtman3.jpg"
];

const organdis = [
  "/assets/organdis/org1.png",
  "/assets/organdis/org2.jpg",
  "/assets/organdis/org3.jpg",
  "/assets/organdis/org4.jpg",
  "/assets/organdis/org5.jpg",
  "/assets/organdis/org6.jpg"
];

const technoFabrics = [
  "/assets/technofabrics/orange.jpg",
  "/assets/technofabrics/whitesheet.jpg",
  "/assets/technofabrics/techno3.png",
  "/assets/technofabrics/fuxia.png",
  "/assets/technofabrics/techno4.png",
  "/assets/technofabrics/reterossa.jpg",
  "/assets/technofabrics/techno5.png",
  "/assets/technofabrics/techno6.jpg"
];

const match = [
  "/assets/match/fish.jpg",
  "/assets/match/match1.jpg",
  "/assets/match/match2.jpg",
  "/assets/match/match3.jpg"
];

const jersey = [
  "/assets/jersey/jersy1.jpg",
  "/assets/jersey/jersy2.jpg",
  "/assets/jersey/jersy3.jpg",
  "/assets/jersey/riga4.jpg",
  "/assets/jersey/riga6.jpg"
];

const leather = [
  "assets/leather/blu.jpg",
  "assets/leather/cross.jpg",
  "assets/leather/fiori.jpg",
  "assets/leather/green.jpg",
  "assets/leather/rosa.jpg",
  "assets/leather/yellow.jpg"
];

const Fabrics = () => {
  return (
    <Content>
      <Container>
        <SlideCard>
          <h3>Cotton/Linen</h3>
          <Slideshow image={cottonLinen} />
        </SlideCard>
        <SlideCard>
          <h3>Organdis</h3>
          <Slideshow image={organdis} />
        </SlideCard>
        <SlideCard>
          <h3>Techno Fabrics</h3>
          <Slideshow image={technoFabrics} />
        </SlideCard>
        <SlideCard>
          <h3>Match</h3>
          <Slideshow image={match} />
        </SlideCard>
        <SlideCard>
          <h3>Jersey</h3>
          <Slideshow image={jersey} />
        </SlideCard>
        <SlideCard>
          <h3>Leather</h3>
          <Slideshow image={leather} />
        </SlideCard>
      </Container>
    </Content>
  );
};

export default Fabrics;
