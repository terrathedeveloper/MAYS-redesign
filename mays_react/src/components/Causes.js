import React from "react";

const Causes = () => {
  return (
    <section className="causes_area pt-180 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon" />
                        <h3 className="title">We Need Your Help</h3>
                    </div> 
                    {/* <!-- section title --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_1 mt-30">
                        <div className="causes_image">
                            <img src="assets/images/campfire.jpg" alt="causes" />
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape" />
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="41"><span className="percentage">41%</span></div>
                                </div>
                            </div> 
                            {/* <!-- donate progress --> */}
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $12000</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $4900</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">Hood to the Woods</a></h4>
                            <p>Each summer, we host a class of 20 gang-affiliated youths for a campout in the woods. Through partnered
                                exercises and equal discourse, we break the cycle of violence within their generation.
                            </p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                    {/* <!-- single causes --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_2  mt-30">
                        <div className="causes_image">
                            <img src="assets/images/writing.jpg" alt="causes" />
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape" />
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="14"><span className="percentage">14%</span></div>
                                </div>
                            </div> 
                            {/* <!-- donate progress --> */}
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $4000</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $555</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">SkillShare</a></h4>
                            <p>Through access to a library of training materials in a range of subjects, we are able to refocus students'
                                energies from destructive activities into discovering previously unattainable passions and skills.
                            </p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                    {/* <!-- single causes --> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single_causes causes_bg causes_color_3  mt-30">
                        <div className="causes_image">
                            <img src="assets/images/teens.jpg" alt="causes" />
                            <ul className="causes_icon">
                                <li><a href="#"><i className="fa fa-camera"></i></a></li>
                                <li><a href="#"><i className="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div className="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape" />
                            </div>
                            <div className="causes_progress">
                                <div className="bar_inner">
                                    <div className="bar progress_line" data-width="16"><span className="percentage">16%</span></div>
                                </div>
                            </div> 
                            {/* <!-- donate progress --> */}
                        </div>
                        <div className="causes_content">
                            <ul className="causes_meta">
                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $17000</a></li>
                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $2750</a></li>
                            </ul>
                            <h4 className="causes_title"><a href="#">After-School Fund</a></h4>
                            <p>Our After-School Fund provides opportunities for students to engage with the community in safe, healthy,
                                and engaging ways. We provide tutoring, food and opportunities to socialize away from the streets.
                            </p>
                            <a href="#" className="more">Read More</a>
                        </div>
                    </div> 
                    {/* <!-- single causes --> */}
                </div>
                
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
  )
}

export default Causes;