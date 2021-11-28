import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { animationContainer, animationItem } from "./../modules/constants";

const HeroTwoColumnsContainer = styled.section`
  .top {
    background: var(--monza);
    height: 100vh;
    min-height: 760px;
    padding-top: 2.5rem;

    @media (min-width: 992px) {
      width: 50%;
    }
  }

  .top-image {
    height: 100vh;
    min-height: 760px;
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

  .btn {
    background: var(--lunar-green);
    border-radius: 40px;
    color: var(--white);
    padding: 0.25rem 2rem;
    width: auto;

    &:hover {
      color: var(--salomie);
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
                <div className="px-5">
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
                    <p className={`mb-3 mb-lg-5 ${textColor}`}>{description}</p>
                  </motion.div>
                  <motion.div
                    className={`${textColor} bg-white p-5 rounded-3 `}
                    variants={animationItem}
                  >
                    <form>
                      <Row>
                        <Col xs={12} className="mb-3">
                          <h3>Consultar reservaciones</h3>
                        </Col>
                        <Col md={6} className="mb-3">
                          <label
                            className="mb-2 fw-normal"
                            htmlFor="inputAdults"
                          >
                            Adultos
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputAdults"
                            placeholder="Adultos"
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <label
                            className="mb-2 fw-normal"
                            htmlFor="inputChuldren"
                          >
                            Niños
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputChuldren"
                            placeholder="Children"
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <label className="mb-2 fw-normal" htmlFor="inputFrom">
                            Desde
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputFrom"
                            placeholder="Desde"
                          />
                        </Col>
                        <Col md={6} className="mb-3">
                          <label className="mb-2 fw-normal" htmlFor="inputTo">
                            Hasta
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputTo"
                            placeholder="Hasta"
                          />
                        </Col>
                      </Row>
                      <button type="submit" className="btn">
                        Sign in
                      </button>
                    </form>
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
