import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ClassNames from "classnames";
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
import ListGroup from "./../components/listGroup";
import ListGroupItem from "./../components/listGroupItem";
import HeroTwoColumns from "./../components/heroTwoColumns";
import Reservations from "./../components/reservations";
import CardImageWithList from "./../components/cardImageWithList";
import Album from "./../components/album";
import TextWithIcon from "./../components/textWithIcon";
import Contact from "./../components/contact";

// Assets
import CheckInIcon from "./../images/svg/clock.svg";
import CheckOutIcon from "./../images/svg/clock.svg";
import SmokeIcon from "./../images/svg/no-smoking.svg";
import PartyIcon from "./../images/svg/party.svg";
import WifiIcon from "./../images/svg/wifi.svg";
import WashingIcon from "./../images/svg/washing.svg";
import DryerIcon from "./../images/svg/dryer.svg";
import EthernetIcon from "./../images/svg/ethernet.svg";
import HotWaterIcon from "./../images/svg/hot-water.svg";
import TowelsIcon from "./../images/svg/towels.svg";
import ParkingIcon from "./../images/svg/parking.svg";
import FootprintIcon from "./../images/svg/footprint.svg";
import KitchenIcon from "./../images/svg/kitchen.svg";
import OvenIcon from "./../images/svg/oven.svg";
import SilverwareIcon from "./../images/svg/silverware.svg";
import RefrigeratorIcon from "./../images/svg/refrigerator.svg";
import StoveIcon from "./../images/svg/stove.svg";
import CoffeeMakerIcon from "./../images/svg/coffee-maker.svg";
import OilIcon from "./../images/svg/oil.svg";
import BarbecueUtensilsIcon from "./../images/svg/barbecue-utensils.svg";
import PillowIcon from "./../images/svg/pillow.svg";
import BedLinensIcon from "./../images/svg/bed-linens.svg";
import ShampooIcon from "./../images/svg/shampoo.svg";
import HairDryerIcon from "./../images/svg/hair-dryer.svg";
import PatioIcon from "./../images/svg/patio.svg";
import GardenIcon from "./../images/svg/garden.svg";
import BackyardIcon from "./../images/svg/backyard.svg";
import GrillIcon from "./../images/svg/grill.svg";
import WoodFireIcon from "./../images/svg/wood-fire.svg";
import MapIcon from "./../images/svg/navigator.svg";

const IndexPageWrapper = styled.div``;

// Constants
import { unitsImagesAlts, commonImagesAlts } from "./../modules/constants";

