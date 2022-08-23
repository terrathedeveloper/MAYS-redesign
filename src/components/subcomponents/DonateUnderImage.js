import React from "react";

// images for use
import shape13 from "../../assets/images/shape/shape-13.png";
import grayBg from "../../assets/images/gray-bg.jpg";

const DonateUnderImage = () => {
  const detailsShapeStyle = {
    backgroundImage: `url(${shape13})`,
  }
  const grayBgStyle = {
    backgroundImage: `url(${grayBg})`,
  }

  return (
    <div className="causes_details_donate bg_cover" style={grayBgStyle}>
      <div className="causes_details_shape_1 bg_cover" style={detailsShapeStyle}></div>
      {/* -- causes shape --> */}
      <div className="donate_dollar d-flex justify-content-between">
        <span>Raised $17000</span>
        <span>Goal $37000</span>
      </div>
      {/* <!-- donate dollar --> */}
      <div className="donate_progress">
        <div className="bar_inner">
          <div className="bar progress_line" data-width="59"><span className="percentage">59%</span></div>
        </div>
      </div>
      {/* <!-- donate progress --> */}

      <div className="causes_donate_many d-flex flex-wrap">
        <a className="active" href="#">$5</a>
        <a href="#">$5</a>
        <a href="#">$10</a>
        <a href="#">$15</a>
        <a href="#">$20</a>
        <a href="#">$25</a>

        <div className="donate_many_form d-flex">
          <input type="text" placeholder="$5" />
        </div>

        <button className="main-btn">Donate Now</button>

      </div>
      {/* <!-- causes donate many --> */}
      <div className="causes_details_shape_2 bg_cover" style={detailsShapeStyle}></div>
      {/* <!-- causes shape --> */}
    </div>
  )
}

export default DonateUnderImage;