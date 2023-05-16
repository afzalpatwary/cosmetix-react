


const SubPageBanner = ({ bannerBg, bannerTitle, bannerIntro, bannerImg }) => {
  return (
    <section className="SubPageBanner section-padding isBgImg" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="subPageBannerInfo mb-5 mb-lg-0">
              <h1 className="fs-60 text-clr-dark1 fw-black mb-4">
                {bannerTitle}
              </h1>
              <p className="fs-18 fw-normal text-clr-dark3">
                {bannerIntro}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subPageBannerImg">
              <img src={bannerImg} alt="sub banner img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageBanner;