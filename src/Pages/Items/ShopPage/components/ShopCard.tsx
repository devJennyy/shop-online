

const ShopCard = () => {
  return (
    <button className="flex w-[285px] h-[400px] border border-[#E0E0E0] rounded-md">
      <div className="flex flex-col justify-center items-center p-4 w-full">
        <div className="w-full h-[260px]">
          <img
            src="/images/shop-item/item-one.png"
            className="flex justify-center items-center object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col items-start w-full mt-5">
          <div className=" flex flex-col text-start gap-1">
            <p className="font-medium">Boxy Denim Hat</p>

            <p className="text-[14px]">$ 25.00</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <div className="w-4 h-4 bg-[#B1C5D4] rounded-full outline outline-1 outline-offset-2"></div>
            <div className="w-5 h-5 bg-[#063E66] rounded-full"></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ShopCard;
