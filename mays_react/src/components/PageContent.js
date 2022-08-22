import React from "react";
import DonateUnderImage from "./subcomponents/DonateUnderImage";
import Blockquote from "./subcomponents/Blockquote";
import PageSidebar from "./subcomponents/PageSidebar";
import SocialsWidget from "./subcomponents/SocialsWidget";

// images for use
import shape12 from "../assets/images/shape/shape-12.png";

// This component takes a content object in the form of:
// {
//   donation: boolean, // if true, show donation form, optional
//   img: {
//     main: image-reference,
//     sub: [image-reference-1, image-reference-2] (optional, max of 2)
//   },
//   title: string,
//   blockquote: string, (optional)
//   paragraphs: [string, string, string, string] (optional, max of 4)
// }

const PageContent = ({ content }) => {
  const servicesShapeStyle = {
    backgroundImage: `url(${shape12})`,
  }

  return (
    <section className="causes_area pt-80 pb-130">
      <div className="services_shape_1" style={servicesShapeStyle}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="causes_details mt-20">
              <div className="causes_details_image">
                <img src={content.img.main} alt="causes details" />
              </div>

              {content?.donation && <DonateUnderImage />}


              <div className="causes_details_content">
                <h3 className="causes_details_title">{content.title}</h3>
                {content.paragraphs[0] && <p>{content.paragraphs[0]}</p>}
                {content.paragraphs[1] && <p>{content.paragraphs[1]}</p>}
              </div>
              {/* first 2 paragraphs, if both exist */}


              {content.blockquote && <Blockquote text={content.blockquote} />}

              {/* Insert sub images, up to 2 */}
              {content.img.sub &&
                <div className="row">
                  {content.img.sub.map((img, index) => {
                    return (
                      <div className="col-sm-6" key={index}>
                        <div className="causes_details_image">
                          <img src={img} alt="details" />
                        </div>
                        {/* <!-- causes details image --> */}
                      </div>
                    )
                  })}
                </div>
              }
              {/* <!-- row --> */}


              <div className="causes_details_content">
                {content.paragraphs[2] && <p>{content.paragraphs[2]}</p>}
                {content.paragraphs[3] && <p>{content.paragraphs[3]}</p>}
              </div>
              {/* last 2 paragraphs if they exist */}

              <SocialsWidget context="page" />
            </div>
            {/* <!-- causes details --> */}

          </div>
          <PageSidebar cta={true} tags={true} />
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
    </section>
  )
}

export default PageContent;