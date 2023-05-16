import Banner from '../../Components/banner/Banner.jsx';
import BestSeller from '../../Components/bestSeller/BestSeller.jsx';
import CartSidebar from '../../Components/cartSidebar/CartSidebar.jsx';
import Categories from '../../Components/categories/Categories.jsx';
import CTA from '../../Components/cta/CTA.jsx';
import LatestNews from '../../Components/latestNews/LatestNews.jsx';
import Process from '../../Components/process/Process.jsx';
import Special from '../../Components/special/Special.jsx';


const Home = () => {
  return (
    <div>
      <CartSidebar />
      <Banner />
      <Categories />
      <BestSeller />
      <CTA />
      <Process />
      <Special />
      <LatestNews />
    </div>
  );
};

export default Home;