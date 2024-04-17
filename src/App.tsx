import {
  BiLogoTelegram,
  BiSolidHelpCircle,
  BiSolidTruck,
} from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import {
  MdKeyboardArrowDown,
  MdOutlineCurrencyExchange,
  MdOutlineSupportAgent,
  MdPayment,
} from "react-icons/md";
import "./App.css";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";
import { BsBagCheckFill } from "react-icons/bs";
import Categories from "./components/Categories";
import Discovery from "./components/Discovery";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
function App() {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col justify-center items-center w-[1240px] h-fit text-[#0B0D21] shrink-0">
        {/* Mini-Navbar */}
        <div className="w-full text-white bg-[#030812]">
          <div className="flex flex-row justify-start items-center h-12 bg-[#030812] px-8">
            <div className="flex flex-row items-center gap-2 w-full">
              <BsBagCheckFill size={16} />
              <p className="text-[14px] font-light cursor-pointer">
                Free shipping on all orders over $50
              </p>
            </div>

            <div className="flex flex-row justify-end items-center gap-6 text-[14px] font-light w-full">
              <button className="flex flex-row justify-center items-center gap-2">
                <IoMdGlobe size={16} />
                <p>English</p>
                <MdKeyboardArrowDown size={16} />
              </button>
              <button className="flex flex-row justify-center items-center gap-2">
                <LuMessagesSquare size={16} />
                <p>Faqs</p>
              </button>
              <button className="flex flex-row justify-center items-center gap-2">
                <BiSolidHelpCircle size={16} />
                <p>Help Center</p>
              </button>
            </div>
          </div>
        </div>

        {/* Body*/}
        <div className="w-full h-full px-8">
          {/* Navbar */}
          <div className="flex flex-row justify-center items-center h-24 border-b border-[#E3E3E3]">
            <button className="active:scale-95 transition-all w-60 h-full">
              <img src="/icons/logo.svg" className="w-full" />
            </button>

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

          {/* Homepage */}
          <div className="flex flex-row justify-center items-center mt-20 gap-2 h-80">
            <div className="flex flex-col gap-2 h-full">
              <div className="w-[390px] h-1/2 bg-[#E3E3E3] rounded-md">
                <img
                  src="/images/small-banner.png"
                  className="object-cover rounded-md h-full w-full "
                />
              </div>
              <div className="w-[390px] h-1/2 bg-[#E3E3E3] rounded-md">
                <img
                  src="/images/small-banner-two.png"
                  className="object-cover rounded-md h-full w-full "
                />
              </div>
            </div>

            <div className="w-full h-full rounded-md">
              <img
                src="/images/banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="w-full h-32 border border-[#E1E3E5] rounded-md mt-16 px-7">
            <div className="flex flex-row justify-between items-center w-full h-full">
              <div className="flex flex-row justify-center items-center gap-3">
                <CiDiscount1 size={60} />
                <div className="flex flex-col justify-center items-start gap-[1px]">
                  <p className="text-[16px] font-medium">Discount</p>
                  <p className="text-[12px] font-normal text-[#9A9CAA]">
                    Enjoy vouchers everyday
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-3">
                <CiDeliveryTruck size={60} />
                <div className="flex flex-col justify-center items-start gap-[1px]">
                  <p className="text-[16px] font-medium">Free Delivery</p>
                  <p className="text-[12px] font-normal text-[#9A9CAA]">
                    100% Free for all orders
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-3">
                <MdOutlineSupportAgent size={55} />
                <div className="flex flex-col justify-center items-start gap-[1px]">
                  <p className="text-[16px] font-medium">Great Support 24/7</p>
                  <p className="text-[12px] font-normal text-[#9A9CAA]">
                    We care your experiences
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-3">
                <GoShieldCheck size={45} />
                <div className="flex flex-col justify-center items-start gap-[1px]">
                  <p className="text-[16px] font-medium">Secure Payment</p>
                  <p className="text-[12px] font-normal text-[#9A9CAA]">
                    100% Secure Payment Method
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div className="flex flex-col mt-20 gap-14">
            <div className="flex flex-col w-full gap-3 flex-1">
              <p className="text-[#666666] text-left">
                Shop From
                <span className="text-[#030812] ml-2">Top Categories</span>
              </p>

              <div className="flex flex-1 flex-row justify-start items-center">
                <div className="w-full h-[1px] border bg-[#EDEDED] rounded-full relative"></div>
                <div className="w-20 h-[6px] border bg-[#030812] rounded-full text-left absolute"></div>
              </div>
            </div>

            <div className="flex flex-col gap-16">
              <div className="flex flex-row justify-between w-full no-scrollbar">
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
              </div>

              <div className="flex flex-row justify-between w-full no-scrollbar">
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
              </div>
            </div>
          </div>

          {/* Flash Deals */}
          <div className="flex flex-col mt-28 gap-14">
            <div className="flex flex-col w-full gap-3 flex-1">
              <p className="text-[#666666] text-left">
                Limited
                <span className="text-[#030812] ml-2">Flash Deals</span>
              </p>

              <div className="flex flex-1 flex-row justify-start items-center">
                <div className="w-full h-[1px] border bg-[#EDEDED] rounded-full relative"></div>
                <div className="w-20 h-[6px] border bg-[#030812] rounded-full text-left absolute"></div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-56 gap-4">
              <div className="w-full h-full bg-[#EDEDED] rounded-md">
                <img
                  src="/images/flashdeals.png"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="w-full h-full bg-[#EDEDED] rounded-md">
                <img
                  src="/images/flashdeals-two.png"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="w-full h-full bg-[#EDEDED] rounded-md">
                <img
                  src="/images/flashdeals-three.png"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Daily Discovery */}
          <div className="flex flex-col mt-28 gap-14">
            <div className="flex flex-col w-full gap-3 flex-1">
              <p className="text-[#666666] text-left">
                Daily
                <span className="text-[#030812] ml-2">Discovery</span>
              </p>

              <div className="flex flex-1 flex-row justify-start items-center">
                <div className="w-full h-[1px] border bg-[#EDEDED] rounded-full relative"></div>
                <div className="w-20 h-[6px] border bg-[#030812] rounded-full text-left absolute"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* First Row */}
              <div className="flex flex-row justify-between w-full">
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
              </div>

              {/* Second Row */}
              <div className="flex flex-row justify-between w-full">
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
              </div>

              {/* Third Row */}
              <div className="flex flex-row justify-between w-full">
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
              </div>
            </div>
          </div>

          {/* Mini Highlights */}
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

          {/* Footer */}
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
                <p className="text-[18px] font-semibold">
                  Company
                </p>
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
                <p className="text-[18px] font-semibold">
                  Help Center
                </p>
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
                <p className="text-[18px] font-semibold">
                  Partner
                </p>
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
                <p className="text-[18px] font-semibold">
                  Get app
                </p>
                <div className="flex flex-col gap-2">
                  <button className="flex justify-center items-center w-40 h-12 rounded-md bg-[#1C1C1C] text-white active:scale-95 transition-all">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FaApple size={22} />
                      <div className="flex flex-col justify-start items-start">
                        <p className="text-[10px]">Download on the</p>
                        <p className="text-[12px] font-semibold">Google Play</p>
                      </div>
                    </div>
                  </button>

                  <button className="flex justify-center items-center w-40 h-12 rounded-md bg-[#1C1C1C] text-white active:scale-95 transition-all">
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
    </>
  );
}

export default App;
