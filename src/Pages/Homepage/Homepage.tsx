import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import {
  MdOutlineCurrencyExchange,
  MdOutlineSupportAgent,
  MdPayment,
} from "react-icons/md";
import Categories from "../../components/cards/Categories";
import Discovery from "../../components/cards/Discovery";
import FlashDeals from "@/components/cards/FlashDeals";
import { BiLogoTelegram, BiSolidTruck } from "react-icons/bi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Homepage = () => {
  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true}/>

      <div className="w-[1240px] mx-auto h-full px-8">
        {/* Flash Deals */}
        <FlashDeals />

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

        {/* Categories */}
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
              <Categories
                categoryImage="/images/womens-apparel.png"
                categoryName="Women's Apparels"
              />
              <Categories
                categoryImage="/images/womens-shoes.png"
                categoryName="Women's Shoes"
              />
              <Categories
                categoryImage="/images/cosmetics.png"
                categoryName="Cosmetics"
              />
              <Categories
                categoryImage="/images/home-decor.png"
                categoryName="Home Decor"
              />
              <Categories
                categoryImage="/images/appliances.png"
                categoryName="Appliances"
              />
              <Categories
                categoryImage="/images/womens-accessories.png"
                categoryName="Women's Accessories"
              />
              <Categories
                categoryImage="/images/bags.png"
                categoryName="Bags"
              />
            </div>

            <div className="flex flex-row justify-between w-full no-scrollbar">
              <Categories
                categoryImage="/images/mens-apparel.png"
                categoryName="Men's Apparel"
              />
              <Categories
                categoryImage="/images/men-shoes.png"
                categoryName="Men's Shoes"
              />
              <Categories
                categoryImage="/images/gadgets.png"
                categoryName="Gadgets"
              />
              <Categories
                categoryImage="/images/motors.png"
                categoryName="Motors"
              />
              <Categories
                categoryImage="/images/home&living.png"
                categoryName="Home & Living"
              />
              <Categories
                categoryImage="/images/mens-accessories.png"
                categoryName="Men's Accessories"
              />
              <Categories
                categoryImage="/images/mobiles-accessories.png"
                categoryName="Mobiles Accessories"
              />
            </div>
          </div>
        </div>

        {/* Limited Flash Deals */}
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

        {/* Discovery */}
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
        <div className="w-full h-32 border border-[#E1E3E5] rounded-md my-28 cursor-pointer">
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
        <Footer hasBorder={false}/>
      </div>
    </div>
  );
};

export default Homepage;
