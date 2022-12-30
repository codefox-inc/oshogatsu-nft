import React from "react";

import PropTypes from "prop-types";
import { MyConnectButton } from "./my-connect-button";

const NavBar = (props) => {
  return (
    <>
      <header data-role="Header" className="nav-bar-header">
        <div className="nav-bar-max-width">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="nav-bar-image"
          />
          <MyConnectButton />
        </div>
      </header>
      <style jsx>
        {`
          .nav-bar-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .nav-bar-max-width {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .nav-bar-image {
            height: 2rem;
          }
          .nav-bar-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav-bar-register {
            margin-left: var(--dl-space-space-twounits);
          }
          @media (max-width: 767px) {
            .nav-bar-max-width {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .nav-bar-max-width {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .nav-bar-register {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  );
};

NavBar.defaultProps = {
  image_src: "https://play.teleporthq.io/static/svg/placeholders/no-image.svg",
  button: "Wallet Connect",
  image_alt: "logo",
};

NavBar.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
};

export default NavBar;
