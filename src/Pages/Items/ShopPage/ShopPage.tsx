import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ShopCard from "./components/ShopCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Link } from "react-router-dom";
import Filters from "./components/Filters";

const ShopPage = () => {
const sizes = ["S", "M", "L", "XL"]
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
const prices = ["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"]
const collections = ["All products", "Best sellers", "New arrivals", "Accessories"]
const tags = ["Fashion", "Hats", "Sandal", "Belt", "Bag", "Sunglasses", "Beachwear", "Snacker", "Vagabond", "Minimog", "Denim"]

  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Filters */}
          <Filters sizes={sizes} colors={colors} prices={prices} collections={collections} tags={tags}/>

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
