import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonial_area">
        <div className="testimonial_image_wrapper_2">
            <div className="single_testimonial_image_2">
                <img src="images/tents.jpg" alt="testimonial" />
            </div> 
            {/* <!-- single testimonial image --> */}
            
            <div className="single_testimonial_image_2">
                <img src="images/testimonial-2.jpg" alt="testimonial" />
            </div> 
            {/* <!-- single testimonial image --> */}
            
            <div className="single_testimonial_image_2">
                <img src="images/testimonial-3.jpg" alt="testimonial" />
            </div> 
            {/* <!-- single testimonial image --> */}
        </div> 
        {/* <!-- testimonial image wrapper --> */}
        
        <div className="testimonial_content_area">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6">
                        <div className="testimonial_content_wrapper_2">
                           
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