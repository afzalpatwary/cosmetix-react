import tabImage1 from '../../assets/img/tabImage1.png';
import tabImage2 from '../../assets/img/tabImage2.png';
import './navTabs.scss';

const NavTabs = () => {



  return (
    <section className="NabTabsComponent section-padding">
      <div className="container">
        <ul className="nav nav-pills mb-3 border-bottom justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item mx-4" role="presentation">
            <button className="nav-link bg-transparent text-clr-dark4 fw-medium fs-5 pb-3 active" id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description" type="button" role="tab">
              Description
            </button>
          </li>
          <li className="nav-item mx-4" role="presentation">
            <button className="nav-link bg-transparent text-clr-dark4 fw-medium fs-5 pb-3" id="pills-additionalInformation-tab" data-bs-toggle="pill" data-bs-target="#pills-additionalInformation" type="button" role="tab">
              Additional information
            </button>
          </li>
          <li className="nav-item mx-4" role="presentation">
            <button className="nav-link bg-transparent text-clr-dark4 fw-medium fs-5 pb-3" id="pills-reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-reviews" type="button" role="tab">
              Reviews <span className='total-reviews'>6</span>
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-description" role="tabpanel">
            <div className="tabContents">
              <p className='fs-6 fw-normal text-clr-dark3'>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. <br /> <br />

                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
              </p>

              <div className="tabImages my-5 d-flex gap-4 flex-wrap">
                <img src={tabImage1} alt="images" className="img-fluid" />
                <img src={tabImage2} alt="images" className="img-fluid" />
              </div>
              <p className='fs-6 fw-normal text-clr-dark3'>
                Porta lobortis nunc orci in mi diam mauris in viverra. Elementum malesuada sit dictumst ut massa semper justo amet. Nisl vestibulum tempor justo, neque. Nulla massa, amet non posuere id diam, turpis dignissim. Massa scelerisque amet malesuada vel duis gravida blandit morbi. Adipiscing enim placerat mauris nec eu. Elementum, congue bibendum nibh magna nisi, libero volutpat elementum nulla. In dui nibh quam fames. Ipsum eget turpis facilisi in enim pellentesque. Enim euismod volutpat neque condimentum.
              </p>
              <ul className='mt-5'>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Urna, commodo ut amet sit scelerisque nunc faucibus volutpat turpis.
                </li>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Et vel cras adipiscing facilisis orci dignissim lacus odio laoreet.
                </li>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Condimentum in condimentum venenatis integer pellentesque malesuada pretium.
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-additionalInformation" role="tabpanel">
            <div className="tabContents">
              <p className='fs-6 fw-normal text-clr-dark3'>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. <br /> <br />

                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
              </p>

              <div className="tabImages my-5 d-flex gap-4 flex-wrap">
                <img src={tabImage1} alt="images" className="img-fluid" />
                <img src={tabImage2} alt="images" className="img-fluid" />
              </div>
              <p className='fs-6 fw-normal text-clr-dark3'>
                Porta lobortis nunc orci in mi diam mauris in viverra. Elementum malesuada sit dictumst ut massa semper justo amet. Nisl vestibulum tempor justo, neque. Nulla massa, amet non posuere id diam, turpis dignissim. Massa scelerisque amet malesuada vel duis gravida blandit morbi. Adipiscing enim placerat mauris nec eu. Elementum, congue bibendum nibh magna nisi, libero volutpat elementum nulla. In dui nibh quam fames. Ipsum eget turpis facilisi in enim pellentesque. Enim euismod volutpat neque condimentum.
              </p>
              <ul className='mt-5'>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Urna, commodo ut amet sit scelerisque nunc faucibus volutpat turpis.
                </li>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Et vel cras adipiscing facilisis orci dignissim lacus odio laoreet.
                </li>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Condimentum in condimentum venenatis integer pellentesque malesuada pretium.
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-reviews" role="tabpanel">
            <div className="tabContents">
              <p className='fs-6 fw-normal text-clr-dark3'>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. <br /> <br />

                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
              </p>

              <div className="tabImages my-5 d-flex gap-4 flex-wrap">
                <img src={tabImage1} alt="images" className="img-fluid" />
                <img src={tabImage2} alt="images" className="img-fluid" />
              </div>
              <p className='fs-6 fw-normal text-clr-dark3'>
                Porta lobortis nunc orci in mi diam mauris in viverra. Elementum malesuada sit dictumst ut massa semper justo amet. Nisl vestibulum tempor justo, neque. Nulla massa, amet non posuere id diam, turpis dignissim. Massa scelerisque amet malesuada vel duis gravida blandit morbi. Adipiscing enim placerat mauris nec eu. Elementum, congue bibendum nibh magna nisi, libero volutpat elementum nulla. In dui nibh quam fames. Ipsum eget turpis facilisi in enim pellentesque. Enim euismod volutpat neque condimentum.
              </p>
              <ul className='mt-5'>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Urna, commodo ut amet sit scelerisque nunc faucibus volutpat turpis.
                </li>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Et vel cras adipiscing facilisis orci dignissim lacus odio laoreet.
                </li>
                <li className='fs-6 fw-normal text-clr-dark3 mb-2'>
                  Condimentum in condimentum venenatis integer pellentesque malesuada pretium.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavTabs;