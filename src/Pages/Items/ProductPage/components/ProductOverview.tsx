import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { IoMdHeart } from "react-icons/io";
import ShopCard from "../../ShopPage/components/ShopCard";
import { IShopItems } from "@/interface/ShopPage/ShopItems";

interface Props {
  selectedMedia: string;
  selectionMedia?: string[];
  shopName: string;
  productName: string;
  itemCurrentPrice: number;
  itemPreviousPrice: number;
  discountPercentage: number;
  itemLeft: number;
  size?: string[];
  colors?: string[];
}

const ProductOverview = ({
  selectedMedia,
  selectionMedia,
  shopName,
  productName,
  itemCurrentPrice,
  itemPreviousPrice,
  discountPercentage,
  itemLeft,
  size,
  colors,
}: Props) => {
  const [count, setCount] = useState(1);
  const shopItem: IShopItems[] = [
    {
      image: "/images/shop-item/sunglasses/sunglass-cover.png",
      itemName: "Vintage Sunglasses",
      price: 10.15,
      colors: ["bg-[#000000]", "bg-[#836953]", "bg-[#FFD1DC]", "bg-[#C6AEC7]"],
      sold: true,
    },
    {
      image: "/images/shop-item/blazer/blazer-cover.jpg",
      itemName: "Fashion Blazer & Pants",
      price: 10.15,
      colors: ["bg-red-600", "bg-[#000000]"],
      sold: false,
    },
    {
      image: "/images/shop-item/sweatshirt/sweatshirt-cover.jpg",
      itemName: "Topstitched Sweatshirt",
      price: 25.0,
      colors: ["bg-[#EBE6DB]"],
      sold: true,
    },
    {
      image: "/images/shop-item/sandals/sandal-cover.jpg",
      itemName: "Sandals with Heels",
      price: 25.0,
      colors: ["bg-[#8DB4D2]", "bg-[#000000]", "bg-[#EBE6DB]"],
      sold: true,
    },
  ];
  return (
    <div className="flex flex-col w-full h-fit gap-20">
      {/* Product Preview */}
      <div className="flex flex-row justify-between">
        {/* Media */}
        <div className="flex flex-row w-fit h-[600px] gap-5">
          <div className="flex flex-col justify-between w-20 h-full gap-4">
            {selectionMedia?.map((selection, index) => {
              return (
                <img
                  src={selection}
                  className={`${selection} ${
                    index == 0
                      ? `outline outline-2 outline-offset-4`
                      : `hover:outline hover:outline-2 hover:outline-offset-4 transition-all`
                  } w-full h-full object-cover mt-[6px] cursor-pointer`}
                />
              );
            })}
          </div>

          <div className="w-[500px] h-full">
            <img src={selectedMedia} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className=" flex flex-col w-1/2 h-full ml-14">
          <p className="uppercase text-[14px] text-[#666666] font-medium">
            {shopName}
          </p>
          <p className="text-[30px] font-semibold">{productName}</p>

          <div className="flex flex-row items-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />

            <div className="flex flex-row gap-2 text-[14px] text-[#A4A1AA] font-normal mt-[4px]">
              <p>4.0</p>
              <p>(121 Reviews)</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-3 my-6">
            <p className="text-[24px] font-bold">
              ${itemCurrentPrice.toFixed(2)}
            </p>
            <p className="text-[#A4A1AA] line-through">
              ${itemPreviousPrice.toFixed(2)}
            </p>
            <div className="flex justify-center items-center w-16 h-5 bg-[#DA3F3F] rounded-full">
              <p className="uppercase text-[10px] text-white">
                Save {discountPercentage}%
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex justify-between items-center bg-[#FDEFEE] w-full h-10 outline outline-1 outline-[#F8CCCC] rounded-sm text-[#FF706B] text-[14px] font-medium px-4">
            <p>Hurry up! Sale ends in:</p>
            <Countdown
              className="tracking-[7px] font-bold"
              date={Date.now() + 18000000}
            />
          </div>

          {/* Item Stock */}
          <div className="flex flex-col justify-start items-start mt-8 gap-2">
            <p className="text-[12px] text-[#666666] font-normal">
              Only <span className="font-bold">{itemLeft}</span> item(s) left in
              stock!
            </p>
            <div className="w-full h-1 bg-[#DEDEDE] rounded-full">
              <div className="w-10 h-1 bg-[#EF2D2D] rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col gap-7 mt-8">
            {/* Size */}
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-medium">Size</p>
              <div className="flex flex-row gap-3 text-[14px]">
                {size?.map((sizes, index) => {
                  return (
                    <button
                      className={`${sizes} ${
                        index == 0
                          ? `w-11 h-11 bg-[#030812] text-white`
                          : `w-11 h-11 border hover:bg-[#030812] hover:text-white transition-all`
                      } flex justify-center items-center rounded-md`}
                    >
                      {sizes}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color */}
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-medium">Color</p>
              <div className="flex flex-row justify-start items-center gap-3">
                {colors?.map((color, index) => {
                  return (
                    <div
                      className={`${color} ${
                        index == 0
                          ? `w-4 h-4 outline outline-black outline-1 outline-offset-2 mr-[2px]`
                          : `w-5 h-5 outline outline-1 outline-[#E6E6E6]`
                      } rounded-full cursor-pointer`}
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-medium">Quantity</p>
              <div className="flex flex-row justify-start gap-4">
                <div className="flex flex-row">
                  <button
                    onClick={() => setCount((prevCount) => prevCount - 1)}
                    className="flex justify-center items-center w-12 h-11 border rounded-tl-md rounded-bl-md"
                  >
                    <LuMinus size={14} />
                  </button>
                  <p className="flex justify-center items-center border-t border-b w-12 h-11">
                    {count}
                  </p>
                  <button
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                    className="flex justify-center items-center w-12 h-11 border rounded-tr-md rounded-br-md"
                  >
                    <LuPlus size={14} />
                  </button>
                </div>

                {/* Add to cart */}
                <Link
                  to={"/signup"}
                  className="flex justify-center items-center w-full h-11 bg-black text-white rounded-md active:bg-white active:border active:text-black transition-all"
                >
                  <p>Add to cart</p>
                </Link>

                {/* Favourite */}
                <Link to={"/signup"}>
                  <HoverCard openDelay={20} closeDelay={10}>
                    <HoverCardTrigger asChild>
                      <Button
                        variant="link"
                        className="flex flex-row justify-center items-center min-w-11 h-11 border border-[#E1E3E5] rounded-md"
                      >
                        <img src="/icons/heart.svg" />
                      </Button>
                    </HoverCardTrigger>

                    <HoverCardContent
                      side="top"
                      className="flex flex-row justify-center items-center gap-2 w-48 h-14"
                    >
                      <IoMdHeart className="text-red-600" />
                      <p className="text-[14px]">Favorite</p>
                      <p className="text-[14px] text-[#757575]">(8.2k)</p>
                    </HoverCardContent>
                  </HoverCard>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex flex-col justify-start items-start mt-8">
        <div className="flex flex-row gap-10 font-medium transition-all">
          <button className="active:font-bold">Descriptions</button>
          <button className="active:font-bold">Additional Information</button>
          <button className="active:font-bold">Reviews</button>
        </div>

        <div className="w-full h-[2px] bg-[#DEDEDE] rounded-full mt-2">
          <div className="w-24 h-[2px] bg-[#030812] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-7 text-justify text-[14px] mt-7">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            libero non metus fermentum suscipit nec nec purus. Phasellus at
            sapien velit. Vivamus nec purus nec orci accumsan pharetra.
            Curabitur vel tristique urna. Sed ut ligula vel mauris rhoncus
            dictum. Vivamus ac turpis nec mauris dignissim lobortis non in
            ipsum. Suspendisse auctor risus quis velit bibendum, eget convallis
            turpis ultricies. Integer in aliquam metus. Etiam at nisi quis arcu
            tincidunt posuere. Cras tincidunt ullamcorper massa.
          </p>
          <p>
            Nes bibendum velit luctus sit amet. Sed aliquam nulla felis, at
            hendrerit nisl iaculis sit amet. Maecenas vehicula lacinia tortor, a
            porta.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="flex flex-col">
        <p className="text-[30px] font-semibold">Related Products</p>

        <div className="grid grid-cols-4 mt-10 gap-4">
          {shopItem?.map((item) => {
            return (
              <Link to={"/product-page"}>
                <ShopCard
                  image={item.image}
                  itemName={item.itemName}
                  itemPrice={item.price}
                  colors={item.colors}
                  sold={item.sold}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
