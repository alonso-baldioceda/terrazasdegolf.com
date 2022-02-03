import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import Layout from "./../components/layout";
import SEO from "./../components/seo";
import FadeInWhenVisible from "./../components/fadeInWhenVisible";
import Spacer from "./../components/spacer";
import GallerySlider from "./../components/gallerySlider";
import ListGroup from "./../components/listGroup";
import ListGroupItem from "./../components/listGroupItem";
import HeroTwoColumns from "./../components/heroTwoColumns";
import Reservations from "./../components/reservations";
import CardImageWithList from "./../components/cardImageWithList";
import TextWithIcon from "./../components/textWithIcon";
import Contact from "./../components/contact";
import GoogleMapReact from "./../components/googleMapReact";

// Assets
import BathroomIcon from "./../images/svg/bathroom.svg";
import AirConditionerIcon from "./../images/svg/air-conditioner.svg";
import TvIcon from "./../images/svg/tv.svg";
import PhoneIcon from "./../images/svg/phone.svg";
import MinibarIcon from "./../images/svg/minibar.svg";
import DigitalClockIcon from "./../images/svg/digital-clock.svg";
import SaveBoxIcon from "./../images/svg/strongbox.svg";
import WheelchairIcon from "./../images/svg/wheelchair.svg";
import CheckInIcon from "./../images/svg/clock.svg";
// import CheckOutIcon from "./../images/svg/clock.svg";
import GolfPlayerIcon from "./../images/svg/golf-player.svg";
import MassageIcon from "./../images/svg/massage.svg";
import ToolsIcon from "./../images/svg/tools.svg";
import PortfolioIcon from "./../images/svg/portfolio.svg";
import AirplaneIcon from "./../images/svg/airplane.svg";
import MedicalIcon from "./../images/svg/medical.svg";
import ArtsIcon from "./../images/svg/arts.svg";
// import SmokeIcon from "./../images/svg/no-smoking.svg";
// import PartyIcon from "./../images/svg/party.svg";
import WifiIcon from "./../images/svg/wifi.svg";
// import WashingIcon from "./../images/svg/washing.svg";
// import DryerIcon from "./../images/svg/dryer.svg";
// import EthernetIcon from "./../images/svg/ethernet.svg";
import HotWaterIcon from "./../images/svg/hot-water.svg";
// import TowelsIcon from "./../images/svg/towels.svg";
import ParkingIcon from "./../images/svg/parking.svg";
// import FootprintIcon from "./../images/svg/footprint.svg";
// import KitchenIcon from "./../images/svg/kitchen.svg";
// import OvenIcon from "./../images/svg/oven.svg";
// import SilverwareIcon from "./../images/svg/silverware.svg";
// import RefrigeratorIcon from "./../images/svg/refrigerator.svg";
// import StoveIcon from "./../images/svg/stove.svg";
import CoffeeMakerIcon from "./../images/svg/coffee-maker.svg";
// import OilIcon from "./../images/svg/oil.svg";
// import BarbecueUtensilsIcon from "./../images/svg/barbecue-utensils.svg";
// import PillowIcon from "./../images/svg/pillow.svg";
// import BedLinensIcon from "./../images/svg/bed-linens.svg";
// import ShampooIcon from "./../images/svg/shampoo.svg";
import HairDryerIcon from "./../images/svg/hair-dryer.svg";
// import PatioIcon from "./../images/svg/patio.svg";
// import GardenIcon from "./../images/svg/garden.svg";
// import BackyardIcon from "./../images/svg/backyard.svg";
// import GrillIcon from "./../images/svg/grill.svg";
// import WoodFireIcon from "./../images/svg/wood-fire.svg";
// import MapIcon from "./../images/svg/navigator.svg";

const IndexPageWrapper = styled.div`
  /* .services {
    .text-with-icon {
      min-height: 60px;
    }
  } */
`;

// Constants
// import { unitsImagesAlts, commonImagesAlts } from "./../modules/constants";

