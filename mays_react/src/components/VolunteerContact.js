import React from "react";

const VolunteerContact = () => {
  return (
    <section class="volunteer_form_area bg_cover" style="background-image: url(assets/images/omahanight.jpg)">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-6">
                    <div class="volunteer_form">
                        <h4 class="volunteer_title">Get Involved</h4>
                        <form action="#">
                            <div class="single_form">
                                <select name="enrollment" id="enrollment-select">
                                    <option value="">Select your reason for reaching out</option>
                                    <option value="">Enroll my child in programming</option>
                                    <option value="">Volunteer my time or services</option>
                                    <option value="">Initiate a financial contribution</option>
                                    <option value="">Enroll my business as a partner</option>
                                    <option value="">Other inquiry</option>
                                </select>
                            </div> 
                            <div class="single_form">
                                <input type="text" placeholder="Full Name" />
                            </div> 
                            <div class="single_form">
                                <input type="email" placeholder="Email" />
                            </div> 
                            <div class="single_form">
                                <input type="text" placeholder="Phone" />
                            </div> 
                            <div class="single_form">
                                <input type="text" placeholder="Zip Code" />
                            </div> 
                            <div class="single_form">
                                <textarea placeholder="Anything you'd like us to know"></textarea>
                            </div> 
                            <div class="single_form">
                                <button class="main-btn main-btn-2">Submit</button>
                            </div> 
                        </form>
                    </div> 
                    {/* <!-- volunteer form --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
  )
}

export default VolunteerContact;