import React from "react";
import DonorCard from "./subcomponents/DonorCard";
import TeamMember from "./subcomponents/TeamMember";

const Team = () => {
  return (
    <section className="volunteer_area pt-130 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="images/section_icon.png" alt="Icon"/ >
                        <h3 className="title">Our Team</h3>
                    </div> 
                    {/* <!-- section title --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
            <div className="row">
                <TeamMember 
                    name="Rodney Evans"
                    title="CEO"
                    image="images/rodney.jpg"
                    social={{
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                        instagram: "#"
                    }}
                    color_num="1"
                />
                <TeamMember 
                    name="Patrick Taylor"
                    title="Director of Youth Dev"
                    image="images/patrick.jpg"
                    social={{
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                        instagram: "#"
                    }}
                    color_num="2"
                />
                <TeamMember 
                    name="Tiffany Duncan"
                    title="Director of Education"
                    image="images/tiffany.jpg"
                    social={{
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                        instagram: "#"
                    }}
                    color_num="3"
                />
                <TeamMember 
                    name="Staff"
                    title="Support"
                    image="images/staff.jpg"
                    social={{
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                        instagram: "#"
                    }}
                    color_num="4"
                />
            </div> 
            {/* <!-- row --> */}
            <div className="volunteer_support mt-125">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="support_title text-center">
                            <h4 className="title">We trust these donors for their support</h4>
                        </div> 
                        {/* <!-- support title --> */}
                    </div>
                </div> 
                {/* <!-- row --> */}
                <div className="row">
                    <DonorCard 
                        imagePath="images/support_logo-1.jpg"
                        companyName="ARC LTD"
                    />
                    <DonorCard 
                        imagePath="images/support_logo-2.jpg"
                        companyName="Heart dols"
                    />
                    <DonorCard 
                        imagePath="images/support_logo-3.jpg"
                        companyName="Helcika"
                    />
                    <DonorCard 
                        imagePath="images/support_logo-4.jpg"
                    />
                    
                </div> 
                {/* <!-- row --> */}
            </div> 
            {/* <!-- volunteer support --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
  )
}

export default Team;