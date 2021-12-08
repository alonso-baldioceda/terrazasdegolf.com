import React from "react";
import styled from "styled-components";

export const MarkerStyled = styled.div`
  z-index: 99999;
  .pin {
    background: #00cae9;
    border-radius: 50% 50% 50% 0;
    height: 30px;
    left: 50%;
    margin: -20px 0 0 -20px;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    width: 30px;

    &:after {
      background: #e6e6e6;
      border-radius: 50%;
      content: "";
      height: 14px;
      margin: 8px 0 0 8px;
      position: absolute;
      width: 14px;
    }
  }

  .bounce {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: bounce;
  }

  .pulse {
    background: #d6d4d4;
    border-radius: 50%;
    height: 14px;
    left: 50%;
    margin: 11px 0px 0px -12px;
    position: absolute;
    top: 50%;
    transform: rotateX(55deg);
    width: 14px;
    z-index: -2;

    &:after {
      animation-delay: 1.1s;
      animation-iteration-count: infinite;
      animation: pulsate 1s ease-out;
      border-radius: 50%;
      box-shadow: 0 0 1px 2px #00cae9;
      content: "";
      height: 40px;
      margin: -13px 0 0 -13px;
      opacity: 0;
      position: absolute;
      width: 40px;
    }
  }

  @keyframes pulsate {
    0% {
      opacity: 0;
      transform: scale(0.1, 0.1);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(1.2, 1.2);
    }
  }

  @keyframes bounce {
    0% {
      opacity: 0;
      transform: translateY(-2000px) rotate(-45deg);
    }

    60% {
      opacity: 1;
      transform: translateY(30px) rotate(-45deg);
    }

    80% {
      transform: translateY(-10px) rotate(-45deg);
    }

    100% {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;

interface IProps {
  // lng: string;
  // lat: string;
  color?: string;
  text: string;
}

const Marker: React.FC<IProps> = ({ color, text }) => (
  <MarkerStyled>
    <div
      className="pin bounce"
      style={{ backgroundColor: color, cursor: "pointer" }}
      // title={text}
    />
    <div className="pulse" />
  </MarkerStyled>
);

export default Marker;
