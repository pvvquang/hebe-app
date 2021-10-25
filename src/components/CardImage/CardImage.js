import PropTypes from "prop-types";
import React from "react";
import "./CardImage.scss";

CardImage.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string,
};

function CardImage({ item, className = "", paddingTop, src }) {
  if (!item && !src) return null;
  return (
    <div
      className={`card__img ${className}`}
      style={{
        backgroundImage: `url(${item ? item.photoURL[0] : src})`,
        paddingTop: paddingTop,
      }}
    ></div>
  );
}

export default CardImage;
