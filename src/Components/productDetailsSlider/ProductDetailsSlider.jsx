
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { images } from "../../Data";
import arrowIcon from '../../assets/img/arrow-right.svg';
import disableStarIcon from '../../assets/img/disable-star.svg';
import fb from '../../assets/img/fb.svg';
import instagram from '../../assets/img/instagram.svg';
import leftArrow from '../../assets/img/left-arrow-green.svg';
import nextArrow from '../../assets/img/next-arrow-green.svg';
import pinterest from '../../assets/img/pinterest_line.svg';
import starIcon from '../../assets/img/star-icon.svg';
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


  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };



  return (
    <section className="ProductDetailsSlider section-padding bg-clr-primary10">
      <div className="container">
        <div className="row gx-xl-5 align-items-center">
          <div className="col-lg-6">
            <Slider asNavFor={nav2} ref={slider1}
              arrows={true}
              prevArrow={<img src={leftArrow} />}
              nextArrow={<img src={nextArrow} />}
            >
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
            <div className="product-info pb-5 borderB1Green mb-4">
              <h2 className="product-title fs-36 fw-black text-clr-dark1 mb-2">
                Superfood Glow Moisturiser
              </h2>
              <div className="ratting d-flex gap-1 align-items-center mb-4">
                <img src={starIcon} alt="star icon" className="img-fluid" />
                <img src={starIcon} alt="star icon" className="img-fluid" />
                <img src={starIcon} alt="star icon" className="img-fluid" />
                <img src={starIcon} alt="star icon" className="img-fluid" />
                <img src={disableStarIcon} alt="disable star icon" className="img-fluid" />
                <span className="outOfRatting text-clr-dark4 fs-12 fw-normal ms-1">
                  48 reviews
                </span>
              </div>
              <div className="pricing d-flex gap-3 align-items-center mb-4">
                <span className='price fs-4 fw-black text-clr-green'>
                  ₹299.00
                </span>
                <span className='old-price fs-6 fw-normal text-clr-dark4 text-decoration-line-through'>
                  ₹299.00
                </span>
              </div>
              <div className="mb-5">
                <p className="fs-6 fw-normal text-clr-dark3">
                  Sanctus repudiare in cum, ut vel tantas expetendis. Latine debitis tibique ne vix, ei pri autem tation commodo. Ad ius expetenda sadipscing, eu usu quas ocurreret, eam ne dicit labore eirmod meliore.
                </p>
              </div>

              <div className="selectInnerBox d-flex gap-4 flex-wrap mb-4">
                <div className="selectSize">
                  <h5 className="fs-14 fw-normal text-clr-dark2 mb-3">Size:</h5>
                  <div className="size-wrapper d-flex gap-3 align-items-center">
                    <label className="select-item d-block" htmlFor="size">
                      <input type="radio" className="d-none" id="size" name="size" />
                      <span className="check px-4 h-42 bg-white text-center fw-medium fs-14 text-clr-dark1 d-flex align-items-center border1Green">
                        25 ML
                      </span>
                    </label>
                    <label className="select-item d-block" htmlFor="size2">
                      <input type="radio" className="d-none" id="size2" name="size" checked />
                      <span className="check px-4 h-42 bg-white text-center fw-medium fs-14 text-clr-dark1 d-flex align-items-center border1Green">
                        30 ML
                      </span>
                    </label>
                  </div>
                </div>
                <div className="selectQuantity">
                  <h5 className="fs-14 fw-normal text-clr-dark2 mb-3">Quantity:</h5>
                  <div className="d-flex gap-3">
                    <button className="fs-5 fw-medium text-clr-dark1 px-4 h-42 bg-white d-flex align-items-center border1Green" onClick={decrement}>-</button>
                    <span className="fs-6 fw-medium text-clr-dark1 px-4 h-42 bg-white d-flex align-items-center justify-content-center border1Green w-80">{count}</span>
                    <button className="fs-5 fw-medium text-clr-dark1 px-4 h-42 bg-white d-flex align-items-center border1Green" onClick={increment}>+</button>
                  </div>
                </div>
              </div>

              <div className="">
                <Link href="#" className='bg-btn border1Green px-4 h-48 fw-black fs-14 justify-content-center text-clr-green d-flex gap-2 align-items-center mb-3'>
                  Add to cart
                </Link>
                <Link href="#" className='bg-btn bg-clr-green px-4 h-48 fw-black fs-14 justify-content-center text-white d-flex gap-2 align-items-center'>
                  Buy Now
                  <img src={arrowIcon} alt="icon" />
                </Link>
              </div>
            </div>
            <ul className="social-list list-unstyled mb-0 d-flex align-items-center gap-3">
              <li className="fs-14 text-clr-dark1 fw-normal">
                Share:
              </li>
              <li>
                <Link to='/'>
                  <img src={pinterest} alt="icon" className="img-fluid" />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src={instagram} alt="icon" className="img-fluid" />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <img src={fb} alt="icon" className="img-fluid" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSlider;
