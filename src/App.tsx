import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Faqs from "./Pages/Faqs/Faqs";
import Login from "./Pages/Forms/Login";
import Signup from "./Pages/Forms/Signup";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";
import Homepage from "./Pages/Homepage/Homepage";
import ProductPage from "./Pages/Items/ProductPage/ProductPage";
import ShopPage from "./Pages/Items/ShopPage/ShopPage";
function App() {
  return (
    <Router>
      {/* Main Container */}
      <div className="w-full h-fit text-[#0B0D21]">
        <div>

          {/* Routes */}
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
        </div>
      </div>
    </Router>
  );
}

export default App;
