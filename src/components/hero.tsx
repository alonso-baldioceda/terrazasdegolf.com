import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import BackgroundImage from "./backgroundImage";

// Styles
const StyledHero = styled.div`
  height: calc(100vh - 82px);
  margin: 82 auto 0;
  max-width: 2200px;
  overflow: hidden;
  position: relative;
  width: 100vw;

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`;

const Content = styled.div`
  bottom: 0;
  left: 0;
  padding: 1.5rem 0;
  position: absolute;
  text-align: left;
  width: 100vw;

  @media (min-width: 576px) {
    padding: 3rem;
  }
`;

// Types
interface IProps {
  imgSrc: any;
  imgMdUpSrc: any;
  title: string;
  className: any;
}

const mask = `rgba(0, 0, 0, 0.53)`;

const Hero: React.FC<IProps> = ({ imgSrc, imgMdUpSrc, title }) => {
  const { t } = useTranslation();
  return (
    <StyledHero>
      <BackgroundImage
        Tag="section"
        {...imgSrc}
        backgroundColor={`#040e18`}
        className="d-block d-md-none"
      />
      <BackgroundImage
        image={imgMdUpSrc}
        position="absolute"
        height="full"
        className="d-none d-sm-block"
        mask={mask}
      />
      <Content>
        <Container fluid>
          <Row>
            <Col lg={8} xl={6}>
              <h1 className="mb-4 text-white">{t(`${title}`)}</h1>
              <a
                href="#"
                className="btn btn-danger d-none d-md-inline-block mt-4 px-5 py-2"
              >
                <span className="text-capitalize font-weight-bold pr-2">
                  {t(`booking`)}
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </Content>
    </StyledHero>
  );
};

export default Hero;
