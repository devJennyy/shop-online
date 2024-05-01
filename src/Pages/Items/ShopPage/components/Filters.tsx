interface Props {
  sizes?: string[];
  colors?: string[];
}
const Filters = ( {sizes, colors} : Props) => {
  return (
    <div className="w-[450px] h-full">
      <p className="text-[18px] font-semibold">Filters</p>

      <div className="flex flex-col text-start gap-10 mt-5">
        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-medium">Size</p>

          <div className="flex flex-row gap-3 text-[14px]">
            {sizes?.map((size) => {
              return (
                <button className="flex justify-center items-center border w-11 h-11 rounded-md hover:bg-[#030812] hover:text-white active:bg-[#030812]">
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-medium">Colors</p>

          <div className="grid grid-cols-6 gap-2 w-52">
            {colors?.map((color) => {
              return <div className={`w-7 h-7 rounded-full ${color}`}></div>;
            })}
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

        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-medium">Tags</p>

          <div className="flex flex-row items-start flex-wrap w-fit gap-3 text-[#666666] text-[14px]">
            <p>Fashion</p>
            <p>Hats</p>
            <p>Sandal</p>
            <p>Belt</p>
            <p>Bags</p>
            <p>Sunglasses</p>
            <p>Beachwear</p>
            <p>Snacker</p>
            <p>Vagabond</p>
            <p>Minimog</p>
            <p>Denim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
