import { Link } from "react-router-dom";
import SubPageBanner from "../../Components/subPageBanner/SubPageBanner";
import subBannerImg from '../../assets/img/blog-banner-img.png';
import BannerBG from '../../assets/img/subBannerBg.jpg';
import bagIcon from '../../assets/img/bagIcon.svg';
import IconLove from '../../assets/img/IconLove.svg';
import { ProductList } from "../../Data";
import ArrowLeft from '../../assets/img/arrow-lefts.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';


const Blogs = () => {
  return (
    <div>
      <SubPageBanner
        bannerTitle={"CosmetiX Blog"}
        bannerIntro={"Duis cras auctor maecenas convallis dictum. Odio pulvinar nunc vestibulum. Cras adipiscing ut fringilla."}
        bannerBg={BannerBG}
        bannerImg={subBannerImg}
      />

      <div className="page-breadcrumb">
        <div className="container">
          <div className="breadcrumb d-flex gap-2 align-items-center mt-4 mb-5">
            <span className="fs-6 fw-medium text-clr-green ls1">
              Home
            </span>
            <span className="dots bg-clr-green rounded-circle d-inline-block" style={{ width: '4px', height: '4px' }}></span>
            <span className="fs-6 fw-medium text-clr-dark3">
              Blog
            </span>
          </div>
        </div>
      </div>

      <div className="blog-area pb-5">
        <div className="container">
          <div className="row">
            {
              ProductList?.map((product, index) => {
                return (
                  <div className="col-xl-4 col-md-6" key={index}>
                    <div className="bestSellerItem mb-4">
                      <div className="productImage bg-clr-primary10 p-2 text-center position-relative mb-4">
                        <img src={product.productImg} alt="ProductImg" className="img-fluid productImg" />

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
                          <Link to="#" className="text-clr-dark1">
                            {product.productTitle}
                          </Link>
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
  );
};

export default Blogs;