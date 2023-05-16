import ProcessIcon1 from '../../assets/img/processIcon1.svg'
import ProcessIcon2 from '../../assets/img/processIcon2.svg'
import ProcessIcon3 from '../../assets/img/processIcon3.svg'
import ProcessIcon4 from '../../assets/img/processIcon4.svg'
import './process.scss'

const Process = () => {

  const ProcessData = [
    {
      icon: ProcessIcon1,
      processTitle: "Free Shipping",
      processIntro: "Free Shipping for orders over $130",
      bgClr: "bg-clr-gray1 justify-content-end"
    },
    {
      icon: ProcessIcon2,
      processTitle: "Returns",
      processIntro: "Within 30 days for an exchange.",
      bgClr: "bg-clr-offWhite justify-content-center"
    },
    {
      icon: ProcessIcon3,
      processTitle: "Online Support",
      processIntro: "24 hours a day, 7 days a week",
      bgClr: "bg-clr-gray1 justify-content-center"
    },
    {
      icon: ProcessIcon4,
      processTitle: "Flexible Payment",
      processIntro: "Pay with Multiple Credit Cards",
      bgClr: "bg-clr-offWhite justify-content-start"
    },
  ]

  return (
    <div className='process'>
      <div className="processWrapper">
        {
          ProcessData?.map((process, index) => {
            return <div className={`${process.bgClr} processItem border-end px-4 section-padding d-flex`} key={index}>
              <div className="info text-center">
                <div className="icon mb-4">
                  <img src={process?.icon} alt="icon" className="img-fluid" />
                </div>
                <h4 className='fs-4 text-clr-dark1 fw-black mb-3'>
                  {process?.processTitle}
                </h4>
                <p className='fs-6 fw-medium text-clr-dark4'>
                  {process?.processIntro}
                </p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Process;