import { BiSolidHelpCircle } from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import { MdKeyboardArrowDown} from "react-icons/md";
import "./App.css";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";
import { BsBagCheckFill } from "react-icons/bs";

function App() {
  return (
    <>
      {/* Main Container */}
      <div className="w-full h-full text-[#0B0D21]">
        {/* Mini-Navbar */}
        <div className="w-full text-white bg-[#030812]">
          <div className="flex flex-row justify-start items-center max-w-[1240px] mx-auto sm:h-12 mb:h-7 bg-[#030812] sm:px-8 mb:px-4">
            <div className="flex flex-row items-center gap-2 w-full">
              <BsBagCheckFill size={16} className="sm:flex hidden"/>
              <BsBagCheckFill size={16} className="sm:hidden"/>
              <p className="sm:text-[14px] mb:text-[10px] font-extralight">
                Free shipping on all orders over $50
              </p>
            </div>

            <div className="flex flex-row justify-end items-center sm:gap-6 mb:gap-3 text-[14px] font-extralight sm:w-full">
              <div className="flex flex-row justify-center items-center gap-2">
                <IoMdGlobe size={16} className="sm:flex hidden"/>
                <IoMdGlobe size={12} className="sm:hidden"/>
                <p className="md:flex hidden">English</p>
                <MdKeyboardArrowDown size={16} className="md:flex hidden"/>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <LuMessagesSquare size={16} className="sm:flex hidden"/>
                <LuMessagesSquare className="sm:hidden"/>
                <p className="md:flex hidden">Faqs</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <BiSolidHelpCircle size={16} className="sm:flex hidden"/>
                <BiSolidHelpCircle className="sm:hidden"/>
                <p className="md:flex hidden">Help Center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body*/}
        <div className="w-full h-full max-w-[1240px] mx-auto px-8">
        {/* Navbar */}
        <div className="flex flex-row sm:justify-between mb:justify-center items-center h-24 border-b border-[#E3E3E3]">
            <img src="/icons/logo.svg"/>

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
        </div>
      </div>
    </>
  );
}

export default App;
