import React from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ClassNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import LanguageSelector from "./languageSelector";

// Assets
import Call from "./../images/svg/call.svg";
import Logo from "./../images/svg/logo-black.svg";
import Instagram from "./../images/svg/instagram.svg";
import Facebook from "./../images/svg/facebook.svg";

// Assets
const SocialButton = css`
  height: 30px;
  transition: all 0.125s !important;
  width: 30px;

  @media (min-width: 768px) {
    height: 32px;
    width: 32px;
  }

  &:hover {
    fill: var(--terracotta);
  }
`;

const Brand = styled((props) => <AnchorLink {...props} />)`
  height: 82px;
  text-decoration: none;
`;

const Nav = styled.div`
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  height: 82px;
  position: fixed;
  width: 100%;
  z-index: 200;

  .nav-wrapper {
    margin: 0 auto;
    max-width: 2200px;

    .left-options {
      ul {
        li {
          &:last-of-type {
            a {
              padding-right: 0;
            }
          }
        }
      }
    }

    .right-options {
      flex-grow: 1;

      .phone {
        border-radius: 50%;
        display: block;
        height: 32px;
        text-decoration: none;
        width: 32px;

        @media (min-width: 768px) {
          height: 34px;
          width: 34px;
        }

        svg {
          height: 100%;
          transition: all 0.125s !important;
          width: 100%;
        }

        &:hover {
          svg {
            fill: var(--terracotta);
          }
        }
      }

      .separator {
        background: var(--black);
        height: 44px;
        margin: 0 0.5rem;
        width: 2px;

        @media (min-width: 768px) {
          margin: 0 0.75rem;
        }

        @media (min-width: 1200px) {
          margin: 1.25rem;
        }
      }

      .muted-link {
        display: block;
        height: 26px;
        width: 26px;

        svg {
          height: 26px;
          width: 26px;
        }
      }

      .social {
        margin-right: 0.5rem;

        @media (min-width: 768px) {
          margin-right: 0.75rem;
        }

        @media (min-width: 1200px) {
          margin-right: 1.25rem;
        }

        &:last-of-type {
          margin-right: calc(40px + 0.5rem);

          @media (min-width: 768px) {
            margin-right: calc(40px + 0.75rem);
          }

          @media (min-width: 1200px) {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

const NavLink = styled((props) => <AnchorLink {...props} />)`
  background: transparent;
  border-bottom: 2px solid transparent;
  color: var(--black);
  display: inline-block;
  margin: 0 1.25rem 0 0;
  padding: 0 !important;
  position: relative;
  z-index: 1;

  &:hover {
    border-bottom: 2px solid var(--terracotta);
    color: var(--black) !important;
  }

  &:visited {
    color: var(--black) !important;
  }

  &:focus {
    outline: none;
  }

  &.active {
    border-bottom: 2px solid var(--terracotta);
    color: var(--black) !important;
  }
`;

const CompanyName = styled.span`
  color: var(--black);
  font-size: 1.175rem;
  font-weight: 700;
  margin-left: 0.375rem;
  margin-right: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.375rem;
    padding-bottom: 0.3rem;
  }
`;

const LogoIcon = styled((props) => <Logo {...props} />)`
  height: 60px;
  margin: 0;
  width: 60px;
`;

const InstagramIcon = styled((props) => <Instagram {...props} />)`
  ${SocialButton}
`;

const FacebookIcon = styled((props) => <Facebook {...props} />)`
  ${SocialButton}
`;

// Types
interface IMenuItemProps {
  anchor: string;
  name: string;
  translate: string;
}

interface IProps {
  menu: IMenuItemProps[];
  phone: string;
  phoneRef: string;
  facebook: string;
  onClick: (arg: number) => void;
  active: number;
  language: number;
  setLanguage: (arg: number) => void;
  current: number;
  toggleMenu?: () => void;
}
const Header: React.FC<IProps> = ({
  menu,
  phoneRef,
  facebook,
  onClick,
  active,
  language,
  setLanguage,
  current,
  toggleMenu,
}) => {
  const { t } = useTranslation();

  const languagesList = {
    es: "Esp",
    en: "Eng",
  };

  return (
    <Nav>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12}>
            <div className="d-flex align-items-center justify-content-between nav-wrapper">
              <div className="d-flex align-items-center left-options">
                <Brand
                  className="d-flex align-items-center"
                  to={`/#topPage`}
                  onAnchorLinkClick={() => onClick(-1)}
                >
                  <LogoIcon />
                  <CompanyName>Terrazas de Golf</CompanyName>
                </Brand>
                <ul className="nav justify-content-center d-none d-xl-flex">
                  {menu.map((menuItem, menuIndex) => {
                    return (
                      <li
                        className="nav-item"
                        key={`menu-horizontal-nav-${menuIndex}`}
                      >
                        <NavLink
                          to={`/${menuItem.anchor}`}
                          stripHash
                          onAnchorLinkClick={() => onClick(menuIndex)}
                          className={ClassNames(
                            "nav-link text-capitalize",
                            {
                              active: menuIndex === active,
                            },
                            {
                              active: menuItem.anchor === `#${current}`,
                            }
                          )}
                        >
                          {t(menuItem.translate)}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="d-flex justify-content-end align-items-center right-options">
                <div className="d-none d-xl-inline">
                  <LanguageSelector
                    languagesList={languagesList}
                    language={language}
                    setLanguage={setLanguage}
                    toggleMenu={toggleMenu}
                  />
                </div>
                <a href={`tel:${phoneRef}`} className="phone muted-link">
                  <Call />
                </a>
                <span className="separator"></span>
                <a href="#" className="muted-link social">
                  {t(`followInstagram`)}
                  <InstagramIcon />
                </a>
                <a
                  href={facebook}
                  target="_blank"
                  className="muted-link social"
                >
                  {t(`followFacebook`)}
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default Header;
