import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import classNames from "classnames";
import Button from "react-bootstrap/Button";

// Assets
import CloseIcon from "./../images/svg/close.svg";

// Styles
const CookieConsent = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  border: 2px solid var(--gun-powder);
  bottom: 4px;
  left: 4px;
  position: fixed;
  right: 4px;
  width: calc(100% - 8px);
  z-index: 100;

  @media (min-width: 992px) {
    left: auto;
    width: 450px;
  }

  .close-modal {
    border-radius: 50%;
  }

  h3 {
    margin-bottom: 0;
  }

  p,
  .approve {
    font-size: 0.9rem;
  }
`;

const Close = styled((props) => <CloseIcon {...props} />)`
  height: 16px;
  width: 16px;
`;

const Cookie = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(true);

  const HandleCookies = () => {
    Cookies.set(process.env.GATSBY_WEBSITE_DOMAIN, "true", {
      expires: 365,
      path: "/",
      SameSite: "Strict",
      secure: true,
    });

    setShowModal(false);
  };

  const HandleClose = () => {
    setShowModal(false);
  };

  return (
    Cookies.get(process.env.GATSBY_WEBSITE_DOMAIN) !== "true" && (
      <CookieConsent className={classNames({ "d-none": !showModal })}>
        <div className="p-3 pb-4 w-100">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h3>{t(`cookies.heading`)}</h3>
            <Button
              type="button"
              variant="light"
              onClick={() => HandleClose()}
              className="close-modal"
              aria-label="Close Modal"
            >
              <Close />
            </Button>
          </div>
          <div>
            <p className="mb-3">{t(`cookies.description`)}</p>
            <Button
              type="button"
              variant="danger"
              className="w-100 approve"
              onClick={() => HandleCookies()}
            >
              {t(`cookies.button`)}
            </Button>
          </div>
        </div>
      </CookieConsent>
    )
  );
};

export default Cookie;
