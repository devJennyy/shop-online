import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ShopCard from "./components/ShopCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Filters */}
          <div className="w-[450px] h-full">
            <p className="text-[18px] font-semibold">Filters</p>

            <div className="flex flex-col text-start gap-10 mt-5">
              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-medium">Size</p>

                <div className="flex flex-row gap-3 text-[14px]">
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    S
                  </button>
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    M
                  </button>
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    L
                  </button>
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                    XL
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-medium">Colors</p>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2">
                    <div className="w-7 h-7 rounded-full bg-black"></div>
                    <div className="w-7 h-7 rounded-full bg-[#EBE6DB]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#B1C5D4]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#C6AEC7]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#836953]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#6CB9FF]"></div>
                  </div>

                  <div className="flex flex-row gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FFD1DC]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#C1E1C1]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#C6AEC7]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#063E66]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#FFD700]"></div>
                    <div className="w-7 h-7 rounded-full bg-[#FF6C6C]"></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-medium">Prices</p>

                <div className="flex flex-col items-start gap-3 text-[#666666] text-[14px]">
                  <button className="hover:text-[#030812]">$0-$50</button>
                  <button className="hover:text-[#030812]">$50-$100</button>
                  <button className="hover:text-[#030812]">$100-$150</button>
                  <button className="hover:text-[#030812]">$150-$200</button>
                  <button className="hover:text-[#030812]">$300-$400</button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-medium">Collections</p>

                <div className="flex flex-col items-start gap-3 text-[#666666] text-[14px]">
                  <button className="hover:text-[#030812]">All products</button>
                  <button className="hover:text-[#030812]">Best sellers</button>
                  <button className="hover:text-[#030812]">New arrivals</button>
                  <button className="hover:text-[#030812]">Accessories</button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full h-full ">
            <p className="text-[18px] font-semibold">Best Selling</p>

            <div className="flex flex-col">
              <div className="flex flex-row mt-5 gap-4">
                <Link to={"/product-page"}>
                  <ShopCard
                    image="/images/shop-item/item-one.png"
                    itemName="Boxy Denim Hat"
                    itemPrice="$25.00"
                    sold={false}
                  />
                </Link>
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={true}
                />
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={false}
                />
              </div>

              <div className="flex flex-row mt-5 gap-4">
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={false}
                />
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={false}
                />
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={false}
                />
              </div>

              <div className="flex flex-row mt-5 gap-4">
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={true}
                />
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={true}
                />
                <ShopCard
                  image="/images/shop-item/item-one.png"
                  itemName="Boxy Denim Hat"
                  itemPrice="$25.00"
                  sold={true}
                />
              </div>
            </div>

            {/* Pagination */}
            <Pagination className="flex mt-20">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default ShopPage;
