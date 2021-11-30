import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Components
import ListGroup from "./listGroup";
import ListGroupItem from "./listGroupItem";

// Styles
const StyledCard = styled.div`
  border: 4px solid var(--athens-gray);

  @media (min-width: 768px) {
    min-height: 310px;
  }
`;

//Props
interface IListtemProps {
  icon: any;
  text: string;
}

interface IProps {
  title: string;
  list: IListtemProps[];
}

const Card: React.FC<IProps> = ({ title, list }) => {
  const { t } = useTranslation();
  return (
    <StyledCard className="d-flex flex-column align-items-center">
      <h3 className="mb-0 py-4 text-capitalize bg-gin w-100 text-center">
        {t(title)}
      </h3>
      <div className="p-4">
        <ListGroup>
          {list.map(({ icon, text }, index) => (
            <ListGroupItem key={index} icon={icon} text={text} />
          ))}
        </ListGroup>
      </div>
    </StyledCard>
  );
};

export default Card;
