import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Styles
const StyledTextWithIcon = styled.div`
  margin-bottom: 0;
  min-height: 56px;

  svg {
    width: 34px;

    /* @media (min-width: 992px) {
      width: 34px;
    } */
  }

  span {
    font-size: 1rem;
    font-weight: 300;
  }
`;

// Props
interface IProps {
  icon: any;
  heading: string;
  subheading?: string;
}

const TextWithIcon: React.FC<IProps> = ({ icon, heading, subheading }) => {
  const { t } = useTranslation();
  return (
    <StyledTextWithIcon className="d-flex align-items-center text-with-icon">
      <span className="me-3">{icon}</span>
      <p className="mb-0">
        {t(`${heading}`)}
        {subheading && <span className="d-block">{t(`${subheading}`)}</span>}
      </p>
    </StyledTextWithIcon>
  );
};

export default TextWithIcon;
