
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { images } from "../../Data";
import './productDetailsSlider.scss';



const ProductDetailsSlider = () => {
  
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <section className="ProductDetailsSlider section-padding bg-clr-primary10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Slider asNavFor={nav2} ref={slider1}>
              {
                images.map((image, i) => {
                  return <div className="details-slide-item bg-white d-flex justify-content-center align-items-center" key={i}>
                    <img src={image} alt="img" className="img-fluid" />
                  </div>
                })
              }
              
            </Slider>

            <Slider className="detailsNav"
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {
                images.map((image, i) => {
                  return <div className="details-slide-nav bg-white d-flex align-items-center mt-3" key={i}>
                    <img src={image} alt="img" className="img-fluid" />
                  </div>
                })
              }
            </Slider>
          </div>
          <div className="col-lg-6">
            Right Info
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSlider;
