import React from "react";
import classNames from "classnames";
import styled from "styled-components";

// Styles
export const StyledSpacing = styled.div`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 3.5rem 0;
  }

  @media (min-width: 992px) {
    padding: 4.5rem 0;
  }

  &.bottom-only {
    padding: 0 0 3rem;

    @media (min-width: 768px) {
      padding: 0 0 3.5rem;
    }

    @media (min-width: 992px) {
      padding: 0 0 4.5rem;
    }
  }
`;

// Props
export interface IProps {
  anchorid?: string;
  bottomOnly?: boolean;
  children: any;
}

const Spacer: React.FC<IProps> = ({ bottomOnly, children }) => {
  return (
    <StyledSpacing className={classNames({ "bottom-only": bottomOnly })}>
      {children}
    </StyledSpacing>
  );
};

export default Spacer;
