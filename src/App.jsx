import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import ProductDetailsSlider from "./Components/productDetailsSlider/ProductDetailsSlider"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/productdetails" element={<ProductDetailsSlider />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
