import React from "react";

const TeamMember = ({ name, title, image, social, color_num }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className={`single_volunteer mt-30 volunteer_color_${color_num}`}>
          <div className="volunteer_image">
              <img src={image} alt="Volunteer" />
              <div className="volunteer_social">
                  <ul className="social">
                      <li><a href={social.facebook || "#"}><i className="fa fa-facebook-square"></i></a></li>
                      <li><a href={social.twitter || "#"}><i className="fa fa-twitter-square"></i></a></li>
                      <li><a href={social.linkedin || "#"}><i className="fa fa-linkedin-square"></i></a></li>
                      <li><a href={social.instagram || "#"}><i className="fa fa-instagram"></i></a></li>
                  </ul>
              </div> 
              {/* <!-- volunteer social --> */}
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