import React from "react";

const Testimonials = () => {
  return (
    <section class="testimonial_area">
        <div class="testimonial_image_wrapper_2">
            <div class="single_testimonial_image_2">
                <img src="assets/images/tents.jpg" alt="testimonial" />
            </div> 
            {/* <!-- single testimonial image --> */}
            
            <div class="single_testimonial_image_2">
                <img src="assets/images/testimonial-2.jpg" alt="testimonial" />
            </div> 
            {/* <!-- single testimonial image --> */}
            
            <div class="single_testimonial_image_2">
                <img src="assets/images/testimonial-3.jpg" alt="testimonial" />
            </div> 
            {/* <!-- single testimonial image --> */}
        </div> 
        {/* <!-- testimonial image wrapper --> */}
        
        <div class="testimonial_content_area">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-6">
                        <div class="testimonial_content_wrapper_2">
                           
                            <div class="single_testimonial_content text-center">
                                <i class="fa fa-quote-right"></i>
                                <h4 class="testimonial_title">Testimonial</h4>
                                <p>I noticed a difference in my son the very next day after our family assessment. He remembers what brings him joy, and he's committed to reconnecting to it. </p>
                                <h6 class="author_name">Tamira Smith</h6>
                            </div> 
                            {/* <!-- single testimonial content --> */}
                           
                            <div class="single_testimonial_content text-center">
                                <i class="fa fa-quote-right"></i>
                                <h4 class="testimonial_title">Testimonial</h4>
                                <p>Thank you SO MUCH for bringing us our child back! You've been the blessing I prayed so long for!</p>
                                <h6 class="author_name">Imani Nelson</h6>
                            </div> 
                            {/* <!-- single testimonial content --> */}
                           
                            <div class="single_testimonial_content text-center">
                                <i class="fa fa-quote-right"></i>
                                <h4 class="testimonial_title">Testimonial</h4>
                                <p>It's been two years since I sent Brandon on the camping trip, and I still see him using the tools taught to him in his daily life. </p>
                                <h6 class="author_name">Ronnell Cook</h6>
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