const IndexPage = ({ data }: any) => {
  const { t } = useTranslation();
  const { site, homeTopImage, homeTopMdUpImage, discountsImage, room1, room2 } =
    data || [];

  const { siteUrl, phoneRef } = site.siteMetadata;

  const [active, setActive] = useState(-1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  const windowScrollPosition = () => {
    const positionWindow =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    return Math.round(positionWindow);
  };

  const getScrollPosition = (el: string): number => {
    var element = document.getElementById(el);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = windowScrollPosition();
      let adjustment: number = 0;

      if (window.matchMedia("(max-width: 1200px)")) {
        adjustment = 90;
      } else if (window.matchMedia("(max-width: 992px)")) {
        adjustment = 170;
      } else if (window.matchMedia("(max-width: 768px)")) {
        adjustment = 95;
      }

      const top = Math.round(rect.top + (scrollTop - adjustment));

      return top;
    }
    return 0;
  };

  useEffect(() => {
    const positionHero = 0;
    const positionRooms = getScrollPosition("rooms");
    const positionGallery = getScrollPosition("gallery");
    // const positionCommonSpaces = getScrollPosition("common-spaces");
    const positionServices = getScrollPosition("services");
    const positionDrive = getScrollPosition("drive");
    const positionContact = getScrollPosition("contact");
    const positionRules = getScrollPosition("rules");

    if (scrollPosition >= positionHero && scrollPosition < positionRooms) {
      handleMenuClick(-1);
    }

    if (scrollPosition >= positionRooms && scrollPosition < positionGallery) {
      handleMenuClick(0);
    }

    if (
      scrollPosition >= positionGallery &&
      scrollPosition < positionServices
    ) {
      handleMenuClick(1);
    }

    // if (
    //   scrollPosition >= positionCommonSpaces &&
    //   scrollPosition < positionServices
    // ) {
    //   handleMenuClick(2);
    // }

    if (scrollPosition >= positionServices && scrollPosition < positionDrive) {
      handleMenuClick(3);
    }

    if (scrollPosition >= positionDrive && scrollPosition < positionContact) {
      handleMenuClick(4);
    }

    if (scrollPosition >= positionContact && scrollPosition < positionRules) {
      handleMenuClick(5);
    }

    if (scrollPosition >= positionRules) {
      handleMenuClick(6);
    }

    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleMenuClick = (id: number) => {
    setActive(id);
  };

  const toKnowPattern = "toKnow.list.item";

  const toKnow = [
    `${toKnowPattern}1`,
    `${toKnowPattern}2`,
    `${toKnowPattern}3`,
    `${toKnowPattern}4`,
    `${toKnowPattern}5`,
    `${toKnowPattern}6`,
    `${toKnowPattern}7`,
  ];

  const discountsPattern = "discounts.list.item";

  const discounts = [
    `${discountsPattern}1`,
    `${discountsPattern}2`,
    `${discountsPattern}3`,
    `${discountsPattern}4`,
  ];

  const rates = [
    "120",
    "130",
    "140",
    "140",
    "130",
    "120",
    "130",
    "130",
    "130",
    "150",
    "150",
  ];

  return (
    <IndexPageWrapper>
      <Layout
        current={scrollPosition}
        active={active}
        onClick={handleMenuClick}
      >
        <SEO />
        <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "${siteUrl}",
              "name": "${process.env.GATSBY_WEBSITE_NAME}",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "${phoneRef}",
                "contactType": "Customer Support"
              }
            }
          `}
          </script>
        </Helmet>
        <section className="anchor-block" id="hero">
          <HeroTwoColumns
            image={homeTopImage}
            imageMdUp={homeTopMdUpImage}
            title="hero.heading"
            description="hero.text"
            bgColor="bg-lunar-green"
            textColor="text-white"
          />
        </section>
        <section id="reservations" className="position-relative">
          <div className="bg-salomie py-4 position-relative">
            <Container>
              <Row className="justify-content-md-center">
                <Col lg={9}>
                  <div className="reservations">
                    <Reservations />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="initial-description" className="bg-merino">
          <Spacer>
            <div className="bg-merino">
              <Container>
                <Row className="justify-content-md-center align-items-center">
                  <Col xs={12}>
                    <h2 className="mb-4 mb-lg-5 text-lg-center">
                      {t("intro.heading")}
                    </h2>
                    <p className="text-lg-center mb-3 mb-lg-4">
                      {t("intro.text1")}
                    </p>
                  </Col>
                  <Col lg={8} xl={9}>
                    <div className="px-0 px-lg-5 mb-5 mb-lg-0">
                      <p className="">{t("intro.text1")}</p>
                      <p className="mb-3 md-lg-5">{t("toKnow.text")}</p>
                      <ListGroup>
                        {toKnow.map((item, index) => (
                          <ListGroupItem key={index} text={item} />
                        ))}
                      </ListGroup>
                    </div>
                  </Col>
                  <Col lg={4} xl={3}>
                    <CardImageWithList
                      image={discountsImage}
                      title="discounts.heading"
                      list={discounts}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Spacer>
        </section>
        <section className="anchor-block" id="rooms">
          <FadeInWhenVisible>
            <div className="bg-white">
              <Container>
                <Row>
                  <Col xs={12}>
                    <Spacer>
                      <h2 className="m-0">{t(`rooms.heading`)}</h2>
                    </Spacer>
                  </Col>
                </Row>
              </Container>
              <Spacer bottomOnly={true}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <h3 className="mb-3 mb-lg-4">Our rates</h3>
                      <table className="table table-striped mb-5">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rates.map((rate, index) => (
                            <tr key={index}>
                              <th scope="row">
                                <span className="mono">{index + 1}</span>
                              </th>
                              <td>
                                {t(`rooms.descriptions.room${index + 1}`)}
                              </td>
                              <td>
                                <span className="mono">{rate}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="mb-3">{t(`rooms.bottom.text1`)}</p>
                      <p className="mb-3">
                        {t(`rooms.bottom.text2`)}{" "}
                        <span className="mono">#7</span>,{" "}
                        <span className="mono">#8</span>,{" "}
                        <span className="mono">#10</span>,{" "}
                        <span className="mono">#11</span>.
                      </p>
                      <p className="mb-0">
                        {t(`rooms.bottom.text3.text3-1`)}{" "}
                        <span className="mono">8</span>{" "}
                        {t(`rooms.bottom.text3.text3-2`)}
                      </p>
                      <p className="mb-0">
                        {t(`rooms.bottom.text4.text4-1`)}{" "}
                        <span className="mono">#7</span>{" "}
                        {t(`rooms.bottom.text4.text4-2`)}{" "}
                        <span className="mono">#8</span>.
                      </p>
                      <p className="mb-0">{t(`rooms.bottom.text5`)}</p>
                      <p className="mb-3 mb-lg-4">
                        <span className="mono">$15</span>{" "}
                        {t(`rooms.bottom.text6`)}
                      </p>
                    </Col>
                    <Col xs={12} className="mb-3 mb-lg-4">
                      <p className="mb-0">{t(`rooms.include.heading`)}</p>
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<BathroomIcon />}
                        heading="rooms.include.text1"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<AirConditionerIcon />}
                        heading="rooms.include.text2"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<TvIcon />}
                        heading="rooms.include.text3"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<HotWaterIcon />}
                        heading="rooms.include.text4"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<PhoneIcon />}
                        heading="rooms.include.text5"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<MinibarIcon />}
                        heading="rooms.include.text6"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<DigitalClockIcon />}
                        heading="rooms.include.text7"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<SaveBoxIcon />}
                        heading="rooms.include.text8"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-3">
                      <TextWithIcon
                        icon={<WifiIcon />}
                        heading="rooms.include.text9"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-0 mb-lg-0">
                      <TextWithIcon
                        icon={<CoffeeMakerIcon />}
                        heading="rooms.include.text10"
                      />
                    </Col>
                    <Col md={6} xl={4} className="mb-0 mb-lg-0">
                      <TextWithIcon
                        icon={<HairDryerIcon />}
                        heading="rooms.include.text11"
                      />
                    </Col>
                  </Row>
                </Container>
              </Spacer>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="gallery">
          <FadeInWhenVisible>
            <div className="bg-merino">
              <Spacer>
                <Container>
                  <Row className="justify-content-center">
                    <Col xs={12}>
                      <Spacer bottomOnly={true}>
                        <h2 className="m-0">{t(`gallery.rooms.heading`)}</h2>
                      </Spacer>
                    </Col>
                    <Col xs={12}>
                      <h3 className="mb-3 mb-lg-4">
                        {t(`gallery.rooms.text`)} #1
                      </h3>
                      <div className="mb-5">
                        <GallerySlider images={room1} />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h3 className="mt-3 mt-lg-5">
                        {t(`gallery.rooms.text`)} #2
                      </h3>
                      <div className="mb-5">
                        <GallerySlider images={room2} />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Spacer>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="services">
          <FadeInWhenVisible>
            <Container>
              <Row>
                <Col sm={12}>
                  <Spacer>
                    <h2 className="m-0">{t(`services.heading`)}</h2>
                  </Spacer>
                </Col>
              </Row>
            </Container>
            <Spacer bottomOnly={true}>
              <div className="Services">
                <Container>
                  <Row>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<WheelchairIcon />}
                        heading="services.handicapped"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<ParkingIcon />}
                        heading="services.parking"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<CheckInIcon />}
                        heading="services.open"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<GolfPlayerIcon />}
                        heading="services.membership"
                        subheading="services.membershipDetails"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<MassageIcon />}
                        heading="services.massage"
                        subheading="services.massageDetails"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<ToolsIcon />}
                        heading="services.hairdresser"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<PortfolioIcon />}
                        heading="services.business"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<AirplaneIcon />}
                        heading="services.airportPickUp"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3">
                      <TextWithIcon
                        icon={<MedicalIcon />}
                        heading="services.medical"
                        subheading="services.medicalDetails"
                      />
                    </Col>
                    <Col md={6} xl={6} className="mb-3 mb-lg-0">
                      <TextWithIcon
                        icon={<ArtsIcon />}
                        heading="services.art"
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Spacer>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="drive">
          <FadeInWhenVisible>
            <div className="bg-merino">
              <Container>
                <Row>
                  <Col>
                    <Spacer>
                      <h2 className="mb-0">{t(`location.heading`)}</h2>
                    </Spacer>
                    <p className="mb-3">{t(`location.text`)}</p>
                    <div className="mb-3">
                      <ListGroup>
                        <ListGroupItem text={t(`location.references.text1`)} />
                        <ListGroupItem text={t(`location.references.text2`)} />
                      </ListGroup>
                    </div>
                    <p className="mb-5">{t(`location.map`)}</p>
                    <Spacer bottomOnly={true}>
                      <GoogleMapReact
                        lat={10.4918331}
                        lng={-84.9286452}
                        zoom={11}
                      />
                    </Spacer>
                  </Col>
                </Row>
              </Container>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="contact">
          <FadeInWhenVisible>
            <Container>
              <Row>
                <Col sm={12}>
                  <Spacer>
                    <h2 className="m-0">{t(`contact.heading`)}</h2>
                  </Spacer>
                  <Spacer bottomOnly={true}>
                    <Contact />
                  </Spacer>
                </Col>
              </Row>
            </Container>
          </FadeInWhenVisible>
        </section>
      </Layout>
    </IndexPageWrapper>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        phoneRef
      }
    }
    homeTopImage: file(relativePath: { eq: "home-top.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 992)
      }
    }
    homeTopMdUpImage: file(relativePath: { eq: "home-top-md-up.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1600)
      }
    }
    discountsImage: file(relativePath: { eq: "desc.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1600)
      }
    }
    room1: allFile(
      filter: { relativeDirectory: { eq: "rooms/1" } }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 900
              transformOptions: { fit: CONTAIN }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
    room2: allFile(
      filter: { relativeDirectory: { eq: "rooms/2" } }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 900
              transformOptions: { fit: CONTAIN }
              placeholder: BLURRED
              webpOptions: { quality: 50 }
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
