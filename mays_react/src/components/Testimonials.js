import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// images for testimonial carousel
import tents from "../assets/images/tents.jpg";


const Testimonials = () => {

    const backgroundImgCarouselSettings = {
        showThumbs: false,
        showArrows: false,
        showStatus: false,
        showIndicators: false,
    }

    const testimonialContentCarouselSettings = {
        showThumbs: false,
        showArrows: false,
        showStatus: false,
        showIndicators: true,
        autoPlay: true,
        infiniteLoop: true,
        interval: 3500,
    }

  return (
    <section className="testimonial_area">
        <div className="testimonial_image_wrapper_2">
            <Carousel {...backgroundImgCarouselSettings}>
                <div className="single_testimonial_image_2">
                    <img src={tents} alt="testimonial" />
                </div> 
                {/* <!-- single testimonial image --> */}
                
                {/* <div className="single_testimonial_image_2">
                    <img src="images/testimonial-2.jpg" alt="testimonial" />
                </div>  */}
                {/* <!-- single testimonial image (for reference) --> */}
            </Carousel>
        </div> 
        {/* <!-- testimonial image wrapper --> */}
        
        <div className="testimonial_content_area">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6">
                        <div className="testimonial_content_wrapper_2">
                            <Carousel {...testimonialContentCarouselSettings} animationHandler="fade">
                            
                                <div className="single_testimonial_content text-center">
                                    <i className="fa fa-quote-right"></i>
                                    <h4 className="testimonial_title">Testimonial</h4>
                                    <p>I noticed a difference in my son the very next day after our family assessment. He remembers what brings him joy, and he's committed to reconnecting to it. </p>
                                    <h6 className="author_name">Tamira Smith</h6>
                                </div> 
                                {/* <!-- single testimonial content --> */}
                            
                                <div className="single_testimonial_content text-center">
                                    <i className="fa fa-quote-right"></i>
                                    <h4 className="testimonial_title">Testimonial</h4>
                                    <p>Thank you SO MUCH for bringing us our child back! You've been the blessing I prayed so long for!</p>
                                    <h6 className="author_name">Imani Nelson</h6>
                                </div> 
                                {/* <!-- single testimonial content --> */}
                            
                                <div className="single_testimonial_content text-center">
                                    <i className="fa fa-quote-right"></i>
                                    <h4 className="testimonial_title">Testimonial</h4>
                                    <p>It's been two years since I sent Brandon on the camping trip, and I still see him using the tools taught to him in his daily life. </p>
                                    <h6 className="author_name">Ronnell Cook</h6>
                                </div> 
                                {/* <!-- single testimonial content --> */}
                            </Carousel>
                        </div> 
                        {/* <!-- row --> */}
                    </div>
                </div> 
                {/* <!-- row --> */}
            </div> 
            {/* <!-- container --> */}
        </div> 
        {/* <!-- testimonial content area --> */}
    </section>
  )
}

export default Testimonials;