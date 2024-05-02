import { GoHeartFill } from "react-icons/go";

const Discovery = () => {
  return (
    <button className="flex w-56 h-80 border border-[#E0E0E0] rounded-md">
      <div className="flex flex-col justify-center items-center p-4 w-full gap-6 mt-2">
          <img
            src="/images/categories/mens-apparel.png"
            className="flex justify-center items-center object-scale-down w-fit h-fit"
          />
          
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex flex-row gap-3">
            <p className="font-medium">$10.30</p>
            <p className="line-through text-[#666666] text-[12px] font-semibold">
              $159.00
            </p>
          </div>
          <p className="text-[14px] text-[#8B96A5]">T-shirts for Men</p>
          <div className="flex flex-row justify-between w-full mt-6">
            <p className="text-[12px] font-medium">1.5k Sold</p>
            <GoHeartFill className="text-red-600" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Discovery;
