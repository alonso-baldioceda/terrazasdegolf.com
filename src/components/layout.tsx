import React, { useState, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import SimpleReactLightbox from "simple-react-lightbox";

// Components
import MenuClose from "./menuClose";
import Header from "./header";
import MenuVertical from "./menuVertical";
import Footer from "./footer";
// import Cookie from "./cookie";
import Chat from "./chat";

// Translate
import i18next from "./../i18e";

React.useLayoutEffect = React.useEffect;

interface IProps {
  children: ReactNode | ReactNode[];
  current: number;
  active: number;
  onClick: (id: number) => void;
}

const Layout: React.FC<IProps> = ({ children, current, active, onClick }) => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
          image
          menuLinks {
            name
            anchor
            translate
          }
          phone
          phoneRef
          whatsapp
          messenger
          facebook
        }
      }
    }
  `);

  const [open, setOpen] = useState(false);

  const [language, setLanguage] = useState(0);

  const { menuLinks, phone, phoneRef, whatsapp, messenger, facebook } =
    data.site.siteMetadata;

  const toggleMenu = () => {
    document.body.style.overflow = !open ? "hidden" : "scroll";
    setOpen(!open);
  };

  return (
    <I18nextProvider i18n={i18next}>
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div id="topPage"></div>
      <MenuClose toggleMenu={toggleMenu} open={open} />
      <Header
        menu={menuLinks}
        phone={phone}
        phoneRef={phoneRef}
        facebook={facebook}
        onClick={onClick}
        active={active}
        language={language}
        setLanguage={setLanguage}
        current={current}
      />
      <SimpleReactLightbox>
        <main className="main" id="main">
          <MenuVertical
            menu={menuLinks}
            toggleMenu={toggleMenu}
            open={open}
            onClick={onClick}
            active={active}
            language={language}
            setLanguage={setLanguage}
            current={current}
          />
          {children}
        </main>
      </SimpleReactLightbox>
      <Footer menu={menuLinks} />
      {/* TODO: Fix cookie */}
      {/* <Cookie /> */}
      <Chat wa={whatsapp} me={messenger} />
    </I18nextProvider>
  );
};

export default Layout;
