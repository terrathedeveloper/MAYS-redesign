import React from "react";

const SliderPrevArrow = props => {
  const { onClick } = props;

  return (
    <span className="prev slick-arrow" style={{ display: "block" }} onClick={onClick}>
      <i className="fa fa-angle-left"></i>
    </span>
  );
}

export default SliderPrevArrow;