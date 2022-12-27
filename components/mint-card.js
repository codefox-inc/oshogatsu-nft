import React from "react";

import PropTypes from "prop-types";
import { GasFreeMintButton } from "./gas-free-mint-button";

const MintCard = (props) => {
  return (
    <>
      <div>
        <article className={`mint-card-speaker-card ${props.rootClassName} `}>
          <div className="mint-card-container">
            <div className="mint-card-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="mint-card-image"
              />
            </div>
          </div>
          <span className="mint-card-first-name Content">
            {props.corp_name}
          </span>
          <h3 className="mint-card-first-name1 Heading3">{props.item_name}</h3>
          <div className="mint-card-container1">
            <GasFreeMintButton name={props.item_name} />
          </div>
        </article>
      </div>
      <style jsx>
        {`
          .mint-card-speaker-card {
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 320px;
            min-width: 320px;
            transition: 0.3s;
            align-items: flex-start;
            border-color: var(--dl-color-scheme-darkgray50);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-scheme-white);
          }

          .mint-card-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-card-image-container {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            max-height: 500px;
            min-height: 500px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-scheme-white);
          }
          .mint-card-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            margin-top: 0px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-card-first-name {
            font-style: normal;
          }
          .mint-card-first-name1 {
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .mint-card-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-card-button {
            width: var(--dl-size-size-large);
            transition: 0.3s;
          }
        `}
      </style>
    </>
  );
};

MintCard.defaultProps = {
  rootClassName: "",
  item_name: "ITEM NAME A",
  link: "",
  corp_name: "CORP NAME",
  image_alt: "image",
  image_src: "/playground_assets/img_0675-400h.png",
  button: "発行する",
};

MintCard.propTypes = {
  rootClassName: PropTypes.string,
  item_name: PropTypes.string,
  link: PropTypes.string,
  corp_name: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  button: PropTypes.string,
};

export default MintCard;