const IndexPage = ({ data }: any) => {
  const { t } = useTranslation();
  const {
    site,
    homeTopImage,
    homeTopMdUpImage,
    discountsImage,
    units,
    commonAreas,
  } = data || [];

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
    const positionSleepingArrangements = getScrollPosition(
      "sleeping-arrangements"
    );
    const positionUnits = getScrollPosition("units");
    const positionCommonSpaces = getScrollPosition("common-spaces");
    const positionServices = getScrollPosition("services");
    const positionDrive = getScrollPosition("drive");
    const positionContact = getScrollPosition("contact");
    const positionRules = getScrollPosition("rules");

    if (
      scrollPosition >= positionHero &&
      scrollPosition < positionSleepingArrangements
    ) {
      handleMenuClick(-1);
    }

    if (
      scrollPosition >= positionSleepingArrangements &&
      scrollPosition < positionUnits
    ) {
      handleMenuClick(0);
    }

    if (
      scrollPosition >= positionUnits &&
      scrollPosition < positionCommonSpaces
    ) {
      handleMenuClick(1);
    }

    if (
      scrollPosition >= positionCommonSpaces &&
      scrollPosition < positionServices
    ) {
      handleMenuClick(2);
    }

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
    {
      text: "One Queen bed",
      rate: "120",
    },
    {
      text: "Two Queen beds",
      rate: "130",
    },
    {
      text: "One King bed and deck with private garden",
      rate: "140",
    },
    {
      text: "Two Queen beds and deck with private garden",
      rate: "140",
    },
    {
      text: "Two Queen beds",
      rate: "130",
    },
    {
      text: "One Queen bed",
      rate: "120",
    },
    {
      text: "One Queen bed, 2 sofa beds, for equipped for people with limited ability",
      rate: "130",
    },
    {
      text: "Two Queen beds and sofa bed",
      rate: "130",
    },
    {
      text: "Two Queen beds",
      rate: "130",
    },
    {
      text: "Two Queen beds, extra room with sofa bed, balcony and hot tub",
      rate: "150",
    },
    {
      text: "Studio with 1 king bed (or 2 twin beds), sofa bed, living room, tub, refrigerator, electric appliances, tub",
      rate: "150",
    },
  ];

  const roomsIncludes = [
    "Private bathroom",
    "Air conditioning",
    '32" TV with cable',
    "Telephone",
    "Minibar",
    "Clock-radio",
    "Safe-deposit box",
    "Wi-Fi",
    "Coffee Maker and complimentary coffee",
    "Hair dryer",
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
            title="hero.title"
            description="Terrazas de Golf es una antigua residencia familiar transformada en un confortable y acogedor Boutique Hotel, atendido por sus propietarios con la misión de servir."
            bgColor="bg-lunar-green"
            textColor="text-white"
          />
        </section>
        <section id="reservations" className="position-relative">
          {/* <Spacer bottomOnly={true}> */}
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
          {/* </Spacer> */}
        </section>
        <section id="initial-description" className="bg-merino">
          <Spacer>
            <div className="bg-merino">
              <Container>
                <Row className="justify-content-md-center align-items-center">
                  <Col xs={12}>
                    <h2 className="mb-3 mb-lg-5 text-lg-center">
                      {t("intro.heading")}
                    </h2>
                    <p className="text-lg-center mb-3 mb-lg-5">
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
        <section className="anchor-block" id="sleeping-arrangements">
          <FadeInWhenVisible>
            <div className="bg-white">
              <Container>
                <Row>
                  <Col xs={12}>
                    <Spacer>
                      <h2 className="m-0">{t(`arrangements.heading`)}</h2>
                    </Spacer>
                  </Col>
                </Row>
              </Container>
              <Spacer bottomOnly={true}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <h3 className="mb-5">Our rates</h3>
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
                              <td>{rate.text}</td>
                              <td>
                                <span className="mono">{`$${rate.rate}`}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className="mb-3">
                        Fare includes breakfast and transportation to and from
                        Juan Santamaria (SJO) and Tobias Bolanos (SYQ) Airports
                      </p>

                      <p className="mb-3">
                        Rooms are "triple" when space allows an extra bed or
                        sofa bed. These rooms are{" "}
                        <span className="mono">#7</span>,{" "}
                        <span className="mono">#8</span>,{" "}
                        <span className="mono">#10</span>,{" "}
                        <span className="mono">#11</span>
                      </p>

                      <p className="mb-0">
                        Free children under <span className="mono">8</span>{" "}
                        accompanied by their parents.
                      </p>

                      <p className="mb-0">
                        Rooms are "triple" when space allows an extra bed or
                        sofa bed. These rooms are{" "}
                        <span className="mono">#7</span> and{" "}
                        <span className="mono">#8.</span>
                      </p>

                      <p className="mb-0">Room rate for two pax.</p>

                      <p className="mb-0">
                        <span className="mono">$15</span> per additional pax.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Spacer>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="units">
          <FadeInWhenVisible>
            <div className="bg-merino">
              <Container>
                <Row>
                  <Col sm={12}>
                    <Spacer>
                      <h2 className="mb-5">{t(`units.heading`)}</h2>
                      <p className="mb-0">{t(`units.description`)}</p>
                    </Spacer>
                    <Spacer bottomOnly={true}>
                      <div className="border-white">
                        <Album
                          images={units}
                          alts={unitsImagesAlts}
                          border="white"
                        />
                      </div>
                    </Spacer>
                  </Col>
                </Row>
              </Container>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="common-spaces">
          <FadeInWhenVisible>
            <div className="bg-white">
              <Container>
                <Row>
                  <Col sm={12}>
                    <Spacer>
                      <h2 className="mb-5">{t(`commonSpaces.heading`)}</h2>
                      <p className="mb-3">{t(`commonSpaces.descriptionOne`)}</p>
                      <p className="mb-0">{t(`commonSpaces.descriptionTwo`)}</p>
                    </Spacer>
                    <Spacer bottomOnly={true}>
                      <div className="common">
                        <div className="border-athens-gray">
                          <Album
                            images={commonAreas}
                            border="gray"
                            alts={commonImagesAlts}
                          />
                        </div>
                      </div>
                    </Spacer>
                  </Col>
                </Row>
              </Container>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="services">
          <FadeInWhenVisible>
            <div className="bg-gin">
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
                      <Col xs={12} className="mb-4 mb-lg-5">
                        <h3 className="mb-0">{t(`services.headingBasics`)}</h3>
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<WifiIcon />}
                          heading="services.wifi"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<WashingIcon />}
                          heading="services.washingMachine"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<DryerIcon />}
                          heading="services.dryer"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<TowelsIcon />}
                          heading="services.essentialServices"
                          subheading="services.essentialServicesDetails"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<EthernetIcon />}
                          heading="services.ethernet"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<HotWaterIcon />}
                          heading="services.hotWater"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="my-4 my-lg-5">
                        <h3 className="mb-0">
                          {t(`services.headingInstallations`)}
                        </h3>
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<ParkingIcon />}
                          heading="services.parking"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<FootprintIcon />}
                          heading="services.petsFriedly"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="my-4 my-lg-5">
                        <h3 className="mb-0">{t(`services.headingKitchen`)}</h3>
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<KitchenIcon />}
                          heading="services.kitchen"
                          subheading="services.kitchenDetails"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<OvenIcon />}
                          heading="services.oven"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<SilverwareIcon />}
                          heading="services.dishesAndSilverware"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<RefrigeratorIcon />}
                          heading="services.refrigerator"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<StoveIcon />}
                          heading="services.stove"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<CoffeeMakerIcon />}
                          heading="services.coffeeMaker"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<OilIcon />}
                          heading="services.cookingBasics"
                          subheading="services.cookingBasicsDetails"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<BarbecueUtensilsIcon />}
                          heading="services.barbecueUtensils"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="my-4 my-lg-5">
                        <h3 className="mb-0">
                          {t(`services.headingBedAndBath`)}
                        </h3>
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<PillowIcon />}
                          heading="services.extraPillowsAndBlankets"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<BedLinensIcon />}
                          heading="services.bedLinens"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<ShampooIcon />}
                          heading="services.shampoo"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<HairDryerIcon />}
                          heading="services.hairDryer"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="my-4 my-lg-5">
                        <h3 className="mb-0">{t(`services.headingOutdoor`)}</h3>
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<PatioIcon />}
                          heading="services.patio"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<GardenIcon />}
                          heading="services.garden"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          icon={<BackyardIcon />}
                          heading="services.backyard"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<GrillIcon />}
                          heading="services.grill"
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          icon={<WoodFireIcon />}
                          heading="services.woodFire"
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Spacer>
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="drive">
          <FadeInWhenVisible>
            <Spacer>
              <div className="bg-white">
                <Container>
                  <Row className="align-items-center">
                    <Col md={5}>
                      <h2 className="mb-5">{t(`drive.heading`)}</h2>
                      <div className="mb-5">
                        <a
                          className="btn btn-dark"
                          href="https://www.google.com/maps/place/Laguna+de+Arenal/@10.4916643,-84.9286452,12z/data=!3m1!4b1!4m5!3m4!1s0x8fa00445d4aa989b:0x8a2f8115437b0e4d!8m2!3d10.5052242!4d-84.8724284?hl=es"
                          target="_blank"
                        >
                          {t(`drive.cta`)}
                        </a>
                      </div>
                    </Col>
                    <Col md={7}>
                      <MapIcon />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Spacer>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="contact">
          <FadeInWhenVisible>
            <div className="bg-merino">
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
            </div>
          </FadeInWhenVisible>
        </section>
        <section className="anchor-block" id="rules">
          <FadeInWhenVisible>
            <div className="bg-white">
              <Container>
                <Row>
                  <Col sm={12}>
                    <Spacer>
                      <h2 className="m-0">{t(`rules.heading`)}</h2>
                    </Spacer>
                  </Col>
                </Row>
              </Container>
              <Spacer bottomOnly={true}>
                <div className="rules">
                  <Container>
                    <Row>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          heading="rules.checkIn"
                          icon={<CheckInIcon />}
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          heading="rules.checkOut"
                          icon={<CheckOutIcon />}
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4">
                        <TextWithIcon
                          heading="rules.smoke"
                          icon={<SmokeIcon />}
                        />
                      </Col>
                      <Col md={6} xl={4} className="mb-4 mb-lg-0">
                        <TextWithIcon
                          heading="rules.party"
                          icon={<PartyIcon />}
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Spacer>
            </div>
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
    discountsImage: file(relativePath: { eq: "desc5.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1600)
      }
    }
    units: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "units" }
      }
      sort: { order: ASC, fields: name }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 900)
          }
        }
      }
    }
    commonAreas: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "common" }
      }
      sort: { order: ASC, fields: name }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 900)
          }
        }
      }
    }
  }
`;

export default IndexPage;
