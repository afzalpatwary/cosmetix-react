import CartSidebar from '../../Components/cartSidebar/CartSidebar';
import SubPageBanner from '../../Components/subPageBanner/SubPageBanner';
import BannerBG from '../../assets/img/subBannerBg.jpg';
import subBannerImg from '../../assets/img/subBannerImg.png';

const Product = () => {
  return (
    <div>
      <CartSidebar />
      <SubPageBanner
        bannerTitle={"Our Collection"}
        bannerIntro={"Duis cras auctor maecenas convallis dictum. Odio pulvinar nunc vestibulum. Cras adipiscing ut fringilla."} 
        bannerBg={BannerBG} 
        bannerImg={subBannerImg}
      />
    </div>
  );
};

export default Product;