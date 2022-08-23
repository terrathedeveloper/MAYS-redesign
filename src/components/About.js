import React from "react";

const About = () => {
    const videoIframeStyle = {
        width: 100 + "%",
        height: 100 + "%",
        top: 0,
        left: 0,
        position: "absolute",
    }

    const videoControlsStyle = {
        display: "block",
        width: 100 + "%",
        height: "auto",
        paddingBottom: "56.25%",
    }

    const homepageVideoSrc = "https://assets.scrippsdigital.com/cms/videoIframe.html?&vpost=https://x-default-stgec.uplynk.com/ausw/slices/53f/51d61e80c20d4f009f311dfdef7a8a31/53fb2d4e13504a4dbd6e2e83bed816a9/poster_77d714408dde4fd69869a68561de3982.jpg&host=www.3newsnow.com&title=Guiding%20at-risk%20youth%20away%20from%20gang%20culture&m3u8=https://content.uplynk.com/53fb2d4e13504a4dbd6e2e83bed816a9.m3u8&purl=/news/local-news/breaking-gang-culture-in-the-great-outdoors&story=0&ex=1&s=kmtv"

    return (
        <section className="about_area_2 pt-80 pb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about_video mt-50">
                            <div className="scripps_iframe_embed" style={{position: "relative"}}>
                                <div style={videoControlsStyle}></div>
                                <iframe 
                                    style={videoIframeStyle} 
                                    border="0" 
                                    height="100%" 
                                    frameBorder="0" 
                                    webkitallowfullscreen="" 
                                    allowFullScreen="" 
                                    mozallowfullscreen="" 
                                    scrolling="no" 
                                    src={homepageVideoSrc}
                                >
                                </iframe>
                            </div>
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
                                            <img src="images/ab-icon-1.png" alt="icon" />
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
                                            <img src="images/ab-icon-2.png" alt="icon" />
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