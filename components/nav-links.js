import React from "react";

import PropTypes from "prop-types";

const NavLinks = (props) => {
  return (
    <>
      <nav className={`nav-links-nav ${props.rootClassName} `}>
        <span className="nav-links-text Navigation-Link">{props.link1}</span>
        <span className="nav-links-text1 Navigation-Link">{props.link2}</span>
        <span className="nav-links-text2 Navigation-Link">{props.link3}</span>
        <span className="nav-links-text3 Navigation-Link">{props.link4}</span>
      </nav>
      <style jsx>
        {`
          .nav-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav-links-text {
            cursor: pointer;
            transition: 0.3s;
          }
          .nav-links-text:hover {
            color: var(--dl-color-scheme-brown);
          }
          .nav-links-text1 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .nav-links-text1:hover {
            color: var(--dl-color-scheme-brown);
          }
          .nav-links-text2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .nav-links-text2:hover {
            color: var(--dl-color-scheme-brown);
          }
          .nav-links-text3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .nav-links-text3:hover {
            color: var(--dl-color-scheme-brown);
          }

          @media (max-width: 767px) {
            .nav-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .nav-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-links-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  );
};

NavLinks.defaultProps = {
  link3: "Portofolio",
  rootClassName: "",
  link2: "About",
  link4: "Blog",
  link1: "Home",
};

NavLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
};

export default NavLinks;
