import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

// Components
import ListGroup from "./listGroup";
import ListGroupItem from "./listGroupItem";

//Props
interface IProps {
  title: string;
  image: any;
  list: string[];
}

const CardImageWithList: React.FC<IProps> = ({ image, title, list }) => {
  const { t } = useTranslation();
  const img = getImage(image);

  console.log(list);
  return (
    <div className="d-flex flex-column bg-white">
      {img !== undefined && (
        <GatsbyImage image={img} alt="" className="d-none d-lg-block" />
      )}
      <div className="p-4">
        <h3 className="mb-3">{t(title)}</h3>
        <ListGroup>
          {list.map((item, index) => (
            <ListGroupItem key={index} text={item} />
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default CardImageWithList;
