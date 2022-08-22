import React from "react";

// images for use
import shape12 from "../assets/images/shape/shape-12.png";
import shape13 from "../assets/images/shape/shape-13.png";
import grayBg from "../assets/images/gray-bg.jpg";
import services1 from "../assets/images/services-1.jpg";
import hood2woodsimage from "../assets/images/hoodtowoods-750x420.jpeg";
import helicopter from "../assets/images/helicopter.jpg";
import gangInt from "../assets/images/gangintervention.jpg";
import cause1 from "../assets/images/causes-1.jpg";
import cause2 from "../assets/images/causes-2.jpg";
import cause3 from "../assets/images/causes-3.jpg";
import sidebarIcon from "../assets/images/sidebar_icon.png";

const PageContent = () => {
  const servicesShapeStyle = {
    backgroundImage: `url(${shape12})`,
  }
  const detailsShapeStyle = {
    backgroundImage: `url(${shape13})`,
  }
  const grayBgStyle = {
    backgroundImage: `url(${grayBg})`,
  }
  const services1Style = {
    backgroundImage: `url(${services1})`,
  }

  return (
    <section className="causes_area pt-80 pb-130">
        <div className="services_shape_1" style={servicesShapeStyle}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="causes_details mt-20">
                        <div className="causes_details_image">
                            <img src={hood2woodsimage} alt="causes details" />
                        </div>
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
                        <div className="causes_details_content">
                            <h3 className="causes_details_title">Widen the borders of possibility</h3>
                            <p>Funded by a grant through the City of Omaha Historical Society, the MAYS Foundation recently hosted a pilot program camping trip to Buena Vista, Colorado, and Colorado Springs, Colorado, for ten inner-city youths. The program was designed to expose the youths to novel experiences, far outside their norms, to challenge their fears and to build self-confidence in their abilities. Guides pressed attendees to overcome fears through rock-climbing and zip-lining before a group trail-ride on horseback. For many program students, it was their first encounter with real horses! </p>
                            <p>Once settled in Buena Vista, the campers spent two days white-water rafting and exploring the area around the Arkansas River. Building upon their previous experience climbing, the group rappelled down a mountain cliff, paired with partners from competing gang groups. Each team of campers was awarded points based on their ability to work cooperatively and their commitment to journaling about their experiences. The final goal of their involvement was a share of a prize pot, with the winning team receiving an additional $250 each.</p>
                        </div>
                        <blockquote className="blockquote">
                            <i className="fa fa-quote-right"></i>
                            <p><br/> [...] all reported having exited the program with a heightened sense of self-worth [...]</p>
                        </blockquote>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="causes_details_image">
                                    <img src={helicopter} alt="details" />
                                </div> 
                                {/* <!-- causes details image --> */}
                            </div>
                            <div className="col-sm-6">
                                <div className="causes_details_image">
                                    <img src={gangInt} alt="details" />
                                </div> 
                                {/* <!-- causes details image --> */}
                            </div>
                        </div> 
                        {/* <!-- row --> */}
                        <div className="causes_details_content">
                            <p>The majority of campers had spent their entire lives within the city of Omaha, and all reported having exited the program with a heightened sense of self-worth after facing the challenges set forth. Our mission throughout the program was to break down personal barriers to communication and overcoming internal adversities that drive many youth to quit. It is often observed that youth isolate themselves and feel discouraged when tested. As a response, Hood to the Woods seeks to remove this negative impression and reset their confidence through encouraging pressure and detachment from self-sabotaging habits.</p>
                            <p>Only through providing opportunities for youths outside of their daily lives can they be instilled with the hope for their own futures. Daily experiences, reinforcing the small sizes of their worlds, can destroy a child's passion to explore and thereby grow. Be it due to financial difficulties at home or destructive environments around them, the Hood to the Woods program can combat weakened determination, tapping into a dormant part of their minds and reawakening critical thinking and imagination. This drive to see a world around them which does not yet exist is the fire which drives them toward life-long progress.</p>
                        </div>
                        
                        <div className="causes_details_share d-flex">
                            <span>Share</span>
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                            </ul>
                        </div>
                    </div> 
                    {/* <!-- causes details --> */}
                    <div className="causes_details_form">
                        <h3 className="causes_details_form_title">Post Comment</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        
                        <form action="#">
                            <div className="single_form">
                                <input type="text" placeholder="Name" />
                            </div> 
                            {/* <!-- single form --> */}
                            <div className="single_form">
                                <input type="email" placeholder="Email" />
                            </div> 
                            {/* <!-- single form --> */}
                            <div className="single_form">
                                <textarea placeholder="Comment"></textarea>
                            </div> 
                            {/* <!-- single form --> */}
                            <div className="single_form">
                                <button className="main-btn">Post Comment</button>
                            </div> 
                            {/* <!-- single form --> */}
                        </form>
                    </div> 
                    {/* <!-- causes details form --> */}
                </div>
                <div className="col-lg-4">
                    <div className="sidebar mt-50">
                        <div className="sidebar_search">
                            <div className="search_form">
                                <input type="search" placeholder="Search" />
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>  
                        {/* <!-- sidebar search --> */}
                        
                        <div className="sidebar_post mt-30">
                            <h4 className="sidebar_title">Latest Causes</h4>
                            <ul>
                                <li>
                                    <div className="single_sidebar_post d-flex">
                                        <div className="sidebar_post_thumb">
                                            <img src={cause1} alt="causes" />
                                        </div>
                                        <div className="sidebar_post_content media-body">
                                            <h4 className="post_title"><a href="#">Save water resourses nigeria</a></h4>
                                            <ul className="causes_meta">
                                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                                            </ul>
                                        </div>
                                    </div> 
                                    {/* <!-- single sidebar post --> */}
                                </li>
                                <li>
                                    <div className="single_sidebar_post d-flex">
                                        <div className="sidebar_post_thumb">
                                            <img src={cause2} alt="causes" />
                                        </div>
                                        <div className="sidebar_post_content media-body">
                                            <h4 className="post_title"><a href="#">Home collect for child namibia</a></h4>
                                            <ul className="causes_meta">
                                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                                            </ul>
                                        </div>
                                    </div> 
                                    {/* <!-- single sidebar post --> */}
                                </li>
                                <li>
                                    <div className="single_sidebar_post d-flex">
                                        <div className="sidebar_post_thumb">
                                            <img src={cause3} alt="causes" />
                                        </div>
                                        <div className="sidebar_post_content media-body">
                                            <h4 className="post_title"><a href="#">Pure watar for nigerian poor kids</a></h4>
                                            <ul className="causes_meta">
                                                <li><a href="#"><i className="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                                <li><a href="#"><i className="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                                            </ul>
                                        </div>
                                    </div> 
                                    {/* <!-- single sidebar post --> */}
                                </li>
                            </ul>
                        </div> 
                        {/* <!-- sidebar post --> */}
                        
                        <div className="sidebar_category mt-30">
                            <h4 className="sidebar_title">Categories</h4>
                            <ul className="category_list">
                                <li><a href="#">Charity<span>(11)</span></a></li>
                                <li><a href="#">Fundrising<span>(02)</span></a></li>
                                <li><a href="#">Water<span>(0)</span></a></li>
                                <li><a href="#">Cancer Treatment<span>(231)</span></a></li>
                                <li><a href="#">Health<span>(45)</span></a></li>
                            </ul>
                        </div> 
                        {/* <!-- sidebar category --> */}
                        
                        <div className="sidebar_call_action mt-30 text-center bg_cover" style={services1Style}>
                            <img src={sidebarIcon} alt="Icon" />
                            <h4 className="action_title">Looking for volunteer job</h4>
                            <a href="#" className="main-btn">Be a Volunteer</a>
                        </div> 
                        {/* <!-- sidebar call action --> */}
                        
                        <div className="sidebar_tag mt-30">
                            <h4 className="sidebar_title">Tags</h4>
                            <ul className="tag_list">
                                <li><a href="#">Charity</a></li>
                                <li><a href="#">Crowdfunding</a></li>
                                <li><a href="#">Animal</a></li>
                                <li><a href="#">Hopes</a></li>
                                <li><a href="#">Fundrise</a></li>
                                <li><a href="#">food</a></li>
                            </ul>
                        </div>
                    </div> 
                    {/* <!-- sidebar --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
  )
}

export default PageContent;