import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductOverview from "./components/ProductOverview";
import { IProductPage } from "@/interface/ProductPage/ProductPage";

const ProductPage = () => {
  const productOverview: IProductPage[] = [
    {
      selectionMedia: [
        "/images/shop-item/hats/hat-khaki.png",
        "/images/shop-item/hats/hat-white.png",
        "/images/shop-item/hats/hat-black.png",
        "/images/shop-item/hats/summer-hat.png",
      ],
      selectedMedia: "/images/shop-item/hats/hat-khaki.png",
      shopName: "Shop Name",
      productName: "Summer Hat",
      itemCurrentPrice: 39.0,
      itemPreviousPrice: 59.0,
      discountPercentage: 33,
      itemLeft: 9,
      size: ["S", "M", "L", "XL"],
      colors: ["bg-[#EBE6DB]", "bg-[#000000]"],
    },
  ];
  return (
    <div id="shop-page">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {productOverview?.map((product) => {
          return (
            <ProductOverview
              selectedMedia={product.selectedMedia}
              selectionMedia={product.selectionMedia}
              shopName={product.shopName}
              productName={product.productName}
              itemCurrentPrice={product.itemCurrentPrice}
              itemPreviousPrice={product.itemPreviousPrice}
              discountPercentage={product.discountPercentage}
              itemLeft={product.itemLeft}
              size={product.size}
              colors={product.colors}
            />
          );
        })}

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default ProductPage;
