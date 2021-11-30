import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Styles
const StyledListGroupItem = styled.li`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0 !important;
  }

  span {
    border-radius: 50%;
    height: 52px;
    margin-right: 0.75rem;
    width: 52px;

    svg {
      height: 28px;
      width: 28px;
    }
  }
`;

// Props
interface IProps {
  background?: string;
  icon: any;
  text: string;
}

const ListGroupItem: React.FC<IProps> = ({ background, icon, text }) => {
  const { t } = useTranslation();
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center">
      <span
        className={`d-flex align-items-center justify-content-center bg-${background}`}
      >
        {icon}
      </span>
      <p className="mb-0">{t(text)}</p>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;
