import React from 'react';

const Header = () => {
  return (
    <header class="header_area">
        <div class="header_navbar header_navbar_3">
            <div class="container">
                <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/images/MAYS-Foundation-logo-dropshadow-1.png" alt="logo" height="65" />
                    </a> 
                    {/* <!-- logo --> */}

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="toggler-icon"></span>
                        <span class="toggler-icon"></span>
                        <span class="toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li><a href="mayshomepage.html">Home</a></li>
                            <li>
                                <a href="#">Pages <i class="fa fa-angle-down"></i></a>

                                <ul class="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="volunteer.html">Volunteer</a></li>
                                </ul>
                            </li>
                            <li><a href="causes.html">Our Cuases <i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="causes/cause-details.html">Causes Details</a></li>
                                    <li><a href="causes/hoodtowoods-details.html">Hood to the Woods</a></li>
                                </ul>
                            </li>
                            <li><a href="event.html">Events</a></li>
                            <li><a href="blog/blog.html">Blog <i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="blog/blog.html">Blog</a></li>
                                    <li><a href="blog/blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div> 
                    {/* <!-- navbar collapse --> */}

                    <div class="navbar_btn d-none d-sm-block">
                        <a class="main-btn" href="#"><i class="fa fa-heart"></i> Donate Now</a>
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