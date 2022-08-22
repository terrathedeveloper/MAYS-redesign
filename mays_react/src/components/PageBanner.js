import React from "react";

const PageBanner = ({img, title, slug}) => {
  const bannerStyle = {
    backgroundImage: process.env.PUBLIC_URL + `url(${img})`,
  }

  return (
    <section className="page_banner bg_cover" style={bannerStyle}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page_banner_content text-center">
                        <h3 className="page_title">{title}</h3>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="#">Home</a></li>
                            <li><a className="active" href="#">{slug}</a></li>
                        </ul>
                    </div> 
                    {/* <!-- page banner content --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
  )
}

export default PageBanner;