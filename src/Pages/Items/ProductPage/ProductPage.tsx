import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductOverview from "./components/ProductOverview";


const ProductPage = () => {
  return (
    <div id="shop-page">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <ProductOverview />

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default ProductPage;
