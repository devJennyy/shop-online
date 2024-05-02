import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ShopCard from "./components/ShopCard";
import { Link } from "react-router-dom";
import Filters from "./components/Filters";
import { IShopItems } from "@/interface/ShopPage/ShopItems";
import Pagination from "./components/Pagination";

const ShopPage = () => {
  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    "bg-[#000000]",
    "bg-[#EBE6DB]",
    "bg-[#B1C5D4]",
    "bg-[#C6AEC7]",
    "bg-[#836953]",
    "bg-[#6CB9FF]",
    "bg-[#FFD1DC]",
    "bg-[#C1E1C1]",
    "bg-[#C6AEC7]",
    "bg-[#063E66]",
    "bg-[#FFD700]",
    "bg-[#FF6C6C]",
  ];
  const prices = ["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"];
  const collections = [
    "All products",
    "Best sellers",
    "New arrivals",
    "Accessories",
  ];
  const tags = [
    "Fashion",
    "Hats",
    "Sandal",
    "Belt",
    "Bags",
    "Snacker",
    "Sunglasses",
    "Vagabond",
    "Minimog",
    "Denim",
    "Beachwear",
  ];
  const shopItem: IShopItems[] = [
    {
      image: "/images/shop-item/hats/hat-cover.jpg",
      itemName: "Summer Hat",
      price: 25.0,
      colors: ["bg-[#000000]", "bg-[#EBE6DB]"],
      sold: false,
    },
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
    {
      image: "/images/shop-item/men-suit/suit-cover.jpg",
      itemName: "Men's Suit",
      price: 25.0,
      colors: ["bg-[#A6A299]", "bg-[#825E3E]", "bg-[#8DB4D2]"],
      sold: true,
    },
  ];

  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Filters */}
          <Filters
            sizes={sizes}
            colors={colors}
            prices={prices}
            collections={collections}
            tags={tags}
          />

          {/* Content */}
          <div className="w-full h-full ">
            <p className="text-[18px] font-semibold">Best Selling</p>

            <div className="grid grid-cols-3 mt-5 gap-4">
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

            {/* Pagination */}
            <Pagination />
          </div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default ShopPage;
