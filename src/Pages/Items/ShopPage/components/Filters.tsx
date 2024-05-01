interface Props {
  sizes?: string[];
  colors?: string[];
  prices?: string[];
  collections?: string[];
  tags?: string[];
}
const Filters = ( {sizes, colors, prices, collections, tags} : Props) => {
  return (
    <div className="w-[380px] h-full">
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
              return (
                <div className={`w-7 h-7 rounded-full ${color}`}></div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-medium">Prices</p>

          <div className="flex flex-col items-start gap-3 text-[#666666] text-[14px]">
            {prices?.map((price) => {
              return (
                <button className="hover:text-[#030812]">{price}</button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-medium">Collections</p>

          <div className="flex flex-col items-start gap-3 text-[#666666] text-[14px]">
            {collections?.map((collection) => {
              return (
                <button className="hover:text-[#030812]">{collection}</button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[16px] font-medium">Tags</p>

          <div className="flex flex-row items-start flex-wrap w-52 gap-3 text-[#666666] text-[14px]">
            {tags?.map((tag) => {
              return (
                <p>{tag}</p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
