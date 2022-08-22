import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/MAYS-Foundation-logo-dropshadow-1.png'
import callIcon from '../assets/images/call.png'
import handIcon from '../assets/images/heand.png'
import mailIcon from '../assets/images/mail.png'

const Header = () => {
    const [navbarIsActive, setNavbarIsActive] = useState(false);

    const toggleNavbarActive = () => {
        setNavbarIsActive(!navbarIsActive);
    }

  return (
    <header className="header_area">
        <div className="header_top">
            <div className="container">
                <div className="header_top_wrapper d-md-flex justify-content-between">
                    <div className="header_social text-center">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div> 
                    {/* <!-- header social --> */}

                    <div className="header_info d-none d-md-block">
                        <ul>
                            <li><img src={callIcon} alt="" /><a href="#">402.555.1234</a></li>
                            <li><img src={mailIcon} alt="" /><a href="#">info@maysomaha.org</a></li>
                            <li><img src={handIcon} alt="" /><a href="#">Become a Volunteer</a></li>
                        </ul>
                    </div> 
                    {/* <!-- header info --> */}
                </div> 
                {/* <!-- header top wrapper --> */}
            </div> 
            {/* <!-- container --> */}
        </div> 
        {/* <!-- header top --> */}

        <div className="header_navbar">
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="logo" height="65" />
                    </a> 
                    {/* <!-- logo --> */}

                    <button className={`navbar-toggler ${navbarIsActive ? "active" : ""}`} onClick={toggleNavbarActive} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                        <span className="toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                             <li>
                                <a className="active" href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us <i className="fa fa-angle-down"></i></a>

                                <ul className="sub-menu">
                                    <li><a href="about.html">About the Staff</a></li>
                                    <li><a href="volunteer.html">Volunteer</a></li>
                                </ul>
                            </li>
                            <li><a href="causes.html">Services <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="gangintervention.html">Gang Intervention</a></li>
                                    <li><a href="eveningreporting.html">Evening Reporting</a></li>
                                    <li><a href="familysupport.html">Family Support Services</a></li>
                                    <li><a href="heroes.html">HEROES Program</a></li>
                                </ul>
                            </li>
                            <li><a href="htw.html">Hood to the Woods</a></li>
                            <li><a href="blog.html">Gallery <i className="fa fa-angle-down"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Events</a></li>
                                    <li><a href="blog-details.html">More Events</a></li>
                                </ul>
                            </li>
                            <li><a href="news.html">News</a></li>
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