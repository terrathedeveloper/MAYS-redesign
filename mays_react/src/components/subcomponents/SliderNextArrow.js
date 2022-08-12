import React from "react";

const SliderNextArrow = props => {
  const { onClick } = props;

  return (
    <span className="next slick-arrow" style={{ display: "block" }} onClick={onClick}>
      <i className="fa fa-angle-right"></i>
    </span>
  );
}

export default SliderNextArrow;