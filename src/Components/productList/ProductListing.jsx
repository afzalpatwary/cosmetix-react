import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import { ProductList } from '../../Data';
import ArrowLeft from '../../assets/img/arrow-lefts.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import bagIcon from '../../assets/img/bagIcon.svg';
import IconLove from '../../assets/img/IconLove.svg';
import GridIcon from '../../assets/img/grid-icon.svg';
import ListIcon from '../../assets/img/list-icon.svg';
import './productList.scss';

const ProductListing = () => {

  const [value, setValue] = useState([0, 190]);

  return (
    <section className="productList pb-80">
      <div className="container">
        <div className="breadcrumb d-flex gap-2 align-items-center mt-4 mb-5">
          <span className="fs-6 fw-medium text-clr-green ls1">
            Home
          </span>
          <span className="dots bg-clr-green rounded-circle d-inline-block" style={{ width: '4px', height: '4px' }}></span>
          <span className="fs-6 fw-medium text-clr-dark3">
            Product
          </span>
        </div>
        <div className="row">
          <div className="col-xl-3">
            <div className="leftSidebar border p-3">
              <div className="filterItem filter-by-category">
                <div className="sidebar-heading border-bottom py-3">
                  <h3 className="fs-6 fw-medium text-clr-dark1">
                    Product Categories
                  </h3>
                </div>
                <div className="select-category py-3">
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="check" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="check">
                      Face
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="check2" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="check2">
                      Hair Styling
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="check3" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="check3">
                      Lips
                    </label>
                  </div>
                  <div className="form-check mb-0">
                    <input className="form-check-input rounded-0" type="checkbox" id="check4" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="check4">
                      Skincare
                    </label>
                  </div>
                </div>
              </div>

              <div className="filterItem filter-by-price mb-4">
                <div className="sidebar-heading border-bottom py-3 mb-4">
                  <h3 className="fs-6 fw-medium text-clr-dark1">
                    Filter By Price
                  </h3>
                </div>
                <RangeSlider className="priceRang" min={0} max={190} value={value} onInput={setValue} />
                <p className="fs-12 fw-normal text-clr-dark4 mt-3 d-flex gap-2 align-items-center">
                  <span>Price: £{value[0]}</span>
                  -
                  <span>£{value[1]}</span>
                </p>
              </div>

              <div className="filterItem filter-by-color">
                <div className="sidebar-heading border-bottom py-3">
                  <h3 className="fs-6 fw-medium text-clr-dark1">
                    Filter By Color
                  </h3>
                </div>

                <div className="select-color py-4 d-flex align-items-center gap-4 justify-content-between flex-wrap">
                  <div className="single-color text-center">
                    <span className="color bg-clr-dark1 d-block rounded-circle mb-2 m-auto"></span>
                    <p className="fs-12 fw-normal text-clr-dark1">
                      Black
                    </p>
                  </div>
                  <div className="single-color text-center">
                    <span className="color bg-clr-blue d-block rounded-circle mb-2 m-auto"></span>
                    <p className="fs-12 fw-normal text-clr-dark1">
                      Blue
                    </p>
                  </div>
                  <div className="single-color text-center">
                    <span className="color bg-clr-brown d-block rounded-circle mb-2 m-auto"></span>
                    <p className="fs-12 fw-normal text-clr-dark1">
                      Brown
                    </p>
                  </div>
                  <div className="single-color text-center">
                    <span className="color bg-clr-green d-block rounded-circle mb-2 m-auto"></span>
                    <p className="fs-12 fw-normal text-clr-dark1">
                      Green
                    </p>
                  </div>
                  <div className="single-color text-center">
                    <span className="color bg-clr-orange d-block rounded-circle mb-2 m-auto"></span>
                    <p className="fs-12 fw-normal text-clr-dark1">
                      Orange
                    </p>
                  </div>
                </div>

              </div>

              <div className="filterItem filter-by-brand">
                <div className="sidebar-heading border-bottom py-3">
                  <h3 className="fs-6 fw-medium text-clr-dark1">
                    Brand
                  </h3>
                </div>
                <div className="select-category py-3">
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="Erbaviva" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="Erbaviva">
                      Erbaviva
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="Kapowder" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="Kapowder">
                      Kapowder
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="Lessse" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="Lessse">
                      Lessse
                    </label>
                  </div>
                  <div className="form-check mb-0">
                    <input className="form-check-input rounded-0" type="checkbox" id="Monastery" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="Monastery">
                      Monastery
                    </label>
                  </div>
                </div>
              </div>

              <div className="filterItem filter-by-stock mb-0">
                <div className="sidebar-heading border-bottom py-3 mb-4">
                  <h3 className="fs-6 fw-medium text-clr-dark1">
                    Product Status
                  </h3>
                </div>
                <div className="select-category">
                  <div className="form-check mb-3">
                    <input className="form-check-input rounded-0" type="checkbox" id="InStock" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="InStock">
                      In Stock
                    </label>
                  </div>
                  <div className="form-check mb-0">
                    <input className="form-check-input rounded-0" type="checkbox" id="onSale" />
                    <label className="form-check-label text-clr-dark2 fs-12 fw-medium" htmlFor="onSale">
                      On sale
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="product-layout d-flex justify-content-between mb-4 pb-2">
              <div className="layout-change d-flex align-items-center gap-3">
                <button className='gridViewBtn btn border rounded-0 p-3'>
                  <img src={GridIcon} alt="" className="img-fluid" />
                </button>
                <button className='listViewBtn btn border rounded-0 p-3'>
                  <img src={ListIcon} alt="" className="img-fluid" />
                </button>
              </div>
              <div className="selectBySort w-25">
                <select defaultValue={'DEFAULT'} className="form-select p-3 border fs-14 fw-normal text-dark3">
                  <option value="DEFAULT">Sort by latest</option>
                  <option value="1">Last week</option>
                  <option value="2">Last month</option>
                  <option value="3">Last year</option>
                </select>
              </div>
            </div>
            <div className="productWrapper">
              <div className="row">
                {
                  ProductList?.map((product, index) => {
                    return (
                      <div className="col-xl-4 col-md-6" key={index}>
                        <div className="bestSellerItem mb-4">
                          <div className="productImage bg-clr-primary10 p-2 text-center position-relative mb-4">
                            <img src={product.productImg} alt="ProductImg" className="img-fluid productImg" />
                            <span>
                              {product?.sticker && <span className={`${product?.bgClr} sticker position-absolute py-2 px-3 fs-12 fw-bold text-center text-white`}>
                                {product?.sticker}
                              </span>}
                              {product?.sticker && <span className={`${product?.cornerBg} stickerLeft position-absolute`}></span>}
                            </span>
                            <div className="afterHover rgbaBG1 position-absolute start-0 end-0 top-0 bottom-0 m-2 d-flex align-items-end justify-content-center">
                              <div className="icons">
                                <Link href="#">
                                  <img src={IconLove} alt="iconLove" className="iconLove position-absolute img-fluid " />
                                </Link>
                                <Link href="#" className="arrow">
                                  <img src={ArrowRight} alt="iconLove" className="ArrowRight position-absolute img-fluid " />
                                  <img src={ArrowLeft} alt="iconLove" className="ArrowLeft position-absolute img-fluid " />
                                </Link>
                              </div>
                              <div className="hoverBtn mb-4">
                                <button type='button' className='bg-clr-dark7 border-0 px-4 py-2 fw-black fs-14 text-clr-green d-inline-flex gap-2 align-items-center text-uppercase'>
                                  <img src={bagIcon} alt="icon" className='img-fluid' />
                                  Add to Card
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="productBody">
                            <Link to="#" className='productCategory fs-14 fw-medium text-clr-dark3 d-block mb-3'>
                              {product.productCategory}
                            </Link>
                            <h3 className='fs-6 fw-bold text-clr-dark1 mb-2'>
                              {product.productTitle}
                            </h3>
                            <div className="pricing d-flex gap-3 align-items-center">
                              <span className='price fs-6 fw-black text-clr-green'>
                                {product.price}
                              </span>
                              <span className='old-price fs-6 fw-normal text-clr-green text-decoration-line-through'>
                                {product.oldPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;











// import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import { ProductList } from "../../Data";



// const ProductDetailsSlider = () => {


//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   const slider1 = useRef(null);
//   const slider2 = useRef(null);

//   useEffect(() => {
//     setNav1(slider1.current);
//     setNav2(slider2.current);
//   }, []);
//   return (
//     <section className="ProductDetailsSlider section-padding bg-clr-primary10">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <Slider asNavFor={nav2} ref={slider1}>
//               {
//                 ProductList.map((product, index) => {
//                   return <div className="slideImages" key={index}>
//                     {
//                       product?.images?.map((img, index) => {
//                         return <div className="" key={index}>
//                           <img src={img} alt="img" className="img-fluid" />
//                         </div>
//                       })
//                     }

//                   </div>
//                 })
//               }
//             </Slider>

//             <Slider
//               asNavFor={nav1}
//               ref={slider2}
//               slidesToShow={3}
//               swipeToSlide={true}
//               focusOnSelect={true}
//             >
//               {
//                 ProductList.map((product, index) => {
//                   return <div className="slideImages" key={index}>
//                     {
//                       product?.images?.map((img, index) => {
//                         return <img src={img} alt="img" className="img-fluid" key={index} />
//                       })
//                     }

//                   </div>
//                 })
//               }
//             </Slider>
//           </div>
//           <div className="col-lg-6">
//             Right Info
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailsSlider;
