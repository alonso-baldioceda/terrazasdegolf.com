import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import Reservations from "../components/reservations";

// Constants
import { animationContainer, animationItem } from "./../modules/constants";

const HeroTwoColumnsContainer = styled.section`
  .top {
    background: var(--monza);
    /* height: 100vh; */
    min-height: 760px;
    /* padding-top: 2.5rem; */

    @media (min-width: 992px) {
      height: 100vh;
      width: 50%;
      /* padding-top: 2.5rem; */
    }
  }

  .top-image {
    /* height: 100vh; */
    /* min-height: 760px; */
    position: relative;

    @media (min-width: 992px) {
      height: 100vh;
      min-height: 760px;
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
  bgColor: string;
  textColor: string;
}

const HeroTwoColumns = ({
  title,
  description,
  image,
  bgColor,
  textColor,
}: Props) => {
  const img = getImage(image);

  return (
    <HeroTwoColumnsContainer className={`${bgColor} position-relative`}>
      <div className="top-image">
        {img !== undefined && <GatsbyImage image={img} alt="" className="" />}
      </div>
      <div className="top">
        <Container className="h-100">
          <Row className="align-items-center h-100 d-flex">
            <Col>
              <motion.div
                initial="hidden"
                animate="show"
                variants={animationContainer}
              >
                <div className="px-2 px-md-4">
                  <motion.div
                    className={`${textColor}`}
                    variants={animationItem}
                  >
                    {/* <h1 className="text-black-pearl mb-4">{title}</h1> */}
                    <h1 className="text-black-pearl mb-4">
                      En el corazón de la Ciudad
                    </h1>
                  </motion.div>
                  <motion.div
                    className={`${textColor}`}
                    variants={animationItem}
                  >
                    <p className={`mb-4 ${textColor}`}>{description}</p>
                  </motion.div>
                  <motion.div
                    className={`${textColor} bg-white p-3 p-md-4 rounded-3 `}
                    variants={animationItem}
                  >
                    <Reservations />
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="position-absolute container-pulse">
        <Pulse />
      </div> */}
    </HeroTwoColumnsContainer>
  );
};

// HeroTwoColumns.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.object.isRequired,
// };

export default HeroTwoColumns;
