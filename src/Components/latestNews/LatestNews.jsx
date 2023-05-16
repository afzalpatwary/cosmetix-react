import { Link } from "react-router-dom";
import { BlogList } from "../../Data";

const LatestNews = () => {
  return (
    <section className="latestNews">
        <div className="container">
          <div className="row">
              {
                BlogList.map((blog, index) => {
                  return <div className="col-xl-4 col-sm-6" key={index}>
                      <div className="single-blog">
                          <div className="blogImg">
                              <img src={blog.blogImg} alt="blog img" className="img-fluid" />
                          </div>
                          <div className="blogInfo">
                              <div className="meta">
                                  <span>{blog.postDate}</span>
                                  <span className="dots"></span>
                                  <Link to='/'>{blog.blogCat}</Link>
                                  <h3>
                                    {blog.blogTitle}
                                  </h3>
                                  <Link to='/' className="author">
                                      <img src={blog.userIcon} alt="" className="img-fluid" />
                                      <span>{blog.blogAuthor}</span>
                                  </Link>
                              </div>
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