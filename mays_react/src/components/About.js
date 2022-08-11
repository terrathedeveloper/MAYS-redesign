import React from "react"; 

const About = () => {
  return (
    <section className="about_area_2 pt-80 pb-130">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="about_video mt-50">
                    <img src="assets/images/about.jpg" alt="about" />
                    <a href="https://www.youtube.com/watch?v=WKUjCCOcLFY" className="video-popup">
                        <i className="fa fa-play"></i>
                        <img src="assets/images/shape/shape-3.png" alt="shape" />
                    </a>
                </div>
                 {/* <!-- about video --> */}
            </div>
            <div className="col-lg-6">
                <div className="about_content_2 mt-45">
                    <h4 className="about_title">We've kept 68 kids out of jails since 2009</h4>
                    <p>Headquartered in Omaha, Nebraska, the Mays Foundation has built a recognizable reputation for 
                        providing youth with the opportunity to learn and grow in a safe, supportive environment, free from 
                        the bondage of the streets.</p>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single_about_items_2 d-flex">
                                <div className="items_icon">
                                    <img src="assets/images/ab-icon-1.png" alt="icon" />
                                </div>
                                <div className="items_content media-body">
                                    <h5 className="item_title">20+ Partners</h5>
                                    <p>Local businesses continually show our youth the support they need to build confidence</p>
                                </div>
                            </div> 
                            {/* <!-- single about items --> */}
                        </div>
                        <div className="col-md-6">
                            <div className="single_about_items_2 d-flex">
                                <div className="items_icon">
                                    <img src="assets/images/ab-icon-2.png" alt="icon" />
                                </div>
                                <div className="items_content media-body">
                                    <h5 className="item_title">100+ Graduates</h5>
                                    <p>Each year, our program enrolls ~20 gang-affiliated youths for mentorship and growth</p>
                                </div>
                            </div> 
                            {/* <!-- single about items --> */}
                        </div>
                    </div> 
                    {/* <!-- row --> */}
                </div> 
                {/* <!-- about content --> */}
            </div>
        </div> 
        {/* <!-- row --> */}
    </div> 
    {/* <!-- container --> */}
</section>
  )
}

export default About;