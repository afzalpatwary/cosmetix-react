import { Link } from "react-router-dom";
import { BlogList } from "../../Data";
import ArrowRights from '../../assets/img/arrow-rights.svg';
import './latestNews.scss';

const LatestNews = () => {
  return (
    <section className="latestNews bg-clr-whiteShade section-padding">
      <div className="container">
        <div className="section-heading mb-4 pb-2 d-flex justify-content-between align-items-center">
          <h2 className='section-title fs-3 fw-black text-clr-dark1 mt-0'>
            Latest Beauty News
          </h2>
          <Link to='/' className='d-flex gap-1 align-items-center fw-black fs-14 text-clr-dark3'>
            Latest Beauty News
            <img src={ArrowRights} alt="icon" className="img-fluid" />
          </Link>
        </div>
        <div className="row">
          {
            BlogList.map((blog, index) => {
              return <div className="col-xl-4 col-sm-6 mb-4" key={index}>
                <div className="single-blog h-100">
                  <div className="blogImg overflow-hidden">
                    <img src={blog.blogImg} alt="blog img" className="img-fluid w-100" />
                  </div>
                  <div className="blogInfo p-4 bg-white">
                    <div className="meta d-flex gap-2 align-items-center mb-3">
                      <span className="fs-12 fw-medium text-clr-dark4 ls1">{blog.postDate}</span>
                      <span className="dots bg-clr-green rounded-circle d-inline-block" style={{width: '4px', height: '4px'}}></span>
                      <Link to='/' className="fs-12 fw-black text-clr-green">{blog.blogCat}</Link>
                    </div>
                    <h3>
                      <Link to='/' className="blogTitle fs-6 fw-bold text-clr-dark1 lh-base mb-3 d-block">
                        {blog.blogTitle}
                      </Link>
                    </h3>
                    <Link to='/' className="author d-flex align-items-center gap-2">
                      <img src={blog.userIcon} alt="" className="img-fluid" />
                      <span className="fs-14 fw-medium text-clr-green">{blog.blogAuthor}</span>
                    </Link>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default LatestNews;