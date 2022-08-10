import React from "react";

const Events = () => {
  return (
    <section class="event_area_2 pt-130 pb-130 bg_cover" style="background-image: url(assets/images/gray-bg.jpg)">
        <div class="event_shape_1" style="background-image: url(assets/images/shape/shape-1.png)"></div>
        <div class="container">
            <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-60">
                            <img src="assets/images/section_icon.png" alt="Icon" />
                            <h3 class="title">Our Latest Events</h3>
                        </div> 
                        {/* <!-- section title --> */}
                    </div>
                </div> 
                {/* <!-- row --> */}
            <div class="row no-gutters justify-content-center">
                <div class="col-lg-10">
                    <div class="event_active">
                        <div class="single_event_2 d-flex flex-wrap event_color-1">
                            <div class="event_image">
                                <img src="assets/images/camping.jpg" alt="event" />
                                <div class="event_date d-flex align-items-center justify-content-center">
                                    <img class="shape" src="assets/images/shape/shape-3.png" alt="shape" />
                                    <span class="date"><span>13</span> Aug</span>
                                </div>
                            </div>
                            <div class="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div class="event_content">
                                    <h4 class="event_title"><a href="#">6th Annual "Hood 2 the Woods" Program</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map" /> <span>2022/08/13 | Omaha, NE</span> </p>
                                    <a href="#" class="more">Read More</a>
                                </div>
                            </div>
                        </div> 
                        {/* <!-- single event --> */}
                        
                        <div class="single_event_2 d-flex flex-wrap event_color-2">
                            <div class="event_image">
                                <img src="assets/images/event-2.jpg" alt="event" />
                                <div class="event_date d-flex align-items-center justify-content-center">
                                    <img class="shape" src="assets/images/shape/shape-3.png" alt="shape" />
                                    <span class="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div class="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div class="event_content">
                                    <h4 class="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map" /> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" class="more">Read More</a>
                                </div>
                            </div>
                        </div> 
                        {/* <!-- single event --> */}
                        
                        <div class="single_event_2 d-flex flex-wrap event_color-3">
                            <div class="event_image">
                                <img src="assets/images/event-3.jpg" alt="event" />
                                <div class="event_date d-flex align-items-center justify-content-center">
                                    <img class="shape" src="assets/images/shape/shape-3.png" alt="shape" />
                                    <span class="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div class="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div class="event_content">
                                    <h4 class="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map" /> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" class="more">Read More</a>
                                </div>
                            </div>
                        </div> 
                        {/* <!-- single event --> */}
                    </div> 
                    {/* <!-- event active --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}

        <div class="event_shape_2" style="background-image: url(assets/images/shape/shape-1.png)"></div>
    </section>
  )
}

export default Events;