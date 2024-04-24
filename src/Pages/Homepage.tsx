
import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import {
  MdOutlineSupportAgent,
} from "react-icons/md";
import Categories from "../components/cards/Categories";
import Discovery from "../components/cards/Discovery";

const Homepage = () => {
  return (
    <div id="homepage">
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
    </div>
  );
};

export default Homepage;
