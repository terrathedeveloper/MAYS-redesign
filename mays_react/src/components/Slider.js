import React from 'react';
import SlickSlider from 'react-slick';
import SliderNextArrow from './subcomponents/SliderNextArrow';
import SliderPrevArrow from './subcomponents/SliderPrevArrow';

const Slider = () => {
    const backgroundStyle = {
        backgroundImage: 'url(./images/playingkids.jpg)',
    }

    const slickSettings = {
        autoplay: true,
        autoplaySpeed: 8000,
        dots: false,
        fade: true,
        arrows: true,
        pauseOnHover: false,
        prevArrow: <SliderPrevArrow />,
        nextArrow: <SliderNextArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    }

  return (
    <section className="slider_area slider_area_3 bg_cover" style={ backgroundStyle }>
        <div className="slider-active_3">
            <SlickSlider {...slickSettings}>
                <div className="single_slider_3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="slider_content_3">
                                    <h2 className="title" data-animation="fadeInUp" data-delay="0.4s">We guide youths<br />to grow productive young adults.</h2>
                                    <a href="#" className="main-btn main-btn-2" data-animation="fadeInUp" data-delay="0.8s">Leran More</a>
                                </div> 
                                {/* <!-- slider content --> */}
                            </div>
                        </div> 
                        {/* <!-- row --> */}
                    </div> 
                    {/* <!-- container --> */}
                </div> 
                {/* <!-- single slider 3 --> */}
                
                <div className="single_slider_3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="slider_content_3">
                                    <h2 className="title" data-animation="fadeInUp" data-delay="0.4s">Youth development is our passion.</h2>
                                    <a href="#" className="main-btn main-btn-2" data-animation="fadeInUp" data-delay="0.8s">Leran More</a>
                                </div> 
                                {/* <!-- slider content --> */}
                            </div>
                        </div> 
                        {/* <!-- row --> */}
                    </div> 
                    {/* <!-- container --> */}
                </div> 
                {/* <!-- single slider 3 --> */}
                
                <div className="single_slider_3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="slider_content_3">
                                    <h2 className="title" data-animation="fadeInUp" data-delay="0.4s">Generational gang ties can be broken.</h2>
                                    <a href="#" className="main-btn main-btn-2" data-animation="fadeInUp" data-delay="0.8s">Leran More</a>
                                </div> 
                                {/* <!-- slider content --> */}
                            </div>
                        </div> 
                        {/* <!-- row --> */}
                    </div> 
                    {/* <!-- container --> */}
                </div> 
                {/* <!-- single slider 3 --> */}
            </SlickSlider>
        </div> 
        {/* <!-- slider active 3 --> */}
    </section>
  )
}

export default Slider;