import { BiSolidHelpCircle } from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./App.css";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";
import { BsBagCheckFill } from "react-icons/bs";
import Categories from "./components/Categories";
import Discovery from "./components/Discovery";

function App() {
  return (
    <>
      {/* Main Container */}
      <div className="w-full h-fit text-[#0B0D21]">
        {/* Mini-Navbar */}
        <div className="w-full text-white bg-[#030812]">
          <div className="flex flex-row justify-start items-center max-w-[1240px] mx-auto sm:h-12 h-7 bg-[#030812] sm:px-8 px-4">
            <div className="flex flex-row items-center gap-2 w-full">
              <BsBagCheckFill size={16} className="sm:flex hidden" />
              <BsBagCheckFill size={16} className="sm:hidden" />
              <p className="sm:text-[14px] text-[10px] font-extralight">
                Free shipping on all orders over $50
              </p>
            </div>

            <div className="flex flex-row justify-end items-center sm:gap-6 gap-3 text-[14px] font-extralight sm:w-full">
              <div className="flex flex-row justify-center items-center gap-2">
                <IoMdGlobe size={16} className="sm:flex hidden" />
                <IoMdGlobe size={12} className="sm:hidden" />
                <p className="md:flex hidden">English</p>
                <MdKeyboardArrowDown size={16} className="md:flex hidden" />
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <LuMessagesSquare size={16} className="sm:flex hidden" />
                <LuMessagesSquare className="sm:hidden" />
                <p className="md:flex hidden">Faqs</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <BiSolidHelpCircle size={16} className="sm:flex hidden" />
                <BiSolidHelpCircle className="sm:hidden" />
                <p className="md:flex hidden">Help Center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body*/}
        <div className="w-full h-full max-w-[1240px] mx-auto sm:px-8 px-4">
          {/* Navbar */}
          <div className="flex flex-row sm:justify-between justify-center items-center h-24 border-b border-[#E3E3E3]">
            <img src="/icons/logo.svg" />

            <div className="lg:flex flex-row justify-end items-center w-[400px] h-11 relative hidden">
              <input
                placeholder="Sign up and get 100% off your first order"
                className="w-full h-full text-[#9A9CAA] text-[14px] font-normal border border-[#E1E3E5] rounded-md pl-4 pr-12 outline-none"
              />
              <LuSearch size={20} className="absolute mr-4 text-[#030812]" />
            </div>

            <div className="sm:flex flex-row justify-center items-center gap-2 hidden">
              <div className="flex flex-row justify-center items-center xl:w-32 w-11 h-11 border border-[#E1E3E5] rounded-md gap-3">
                <img src="/icons/cart.svg" />
                <p className="text-[14px] xl:flex hidden">Cart</p>
                <div className="xl:flex justify-center items-center bg-[#030812] w-5 h-5 rounded-full hidden">
                  <p className="text-white text-[10px] ">2</p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center w-11 h-11 border border-[#E1E3E5] rounded-md">
                <img src="/icons/heart.svg" />
              </div>

              <div className="flex flex-row justify-center items-center w-11 h-11 bg-[#030812] rounded-md">
                <img src="/icons/user.svg" />
              </div>
            </div>
          </div>

          {/* Homepage */}
          <div className="flex flex-row justify-center items-center mt-20 gap-2 h-80">
            <div className="sm:flex flex-col gap-2 h-full hidden">
              <div className="w-[440px] h-1/2 bg-[#E3E3E3] rounded-md"></div>
              <div className="w-[440px] h-1/2 bg-[#E3E3E3] rounded-md"></div>
            </div>

            <div className="w-full h-full bg-[#E3E3E3] rounded-md"></div>
          </div>

          {/* Highlights */}
          <div className="w-full h-32 border border-[#E1E3E5] rounded-md mt-16"></div>

          {/* Top Categories */}
          <div className="flex flex-col mt-32 gap-14">
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
              <div className="flex flex-row justify-between w-full">
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
                <Categories />
              </div>

              <div className="flex flex-row justify-between w-full">
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
          <div className="flex flex-col mt-44 gap-14">
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
              <div className="w-full h-full bg-[#EDEDED] rounded-md"></div>
              <div className="w-full h-full bg-[#EDEDED] rounded-md"></div>
              <div className="w-full h-full bg-[#EDEDED] rounded-md"></div>
            </div>
          </div>

          {/* Daily Discovery */}
          <div className="flex flex-col mt-44 gap-14">
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
              <div className="flex flex-row justify-between w-full">
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
              </div>

              <div className="flex flex-row justify-between w-full">
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
                <Discovery />
              </div>

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
          <div className="w-full h-32 border border-[#E1E3E5] rounded-md mt-48"></div>

          {/* Footer */}
          <div className="flex flex-col mt-32 gap-32 w-full">
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-col items-center gap-8 w-80">
                <img src="/icons/logo.svg" className="w-56" />
                <p className="w-full text-[14px] text-[#666666] font-normal text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex flex-row justify-between items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF0F7]"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF0F7]"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF0F7]"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF0F7]"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EDF0F7]"></div>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Company</p>
                <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
                  <p>About</p>
                  <p>Contact</p>
                  <p>Sitemap</p>
                  <p>Store Locations</p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Help Center</p>
                <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
                  <p>Customer Service</p>
                  <p>Policy</p>
                  <p>Terms & Conditions</p>
                  <p>FAQs</p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Partner</p>
                <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
                  <p>Become Seller</p>
                  <p>Affiliate</p>
                  <p>Advertise</p>
                  <p>Partnership</p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-8">
                <p className="text-[18px] font-semibold">Get app</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center items-center w-40 h-12 rounded-md bg-[#1C1C1C] text-white">
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-[10px]">Download on the</p>
                      <p className="text-[12px] font-semibold">Appstore</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-40 h-12 rounded-md bg-[#1C1C1C] text-white">
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-[10px]">Download on the</p>
                      <p className="text-[12px] font-semibold">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-[#666666] text-[12px]">
              <div className="w-full border-b border-[#EDEDED]"></div>
              <div className="flex flex-col gap-2 mt-10 mb-20">
                <p>Designed & Built by Jenny Pieloor</p>
                <p>2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
