import React from "react";
import SocialsWidget from "./SocialsWidget";

const TeamMember = ({ name, title, image, social, color_num }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className={`single_volunteer mt-30 volunteer_color_${color_num}`}>
          <div className="volunteer_image">
              <img src={image} alt="Volunteer" />
              <SocialsWidget context="teamMember" social={social} />
          </div>
          <div className="volunteer_content d-flex align-items-center justify-content-center">
              <div className="content_wrapper">
                  <h5 className="volunteer_name"><a href="#">{name}</a></h5>
                  <p>{title}</p>
              </div>
          </div>
      </div> 
      {/* <!-- single volunteer --> */}
    </div>
  )
}

export default TeamMember;