import React from "react";

const SocialsWidget = ({ context, social = null }) => {
  const teamMemberClasses = "vounteer_social"
  const pageClasses = "causes_details_share d-flex"
 
  let styling;

  switch (context) {
    case "page":
      styling = pageClasses
      break;
    case "teamMember":
      styling = teamMemberClasses
      break;
    default:
      styling = pageClasses
      break;
  }

  return (
    <>
      <div className={styling}>
        {context == "page" && <span>Share</span> }
        <ul className="social">
          <li><a href={social?.facebook || "#"}><i className="fa fa-facebook-square"></i></a></li>
          <li><a href={social?.twitter || "#"}><i className="fa fa-twitter-square"></i></a></li>
          <li><a href={social?.linkedin || "#"}><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href={social?.instagram || "#"}><i className="fa fa-instagram"></i></a></li>
        </ul>
      </div>
      {/* <!-- volunteer social --> */}
    </>
  )
}

export default SocialsWidget;