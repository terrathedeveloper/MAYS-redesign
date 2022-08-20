import React from "react";

const DonorCard = ({imagePath, companyName}) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single_support d-flex align-items-center mt-30">
        <div className="support_logo">
          <img src={imagePath} alt="Logo" />
        </div>
        <div className="support_content media-body">
          <h5 className="title">{companyName}</h5>
        </div>
      </div>
      {/* <!-- support title --> */}
    </div>
  )
}

export default DonorCard;