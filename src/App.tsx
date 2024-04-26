import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Faqs from "./components/layout/Faqs";
import Homepage from "./Pages/Homepage";
import HelpCenter from "./components/layout/HelpCenter";
function App() {
  return (
    <Router>
      {/* Main Container */}
      <div className="w-full h-fit text-[#0B0D21]">
        <div className="">

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
