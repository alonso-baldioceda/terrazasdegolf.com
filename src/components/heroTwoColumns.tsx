import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeroTwoColumnsContainer = styled.section`
  .top {
    background: var(--monza);

    @media (min-width: 992px) {
      height: 89.5vh;
      width: 50%;
    }
  }

  .top-image {
    position: relative;

    @media (min-width: 992px) {
      height: 89.5vh;
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;

      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

interface Props {
  title: string;
  description: string;
  image: any;
  imageMdUp: any;
  bgColor: string;
  textColor: string;
}

const HeroTwoColumns = ({
  title,
  description,
  image,
  imageMdUp,
  bgColor,
  textColor,
}: Props) => {
  const img = getImage(image);
  const imgMdUp = getImage(imageMdUp);

  return (
    <HeroTwoColumnsContainer className={`${bgColor} position-relative`}>
      <div className="top-image">
        {img !== undefined && (
          <GatsbyImage image={img} alt="" className="d-lg-none" />
        )}
        {imgMdUp !== undefined && (
          <GatsbyImage image={imgMdUp} alt="" className="d-none d-lg-block" />
        )}
      </div>
      <div className="top">
        <Container className="h-100">
          <Row className="align-items-center h-100 d-flex">
            <Col>
              <div className="px-2 py-4 p-md-4">
                {/* <h1 className="text-black-pearl mb-4">{title}</h1> */}
                <h1 className={`${textColor} text-black-pearl mb-3 mb-lg-4`}>
                  En el corazón de la Ciudad
                </h1>
                <p className={`${textColor} mb-0`}>{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </HeroTwoColumnsContainer>
  );
};

export default HeroTwoColumns;
