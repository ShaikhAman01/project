import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProducts from "./pages/allProducts/AllProducts";
import Signup from "./pages/registration/Signup";
import { LogIn } from "lucide-react";
import Login from "./pages/registration/Login";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/contactUs";

function App() {
  return (
    <div>
    <Router>
    <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/*" element={<NoPage/>}/>
        <Route path="/productinfo" element={<ProductInfo />}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>




      </Routes>
    </Router>
    </div>
  )
}

export default App;

