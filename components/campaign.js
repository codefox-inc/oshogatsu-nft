import React from "react";

import PropTypes from "prop-types";

const Campaign = (props) => {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer noopener">
        <div className="campaign-gallery">
          <div className="campaign-container">
            <img
              alt={props.alt}
              src={props.image_src}
              className="campaign-image"
            />
          </div>
          <div className="campaign-container1">
            <img
              alt={props.alt}
              src={props.image_src_mobile}
              className="campaign-image1"
            />
          </div>
        </div>
      </a>
      <style jsx>
        {`
          .campaign-gallery {
            width: 100%;
            display: flex;
            grid-gap: 20px;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .campaign-container {
            width: 100%;
            display: flex;
            max-width: 1080px;
            align-items: stretch;
          }
          .campaign-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .campaign-container1 {
            width: 80%;
            display: none;
            align-self: stretch;
            margin-left: auto;
            margin-right: auto;
          }
          .campaign-image1 {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          @media (max-width: 991px) {
            .campaign-gallery {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .campaign-container {
              display: none;
            }
            .campaign-container1 {
              display: unset;
            }
          }
        `}
      </style>
    </>
  );
};

Campaign.defaultProps = {
  image_src_mobile: "/playground_assets/crypto-banner-654%C3%97336-1200w.png",
  alt: "キャンペーン",
  link: "",
  image_src: "/playground_assets/crypto-banner-1440%C3%97272-1100w.png",
};

Campaign.propTypes = {
  image_src_mobile: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  image_src: PropTypes.string,
};

export default Campaign;
