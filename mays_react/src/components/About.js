import React from "react"; 

const About = () => {
  return (
    <section class="about_area_2 pt-80 pb-130">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about_video mt-50">
                    <img src="assets/images/about.jpg" alt="about" />
                    <a href="https://www.youtube.com/watch?v=WKUjCCOcLFY" class="video-popup">
                        <i class="fa fa-play"></i>
                        <img src="assets/images/shape/shape-3.png" alt="shape" />
                    </a>
                </div>
                 {/* <!-- about video --> */}
            </div>
            <div class="col-lg-6">
                <div class="about_content_2 mt-45">
                    <h4 class="about_title">We've kept 68 kids out of jails since 2009</h4>
                    <p>Headquartered in Omaha, Nebraska, the Mays Foundation has built a recognizable reputation for 
                        providing youth with the opportunity to learn and grow in a safe, supportive environment, free from 
                        the bondage of the streets.</p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="single_about_items_2 d-flex">
                                <div class="items_icon">
                                    <img src="assets/images/ab-icon-1.png" alt="icon" />
                                </div>
                                <div class="items_content media-body">
                                    <h5 class="item_title">20+ Partners</h5>
                                    <p>Local businesses continually show our youth the support they need to build confidence</p>
                                </div>
                            </div> 
                            {/* <!-- single about items --> */}
                        </div>
                        <div class="col-md-6">
                            <div class="single_about_items_2 d-flex">
                                <div class="items_icon">
                                    <img src="assets/images/ab-icon-2.png" alt="icon" />
                                </div>
                                <div class="items_content media-body">
                                    <h5 class="item_title">100+ Graduates</h5>
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