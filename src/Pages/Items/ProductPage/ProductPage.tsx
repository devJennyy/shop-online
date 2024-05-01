import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { FaTicketSimple } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";

const ProductPage = () => {
  return (
    <div id="shop-page">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Picture */}
          <div className="flex flex-row w-fit h-[600px] gap-4">
            <div className="flex flex-col justify-between w-full h-full gap-4">
              <div className="max-w-28 h-full">
                <img src="/images/shop-item/hats/hat-black.jpg" className="w-full h-full object-cover"/>
              </div>
              <div className="max-w-28 h-full">
                <img src="/images/shop-item/hats/hat-black-two.jpg" className="w-full h-full object-cover"/>
              </div>
              <div className="max-w-28 h-full">
                <img src="/images/shop-item/hats/hat-white.jfif" className="w-full h-full object-cover"/>
              </div>
              <div className="max-w-28 h-full">
                <img src="/images/shop-item/hats/hat-white-two.jfif" className="w-full h-full object-cover"/>
              </div>
            </div>

            <div className="min-w-[500px] h-full">
              <img
                src="/images/shop-item/hats/hat-black.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className=" flex flex-col w-1/2 h-full pl-10">
            <p className="uppercase text-[14px] text-[#666666]">Shop Name</p>
            <p className="text-[30px] font-semibold">Boxy Denim Hat</p>

            <div className="flex flex-row items-center gap-3 my-4">
              <p className="text-[24px] font-bold">$39.00</p>
              <p className="text-[#666666] line-through">$59.00</p>
              <div className="flex justify-center items-center w-16 h-5 bg-[#DA3F3F] rounded-full">
                <p className="uppercase text-[10px] text-white">Save 33%</p>
              </div>
            </div>

            <div className="flex justify-start items-center bg-[#FDEFEE] w-full h-10 outline outline-1 outline-[#F8CCCC] rounded-sm">
              <p className="text-[#FF706B] text-[14px] font-medium ml-3">
                Hurry up! Sale ends in:
              </p>
            </div>
            <div className="flex flex-col justify-start items-start mt-8 gap-2">
              <p className="text-[12px] text-[#666666] font-normal">
                Only <span className="font-bold">9</span> item(s) left in stock!
              </p>

              <div className="w-full h-1 bg-[#DEDEDE] rounded-full">
                <div className="w-10 h-1 bg-[#EF2D2D] rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-medium">Vouchers</p>

                <div className="flex flex-row gap-3 text-[14px]">
                  <FaTicketSimple size={30} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-medium">Size</p>

                <div className="flex flex-row gap-3 text-[14px]">
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md bg-[#030812] text-white">
                    S
                  </button>
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    M
                  </button>
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    L
                  </button>
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    XL
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-medium">Color</p>
                <div className="flex flex-row justify-start items-center gap-3">
                  <div className="w-4 h-4 bg-[#000000] rounded-full outline outline-1 outline-offset-2"></div>
                  <div className="w-5 h-5 bg-[#EBE6DB] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-medium">Quantity</p>
                <div className="flex flex-row justify-start gap-5">
                  <div className="flex flex-row">
                    <div className="flex justify-center items-center w-16 h-11 border rounded-tl-md rounded-bl-md">
                      <LuMinus size={14} />
                    </div>
                    <p className="flex justify-center items-center border-t border-b w-16 h-11">
                      1
                    </p>
                    <div className="flex justify-center items-center w-16 h-11 border rounded-tr-md rounded-br-md">
                      <LuPlus size={14} />
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full h-11 bg-black rounded-md">
                    <p className="text-white">Add to cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default ProductPage;
