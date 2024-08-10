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
    "bg-itemColor-black",
    "bg-itemColor-lightBeige",
    "bg-itemColor-skyBlue",
    "bg-itemColor-rose",
    "bg-itemColor-earthBrown",
    "bg-itemColor-brightBlue",
    "bg-itemColor-pink",
    "bg-itemColor-mintGreen",
    "bg-itemColor-blush",
    "bg-itemColor-navyBlue",
    "bg-itemColor-gold",
    "bg-itemColor-coral",
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
      image: "/images/product-item/hats/hat-khaki.png",
      itemName: "Summer Hat",
      price: 25.0,
      colors: [
        "bg-itemColor-lightBeige",
        "bg-itemColor-white",
        "bg-itemColor-black"
      ],
      sold: false
    },
    {
      image: "/images/product-item/sunglasses/sunglass-cover.png",
      itemName: "Vintage Sunglasses",
      price: 10.15,
      colors: [
        "bg-itemColor-black",
        "bg-itemColor-earthBrown",
        "bg-itemColor-pink",
        "bg-itemColor-rose"
      ],
      sold: true
    },
    {
      image: "/images/product-item/blazer/blazer-cover.jpg",
      itemName: "Fashion Blazer & Pants",
      price: 10.15,
      colors: [
        "bg-red-600",
        "bg-itemColor-black"
      ],
      sold: false
    },
    {
      image: "/images/product-item/sweatshirt/sweatshirt-cover.jpg",
      itemName: "Topstitched Sweatshirt",
      price: 25.0,
      colors: [
        "bg-itemColor-lightBeige"
      ],
      sold: true
    },
    {
      image: "/images/product-item/sandals/sandal-cover.jpg",
      itemName: "Sandals with Heels",
      price: 25.0,
      colors: [
        "bg-itemColor-skyBlue",
        "bg-itemColor-black",
        "bg-itemColor-lightBeige"
      ],
      sold: true
    },
    {
      image: "/images/product-item/men-suit/suit-cover.jpg",
      itemName: "Men's Suit",
      price: 25.0,
      colors: [
        "bg-itemColor-lightBeige",
        "bg-itemColor-earthBrown",
        "bg-itemColor-skyBlue"
      ],
      sold: true
    }
  ];

  return (
    <div id="homepage">
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-richBlack px-8 pt-12">
        <div className="flex justify-between w-full">
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

            <Pagination />
          </div>
        </div>

        <Footer hasMiniHighlights={true} hasBorder={false} />
      </div>
    </div>
  );
};

export default ShopPage;
