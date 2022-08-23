import React from "react";

const VolunteerContact = () => {
    const backgroundStyle = {
        backgroundImage: "url(assets/images/omahanight.jpg)",
    }

  return (
    <section className="volunteer_form_area bg_cover" style={ backgroundStyle }>
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-lg-6">
                    <div className="volunteer_form">
                        <h4 className="volunteer_title">Get Involved</h4>
                        <form action="#">
                            <div className="single_form">
                                <select name="enrollment" id="enrollment-select">
                                    <option value="">Select your reason for reaching out</option>
                                    <option value="">Enroll my child in programming</option>
                                    <option value="">Volunteer my time or services</option>
                                    <option value="">Initiate a financial contribution</option>
                                    <option value="">Enroll my business as a partner</option>
                                    <option value="">Other inquiry</option>
                                </select>
                            </div> 
                            <div className="single_form">
                                <input type="text" placeholder="Full Name" />
                            </div> 
                            <div className="single_form">
                                <input type="email" placeholder="Email" />
                            </div> 
                            <div className="single_form">
                                <input type="text" placeholder="Phone" />
                            </div> 
                            <div className="single_form">
                                <input type="text" placeholder="Zip Code" />
                            </div> 
                            <div className="single_form">
                                <textarea placeholder="Anything you'd like us to know"></textarea>
                            </div> 
                            <div className="single_form">
                                <button className="main-btn main-btn-2">Submit</button>
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