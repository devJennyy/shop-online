import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductOverview from "./components/ProductOverview";
import { IProductPage } from "@/interface/ProductPage/ProductPage";
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const productOverview: IProductPage[] = [
    {
      hat: {
        selectionMedia: [
          "/images/product-item/hats/hat-khaki.png",
          "/images/product-item/hats/hat-white.png",
          "/images/product-item/hats/hat-black.png",
          "/images/product-item/hats/summer-hat.png",
          "/images/product-item/hats/hat.png",
        ],
        selectedMedia: "/images/product-item/hats/hat-khaki.png",
        shopName: "Shop Name",
        productName: "Summer Hat",
        itemCurrentPrice: 39.0,
        itemPreviousPrice: 59.0,
        discountPercentage: 33,
        itemLeft: 9,
        size: ["S", "M", "L", "XL"],
        colors: ["bg-itemColor-lightBeige", "bg-white", "bg-itemColor-black"],
      },
      headphone: {
        selectionMedia: [
          "/images/product-item/headphone/main-headphone.png",
          "/images/product-item/headphone/headphone-black.png",
          "/images/product-item/headphone/headphone-blue.png",
          "/images/product-item/headphone/headphone-green.png",
          "/images/product-item/headphone/headphone-red.png",
        ],
        selectedMedia: "/images/product-item/headphone/main-headphone.png",
        shopName: "Shop Name",
        productName: "Beats by Dr. Dre Studio3 Wireless Bluetooth Over-ear Headphones",
        itemCurrentPrice: 39.0,
        itemPreviousPrice: 59.0,
        discountPercentage: 33,
        itemLeft: 9,
        colors: ["bg-itemColor-lightBeige", "bg-white", "bg-itemColor-black"],
      },
    },
  ];

  const hatProducts = productOverview.flatMap((page) => page.hat ? [page.hat] : []);
  const location = useLocation();
  const headphone = location.state?.headphone;

  return (
    <div id="shop-page">
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto text-richBlack px-8 pt-12">
        {/* Hat products */}
        {hatProducts.map((product, index) => (
          <ProductOverview
            key={`hat-${index}`}
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
        ))}

        {/* Headphone product */}
        {headphone && (
          <ProductOverview
            key="headphone"
            selectedMedia={headphone.selectedMedia}
            selectionMedia={headphone.selectionMedia}
            shopName={headphone.shopName}
            productName={headphone.productName}
            itemCurrentPrice={headphone.itemCurrentPrice}
            itemPreviousPrice={headphone.itemPreviousPrice}
            discountPercentage={headphone.discountPercentage}
            itemLeft={headphone.itemLeft}
            size={headphone.size}
            colors={headphone.colors}
          />
        )}

        <Footer hasMiniHighlights={true} hasBorder={false} />
      </div>
    </div>
  );
};

export default ProductPage;
