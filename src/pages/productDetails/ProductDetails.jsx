import BestSeller from '../../Components/bestSeller/BestSeller.jsx';
import NavTabs from "../../Components/navTabs/NavTabs";
import ProductDetailsSlider from "../../Components/productDetailsSlider/ProductDetailsSlider";


const ProductDetails = () => {
  return (
    <div>
      <ProductDetailsSlider />
      <NavTabs />
      <BestSeller />
    </div>
  );
};

export default ProductDetails;