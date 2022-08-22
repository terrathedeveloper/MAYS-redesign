import React from "react";

// images for sidebar
import cause1 from "../../assets/images/causes-1.jpg";
import cause2 from "../../assets/images/causes-2.jpg";
import cause3 from "../../assets/images/causes-3.jpg";
import sidebarIcon from "../../assets/images/sidebar_icon.png";
import services1 from "../../assets/images/services-1.jpg";

const PageSidebar = ({search = false, causes = false, categories = false, cta = false, tags = false}) => {
  const services1Style = {
    backgroundImage: `url(${services1})`,
  }

  return (
    <div className="col-lg-4">
      <div className="sidebar mt-50">

        {search && 
          <div className="sidebar_search">
            <div className="search_form">
              <input type="search" placeholder="Search" />
              <button><i className="fa fa-search"></i></button>
            </div>
          </div>
        }
        {/* <!-- sidebar search --> */}

        {causes &&
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
        }
        {/* <!-- sidebar post --> */}

        {categories && 
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
        }
        {/* <!-- sidebar category --> */}

        {cta && 
          <div className="sidebar_call_action mt-30 text-center bg_cover" style={services1Style}>
            <img src={sidebarIcon} alt="Icon" />
            <h4 className="action_title">Looking for volunteer job</h4>
            <a href="#" className="main-btn">Be a Volunteer</a>
          </div>
        }
        {/* <!-- sidebar call action --> */}

        {tags &&
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
        }
        {/* <!-- sidebar tag --> */}
      </div>
      {/* <!-- sidebar --> */}
    </div>
  )
}

export default PageSidebar;