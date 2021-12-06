import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Assets
import IconBullet from "./../images/svg/circle.svg";

// Styles
const StyledListGroupItem = styled.li`
  &:last-child {
    margin-bottom: 0 !important;
  }
`;

// Props
interface IProps {
  text: string;
}

const ListGroupItem: React.FC<IProps> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <StyledListGroupItem className="d-flex ps-0">
      <div className="d-flex">
        <span className="me-3">
          <IconBullet
            className="bullet"
            style={{ width: "10px", marginTop: "-4px" }}
          />
        </span>
        {t(text)}
      </div>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;
