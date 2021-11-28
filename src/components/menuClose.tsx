import React from "react";
import styled from "styled-components";

// Styles
const StyledMenuIcon = styled.div`
  cursor: pointer;
  height: 28px;
  overflow: hidden;
  position: fixed;
  right: 15px;
  top: 28px;
  transform: rotate(0deg);
  width: 35px;
  z-index: 1000;

  span {
    background: var(--black);
    border-radius: 9px;
    display: block;
    height: 3px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    width: 100%;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 12px;
  }

  span:nth-child(4) {
    top: 24px;
  }

  &.open {
    z-index: 99999;

    span {
      background: var(--white);

      &:nth-child(1) {
        top: 12px;
        width: 0%;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }

      &:nth-child(4) {
        top: 12px;
        width: 0%;
        left: 50%;
      }
    }
  }
`;

// Types
interface IProps {
  toggleMenu: () => void;
  open: boolean;
}

const MenuClose: React.FC<IProps> = ({ toggleMenu, open }) => (
  <StyledMenuIcon
    className={`d-xl-none ${open ? "open" : ""}`}
    onClick={toggleMenu}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </StyledMenuIcon>
);

export default MenuClose;
