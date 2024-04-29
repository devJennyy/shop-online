import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const ProductPage = () => {
  return (
    <div id="shop-page">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Filters */}
          <div className="w-[780px] h-full">
            <div className="w-full h-[400px] bg-slate-500"></div>
            <div className="flex flex-row justify-between items-center w-full mt-4 gap-2">
              <div className="w-full h-20 bg-slate-600"></div>
              <div className="w-full h-20 bg-slate-600"></div>
              <div className="w-full h-20 bg-slate-600"></div>
              <div className="w-full h-20 bg-slate-600"></div>
            </div>
          </div>

          {/* Content */}
          <div className=" flex flex-col w-full h-full ml-20">
            <p className="uppercase text-[14px] text-[#666666]">Shop Name</p>
            <p className="text-[18px] font-semibold">Boxy Denim Hat</p>

            <div className="flex flex-row items-center gap-3 my-4">
              <p className="text-[18px] font-bold">$ 39.00</p>
              <p className="text-[12px] text-[#666666] line-through">$ 39.00</p>
              <div className="flex justify-center items-center w-14 h-5 bg-red-600 rounded-full">
                <p className="uppercase text-[8px] text-white">Save 33%</p>
              </div>
            </div>

            <div className="flex justify-start items-center bg-[#FDEFEE] w-full h-10 outline outline-1 outline-[#FF706B] rounded-sm">
              <p className="text-[#FF706B] text-[14px] ml-4">
                Hurry up! Sale ends in:
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
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
                  <div className="w-4 h-4 bg-[#B1C5D4] rounded-full outline outline-1 outline-offset-2"></div>
                  <div className="w-5 h-5 bg-[#063E66] rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[16px] font-medium">Quantity</p>
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
