import React from "react";
import styled from "styled-components";

const ColCard = styled.div`
  width: 300px;
  height: 430px;
  margin: 0 auto 120px auto;
  grid-column: ${props => (props.fromCollab ? "1/9" : "1")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  perspective: 120rem;

  &:hover .flip-card {
    transform: rotateY(180deg);
  }

  .flip-card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  .flip-card-back {
    background-image: linear-gradient(to right bottom, #efece1, #ccc8bd);
    transform: rotateY(180deg);
    color: #5e492e;
    box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.75);
    > h3 {
      padding: 3px;
    }

    > h3:first-child {
      padding-top: 30px;
    }

    > p,
    h4 {
      margin-top: 15px;
      padding: 0 20px;
    }

    > h4 {
      padding-top: 20px;
    }
  }

  .col-card-info {
    padding-top: 25px;
    padding-left: 10px;
    > h3,
    p {
      margin-bottom: 10px;
    }
  }

  .col-card-img img {
    width: 300px;
    height: 420px;
    box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.75);
  }

  .card-text {
    text-align: center;
  }

  @media screen and (min-width: 680px) {
    grid-column: ${props => (props.fromCollab ? "span 4" : "1")};
    .col-card-img img {
      width: 300px;
      height: 430px;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-column: ${props => (props.fromCollab ? "span 1" : "1")};
    width: 300px;
    /* height: 420px; */
  }
`;

const Card = props => {
  return (
    <ColCard fromCollab={props.fromCollab}>
      <div className="flip-card">
        <div className="flip-card-front col-card-img">
          <img src={props.image} alt="poster movie" />
          <div className="col-card-info">
            <h3>{props.name}</h3>
            <p>{props.company}</p>
          </div>
        </div>
        <div className="flip-card-back ">
          <h3 className="card-text">{props.textTitle}</h3>
          <h3 className="card-text">{props.textDesign}</h3>
          <h3 className="card-text">{props.textName}</h3>
          <h4>{props.objective}</h4>
          <p>{props.text}</p>
          <p>{props.text2}</p>
        </div>
      </div>
    </ColCard>
  );
};

export default Card;
