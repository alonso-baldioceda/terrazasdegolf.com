import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ClassNames from "classnames";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Components
import LanguageSelector from "./languageSelector";

// Styles
const StyledMenu = styled.div`
  backdrop-filter: blur(4px);
  background: rgba(2, 18, 23, 1) !important;
  bottom: 0;
  left: 0;
  padding: 3rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.125s ease !important;
  z-index: 88888;

  .languagues {
    display: inline-block;

    a {
      color: var(--white);
      display: block;
      font-size: 22px;
      font-weight: 500;
      transition: all 0.5s ease;

      &:nth-child(1) {
        width: 85px;
      }

      &:nth-child(2) {
        width: 80px;
      }

      &:hover {
        color: var(--manhattan);
        text-decoration: underline;
      }

      &.active {
        border-bottom: 2px solid var(--terracotta);
      }
    }
  }
`;

const NavLink = styled((props) => <AnchorLink {...props} />)`
  background: transparent;
  border-bottom: 2px solid transparent;
  color: var(--white);
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
  padding: 0;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    border-bottom: 2px solid var(--terracotta);
    color: var(--manhattan);
    text-decoration: none;
  }

  &:visited {
    color: var(--white) !important;
  }

  &:focus {
    outline: none;
  }

  &.bm-item {
    margin-left: 0;
  }

  &.active {
    border-bottom: 2px solid var(--terracotta);
    color: var(--white) !important;
  }
`;

const Label = styled.p`
  color: var(--acapulco);
  font-size: 22px;
  font-weight: 500;
`;

// Types
interface IMenuItemProps {
  anchor: string;
  name: string;
  translate: string;
}

interface IProps {
  menu: IMenuItemProps[];
  toggleMenu: () => void;
  open: boolean;
  onClick: (arg: number) => void;
  active: number;
  language: number;
  setLanguage: (arg: number) => void;
  current: number;
}

// Animations
const motionDefault = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.0125,
      delayChildren: 0.125,
    },
  },
};

const motionDefaultItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MenuVertical: React.FC<IProps> = ({
  menu,
  toggleMenu,
  open,
  onClick,
  active,
  language,
  setLanguage,
  current,
}) => {
  const { t } = useTranslation();

  const languagesList = {
    es: "Español",
    en: "English",
  };

  return (
    <StyledMenu className={`d-xl-none ${open ? "d-block" : "d-none"}`}>
      <motion.div
        initial="hidden"
        animate={`${open ? "visible" : ""}`}
        variants={motionDefault}
      >
        <motion.div variants={motionDefaultItem}>
          <NavLink
            to={`/#topPage`}
            stripHash
            onAnchorLinkClick={() => {
              toggleMenu();
              onClick(-1);
            }}
            className={ClassNames("text-capitalize mb-2", {
              active: active === -1,
            })}
          >
            {t(`home`)}
          </NavLink>
        </motion.div>

        {menu.map((menuItem, menuIndex) => (
          <motion.div variants={motionDefaultItem} key={menuIndex}>
            <NavLink
              to={`/${menuItem.anchor}`}
              stripHash
              onAnchorLinkClick={() => {
                toggleMenu();
                onClick(menuIndex);
              }}
              className={ClassNames(
                "text-capitalize mb-2",
                {
                  active: menuIndex === active,
                },
                {
                  active: menuItem.anchor === `#${current}`,
                }
              )}
              key={`menu-vertical-nav-${menuIndex}`}
            >
              {t(menuItem.translate)}
            </NavLink>
          </motion.div>
        ))}
        <hr className="my-2" />
        <motion.div variants={motionDefaultItem}>
          <Label className="mb-2">{t(`languages`)}</Label>
          <LanguageSelector
            languagesList={languagesList}
            toggleMenu={toggleMenu}
            language={language}
            setLanguage={setLanguage}
          />
        </motion.div>
      </motion.div>
    </StyledMenu>
  );
};

export default MenuVertical;
