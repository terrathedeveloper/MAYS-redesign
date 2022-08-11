import React from 'react';

const Header = () => {
  return (
    <header className="header_area">
        <div className="header_navbar header_navbar_3">
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="index.html">
                        <img src="assets/images/MAYS-Foundation-logo-dropshadow-1.png" alt="logo" height="65" />
                    </a> 
                    {/* <!-- logo --> */}

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li><a href="mayshomepage.html">Home</a></li>
                            <li>
                                <a href="#">Pages <i className="fa fa-angle-down"></i></a>

                                <ul className="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="volunteer.html">Volunteer</a></li>
                                </ul>
                            </li>
                            <li><a href="causes.html">Our Cuases <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="causes/cause-details.html">Causes Details</a></li>
                                    <li><a href="causes/hoodtowoods-details.html">Hood to the Woods</a></li>
                                </ul>
                            </li>
                            <li><a href="event.html">Events</a></li>
                            <li><a href="blog/blog.html">Blog <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="blog/blog.html">Blog</a></li>
                                    <li><a href="blog/blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div> 
                    {/* <!-- navbar collapse --> */}

                    <div className="navbar_btn d-none d-sm-block">
                        <a className="main-btn" href="#"><i className="fa fa-heart"></i> Donate Now</a>
                    </div>

                </nav> 
                {/* <!-- navbar --> */}
            </div> 
            {/* <!-- container --> */}
        </div> 
        {/* <!-- header navbar --> */}
    </header>
  )
}

export default Header;