import React from "react";
import classNames from "classnames";
import styled from "styled-components";

// Styles
export const StyledSpacing = styled.div`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }

  @media (min-width: 992px) {
    padding: 3rem 0;
  }

  &.top-only {
    padding: 2rem 0 0;

    @media (min-width: 768px) {
      padding: 2.5rem 0 0;
    }

    @media (min-width: 992px) {
      padding: 3rem 0 0;
    }
  }

  &.bottom-only {
    padding: 0 0 2rem;

    @media (min-width: 768px) {
      padding: 0 0 2.5rem;
    }

    @media (min-width: 992px) {
      padding: 0 0 3rem;
    }
  }
`;

// Props
export interface IProps {
  anchorid?: string;
  bottomOnly?: boolean;
  topOnly?: boolean;
  children: any;
}

const Spacer: React.FC<IProps> = ({ bottomOnly, children }) => {
  return (
    <StyledSpacing
      className={classNames(
        { "bottom-only": bottomOnly },
        { "top-only": bottomOnly }
      )}
    >
      {children}
    </StyledSpacing>
  );
};

export default Spacer;
