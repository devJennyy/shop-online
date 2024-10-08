import { CiDiscount1, CiDeliveryTruck } from "react-icons/ci";
import { GoHeartFill, GoShieldCheck } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LimitedEdition from "@/components/Homepage/FlashDeals";
import Hero from "@/components/cards/Hero";
import ItemOverview from "../components/cards/ItemOverview";
import FeaturedHighlights from "../components/Homepage/FeaturedHighlights";
import CategorySection from "../components/Homepage/CategorySection";

const Homepage = () => {
  const featuredData = [
    {
      title: "Discount",
      description: "Enjoy vouchers everyday",
      icon: <CiDiscount1 size={60} />,
    },
    {
      title: "Delivery",
      description: "100% Free for all orders",
      icon: <CiDeliveryTruck size={60} />,
    },
    {
      title: "Great Support 24/7",
      description: "We care your experiences",
      icon: <MdOutlineSupportAgent size={55} />,
    },
    {
      title: "Secure Payment",
      description: "100% Secure Payment Method",
      icon: <GoShieldCheck size={45} />,
    },
  ];
  const categoryData = [
    {
      categoryImage: "/images/categories/womens-apparel.png",
      categoryName: "Women's Apparels",
    },
    {
      categoryImage: "/images/categories/womens-shoes.png",
      categoryName: "Women's Shoes",
    },
    {
      categoryImage: "/images/categories/cosmetics.png",
      categoryName: "Cosmetics",
    },
    {
      categoryImage: "/images/categories/home-decor.png",
      categoryName: "Home Decor",
    },
    {
      categoryImage: "/images/categories/appliances.png",
      categoryName: "Appliances",
    },
    {
      categoryImage: "/images/categories/womens-accessories.png",
      categoryName: "Women's Accessories",
    },
    {
      categoryImage: "/images/categories/bags.png",
      categoryName: "Bags",
    },
    {
      categoryImage: "/images/categories/mens-apparel.png",
      categoryName: "Men's Apparel",
    },
    {
      categoryImage: "/images/categories/men-shoes.png",
      categoryName: "Men's Shoes",
    },
    {
      categoryImage: "/images/categories/gadgets.png",
      categoryName: "Gadgets",
    },
    {
      categoryImage: "/images/categories/motors.png",
      categoryName: "Motors",
    },
    {
      categoryImage: "/images/categories/home&living.png",
      categoryName: "Home & Living",
    },
    {
      categoryImage: "/images/categories/mens-accessories.png",
      categoryName: "Men's Accessories",
    },
    {
      categoryImage: "/images/categories/mobiles-accessories.png",
      categoryName: "Mobiles Accessories",
    },
  ];
  const flashDealsData = [
    { imageSrc: "/images/flashdeals/flashdeals.png" },
    { imageSrc: "/images/flashdeals/flashdeals-two.png" },
    { imageSrc: "/images/flashdeals/flashdeals-three.png" },
  ];
  
  const itemOverviewData = [
    {
      itemImage: "/images/discovery/fujifilm.png",
      currentPrice: 159.6,
      previousPrice: 194.0,
      itemName: "Fujifilm Instax mini 8",
      totalSold: 1.2,
      savedStatus: <GoHeartFill className="text-savedItems-red" />,
    },
    {
      itemImage: "/images/discovery/menshirt.png",
      currentPrice: 19.99,
      previousPrice: 34.3,
      itemName: "Polo Shirt for Men",
      totalSold: 7.8,
      savedStatus: <GoHeartFill className="text-savedItems-red" />,
    },
    {
      itemImage: "/images/discovery/bag.png",
      currentPrice: 15.92,
      previousPrice: 31.83,
      itemName: "Leather Backpack",
      totalSold: 1.3,
      savedStatus: <GoHeartFill className="text-savedItems-red" />,
    },
    {
      itemImage: "/images/discovery/chair.png",
      currentPrice: 59.9,
      previousPrice: 75,
      itemName: "Pillow Grey Chair",
      totalSold: 2.7,
      savedStatus: <GoHeartFill className="text-savedItems-red" />,
    },
    {
      itemImage: "/images/discovery/headphone.png",
      currentPrice: 69.9,
      previousPrice: 100.0,
      itemName: "Wireless Headphone",
      totalSold: 22,
      savedStatus: <GoHeartFill className="text-savedItems-red" />,
    },
    {
      itemImage: "/images/discovery/dress.png",
      currentPrice: 9.26,
      previousPrice: 17.15,
      itemName: "Corset Mini Dress",
      totalSold: 89,
      savedStatus: <GoHeartFill className="text-savedItems-gray" />,
    },
    {
      itemImage: "/images/discovery/sandals.png",
      currentPrice: 20.99,
      previousPrice: 34.3,
      itemName: "Women's Heels",
      totalSold: 1.5,
      savedStatus: <GoHeartFill className="text-savedItems-gray" />,
    },
    {
      itemImage: "/images/discovery/plushtoy.png",
      currentPrice: 11.82,
      previousPrice: 21.44,
      itemName: "Plush Toy",
      totalSold: 55,
      savedStatus: <GoHeartFill className="text-savedItems-gray" />,
    },
    {
      itemImage: "/images/discovery/home-decor.png",
      currentPrice: 14.58,
      previousPrice: 27.73,
      itemName: "Artificial Flower",
      totalSold: 18.6,
      savedStatus: <GoHeartFill className="text-savedItems-gray" />,
    },
    {
      itemImage: "/images/discovery/nike.png",
      currentPrice: 84.98,
      previousPrice: 104.98,
      itemName: "Converse Men's Chuck",
      totalSold: 6.8,
      savedStatus: <GoHeartFill className="text-savedItems-gray" />,
    },
  ];
  return (
    <div id="homepage">
      <Header hasNavbar={true} />

      <div className="w-[1240px] mx-auto h-full px-8">
        <Hero />
        <FeaturedHighlights featuredData={featuredData} />
        <CategorySection categoryData={categoryData} />
        <LimitedEdition flashDealsData={flashDealsData} />
        <ItemOverview itemOverviewData={itemOverviewData} />
        <Footer hasMiniHighlights={true} hasBorder={false} />
      </div>
    </div>
  );
};

export default Homepage;
