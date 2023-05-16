import SpecialImg1 from '../../assets/img/specialImg1.png';
import SpecialImg2 from '../../assets/img/specialImg2.png';

const Special = () => {

  const SpecialData = [
    {
      tag: "TRENDING MAKEUP",
      img: SpecialImg1,
      title: "Always Make Room for a Little Beauty Your Life",
      desc: "Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of products is about quality.",
      addClass: "flex-column",
      addClass2: "mb-4",
    },
    {
      tag: "SPECIAL OFFER",
      img: SpecialImg2,
      title: "Be Your Own Kind Of Beautiful",
      desc: "Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of products is about quality.",
      addClass: "flex-column flex-lg-column-reverse",
      addClass2: "mt-5 mb-4 mb-lg-0",
    },
  ]

  return (
    <section className="special section-padding">
      <div className="container">
        <div className="row">
          {
            SpecialData?.map((special, index) => {
              return <div className="col-lg-6" key={index}>
                <div className={`${special?.addClass} special-info d-flex`}>
                  <div className={`${special?.addClass2} content`}>
                    <p className='fs-14 fw-bold text-clr-green mb-3'>
                      {special?.tag}
                    </p>
                    <h3 className='fs-36 fw-black text-clr-dark1 mb-3'>
                      {special?.title}
                    </h3>
                    <p className='fs-18 fw-normal text-clr-dark4 mb-4'>
                      {special?.desc}
                    </p>
                  </div>
                  <div className="img">
                    <img src={special?.img} alt="img" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
}
export default Special;