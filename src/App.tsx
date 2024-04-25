import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  Link,
} from "react-router-dom";
import Faqs from "./Pages/Faqs";
import Homepage from "./Pages/Homepage";
import {
  BiLogoTelegram,
  BiSolidHelpCircle,
  BiSolidTruck,
} from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdOutlineCurrencyExchange,
  MdPayment,
} from "react-icons/md";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";
import { BsBagCheckFill } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import HelpCenter from "./Pages/HelpCenter";
function App() {
  return (
    <Router>
      {/* Mini-Navbar */}
      <div className="w-full text-white bg-[#030812]">
        <div className="flex flex-row justify-start items-center h-12 w-[1240px] mx-auto bg-[#030812] px-8">
          <div className="flex flex-row items-center gap-2 w-full">
            <BsBagCheckFill size={16} />
            <p className="text-[14px] font-light cursor-pointer">
              Free shipping on all orders over $22
            </p>
          </div>

          <div className="flex flex-row justify-end items-center gap-6 text-[14px] font-light w-full">
            <Select>
              <SelectTrigger className="flex flex-row justify-center items-center gap-2 outline-none">
                <IoMdGlobe size={16} />
                <SelectValue placeholder="English" />
                <MdKeyboardArrowDown size={16} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="filipino">Filipino</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Link
              to={"/faqs"}
              className="flex flex-row justify-center items-center gap-2"
            >
              <LuMessagesSquare size={16} />
              <p>Faqs</p>
            </Link>

            <Link to={"/help-center"} className="flex flex-row justify-center items-center gap-2">
              <BiSolidHelpCircle size={16} />
              <p>Help Center</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-[1240px] mx-auto h-fit text-[#0B0D21]">
        <div className="w-full h-full px-8">
          {/* Navbar */}
          <div className="flex flex-row justify-between items-center h-24 border-b border-[#E3E3E3]">
            <a href="/homepage" className="flex w-60 h-full">
              <img src="/icons/logo.svg" className="w-full" />
            </a>

            <div className="flex flex-row justify-end items-center w-[400px] h-11 relative">
              <input
                placeholder="Sign up and get 100% off your first order"
                className="w-full h-full text-[14px] font-normal border border-[#E1E3E5] rounded-md pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
              />
              <LuSearch
                size={20}
                className="absolute mr-4 text-[#9A9CAA] cursor-pointer"
              />
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <button className="flex flex-row justify-center items-center w-32 h-11 border border-[#E1E3E5] rounded-md gap-3 active:scale-95 transition-all">
                <img src="/icons/cart.svg" />
                <p className="text-[14px]">Cart</p>
                <div className="flex justify-center items-center bg-[#030812] w-5 h-5 rounded-full">
                  <p className="text-white text-[10px]">2</p>
                </div>
              </button>

              <button className="flex flex-row justify-center items-center w-11 h-11 border border-[#E1E3E5] rounded-md active:scale-95 transition-all">
                <img src="/icons/heart.svg" />
              </button>
              

              <button className="flex flex-row justify-center items-center w-11 h-11 bg-[#030812] rounded-md active:scale-95 transition-all">
                <img src="/icons/user.svg" />
              </button>
            </div>
          </div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>

          {/* Footer */}
          <div className="w-full h-32 border border-[#E1E3E5] rounded-md mt-28 cursor-pointer">
            <div className="flex flex-row justify-between items-center w-full h-full px-16 text-[14px]">
              <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
                <BiLogoTelegram size={26} />
                <p>Free Shipping</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
                <MdOutlineCurrencyExchange size={26} />
                <p>Guaranteed Refund</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
                <BiSolidTruck size={26} />
                <p>Fast Delivery</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
                <MdPayment size={26} />
                <p>Flexible Payments</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-28 gap-28 w-full">
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-col items-center gap-8 w-80">
                <button>
                  <img src="/icons/logo.svg" className="w-56" />
                </button>
                <p className="w-full text-[14px] text-[#666666] font-normal text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex flex-row justify-between items-center w-full">
                  <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
                    <FaTwitter size={16} />
                  </button>
                  <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
                    <FaFacebookF size={16} />
                  </button>
                  <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
                    <FaYoutube size={16} />
                  </button>
                  <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
                    <FaInstagram size={16} />
                  </button>
                  <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
                    <FaPinterestP size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Company</p>
                <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
                  <button className="hover:text-[#030812]">About</button>
                  <button className="hover:text-[#030812]">Contact</button>
                  <button className="hover:text-[#030812]">Sitemap</button>
                  <button className="hover:text-[#030812]">
                    Store Locations
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Help Center</p>
                <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
                  <button className="hover:text-[#030812]">
                    Customer Service
                  </button>
                  <button className="hover:text-[#030812]">Policy</button>
                  <button className="hover:text-[#030812]">
                    Terms & Conditions
                  </button>
                  <p className="hover:text-[#030812]">FAQs</p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Partner</p>
                <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
                  <button className="hover:text-[#030812]">
                    Become Seller
                  </button>
                  <button className="hover:text-[#030812]">Affiliate</button>
                  <button className="hover:text-[#030812]">Advertise</button>
                  <button className="hover:text-[#030812]">Partnership</button>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Get app</p>
                <div className="flex flex-col gap-2">
                  <button className="flex justify-center items-center w-40 h-12 rounded-md bg-[#030812] text-white active:scale-95 transition-all">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FaApple size={22} />
                      <div className="flex flex-col justify-start items-start">
                        <p className="text-[10px]">Download on the</p>
                        <p className="text-[12px] font-semibold">Google Play</p>
                      </div>
                    </div>
                  </button>

                  <button className="flex justify-center items-center w-40 h-12 rounded-md bg-[#030812] text-white active:scale-95 transition-all">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FaGooglePlay />
                      <div className="flex flex-col justify-start items-start">
                        <p className="text-[10px]">Download on the</p>
                        <p className="text-[12px] font-semibold">Google Play</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button className="flex flex-col justify-center items-center gap-2 text-[#666666] text-[12px] hover:underline">
              <div className="w-full border-b border-[#EDEDED]"></div>
              <div className="flex flex-col gap-2 mt-10 mb-20">
                <p>Designed & Built by Jenny Pieloor</p>
                <p>2024</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
