import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import HelpCenter from "./Pages/HelpCenter";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import ShopPage from "./Pages/ShopPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop-page" element={<ShopPage />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
