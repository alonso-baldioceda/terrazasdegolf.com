import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Asets
import HomeIcon from "./../images/svg/home.svg";
import EnvelopeIcon from "./../images/svg/envelope.svg";
import PhoneIcon from "./../images/svg/phone.svg";

// Styles
const StyledFooter = styled.div`
  padding: 2.5rem 0;

  @media (min-width: 768px) {
    padding: 4.5rem 0;
  }

  svg {
    fill: var(--white);
    height: 30px;
    width: 30px;

    @media (min-width: 768px) {
      height: 32px;
      width: 32px;
    }
  }
`;

const NavLink = styled((props) => <AnchorLink {...props} />)`
  border-bottom: 2px solid transparent;
  color: var(--white);
  display: inline-block;
  margin: 0 1.25rem 0 0;
  padding: 0;
  position: relative;
  text-decoration: none;
  transition: all 0.125s ease-out;
  z-index: 1;

  &:hover {
    border-bottom: 2px solid var--(terracotta);
    color: var(--black);
  }

  &:visited {
    color: var(--black);
  }

  &:focus {
    outline: none;
  }
`;

// Types
interface IMenuItemProps {
  anchor: string;
  name: string;
  translate: string;
}

interface IProps {
  menu: IMenuItemProps[];
}

const Footer: React.FC<IProps> = ({ menu }) => {
  const { t } = useTranslation();
  return (
    <StyledFooter className="text-center text-lg-start bg-lunar-green">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-start">
              <h2 className="text-white mb-4 mb-lg-5">{t(`footer.links`)}</h2>
              <p className="mb-1 mb-lg-3">
                <NavLink to={`/#topPage`} className="text-white" stripHash>
                  {t(`home`)}
                </NavLink>
              </p>
              {menu.map((menuItem, menuIndex) => {
                const isLast = menu.length !== menuIndex + 1;
                return (
                  <p
                    className={classNames(
                      { "mb-0": !isLast },
                      { "mb-1 mb-lg-3": isLast }
                    )}
                    key={`nav-${menuIndex}`}
                  >
                    <NavLink
                      to={`/${menuItem.anchor}`}
                      className="text-white"
                      stripHash
                    >
                      {t(menuItem.translate)}
                    </NavLink>
                  </p>
                );
              })}
            </div>
            <div className="col-md-6 mx-auto mt-5 mt-md-0 text-start">
              <h2 className="text-white mb-4 mb-lg-5">{t(`footer.heading`)}</h2>
              <p className="text-white mb-3 d-flex align-items-center">
                <HomeIcon className="me-3" /> {t(`footer.address`)}
              </p>
              <p className="text-white mb-3 d-flex align-items-center">
                <EnvelopeIcon className="me-3" />
                info@terrazasdegolf.com
              </p>
              <p className="text-white mb-0 d-flex align-items-center">
                <PhoneIcon className="me-3" /> {t(`footer.phone`)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </StyledFooter>
  );
};

export default Footer;
