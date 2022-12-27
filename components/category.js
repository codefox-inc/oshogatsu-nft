import React from "react";

import PropTypes from "prop-types";

const Category = (props) => {
  return (
    <>
      <a href={props.link}>
        <article className="category-services-card category-card">
          <div className="category-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="category-image"
            />
          </div>
          <h3 className="Heading3">{props.name}</h3>
          <span className="category-text1">{props.sub_name}</span>
        </article>
      </a>
      <style jsx>
        {`
          .category-services-card {
            align-items: center;
            border-radius: 0px;
            text-decoration: none;
            background-color: transparent;
          }
          .category-container {
            width: 152px;
            height: 152px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-color: var(--dl-color-scheme-white);
            border-width: 4px;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .category-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .category-text1 {
            padding-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  );
};

Category.defaultProps = {
  image_alt: "image",
  image_src: "https://play.teleporthq.io/static/svg/placeholders/no-image.svg",
  name: "カテゴリー",
  link: "",
  sub_name: "サブカテゴリー",
};

Category.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  sub_name: PropTypes.string,
};

export default Category;
