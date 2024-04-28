interface Props {
  image: string;
  itemName: string;
  itemPrice: string;
  sold: boolean;
}

const ShopCard = ({ image, itemName, itemPrice, sold }: Props) => {
  return (
    <button className="flex w-[285px] h-[400px] border border-[#E0E0E0] rounded-md">
      <div className="flex flex-col justify-center items-center p-4 w-full">
        <div className="flex justify-center items-center w-full h-[260px]">
          <img
            src={image}
            className="flex justify-center items-center object-cover w-full h-full"
          />

          {sold && (<div className="flex flex-col justify-center items-center w-14 h-14 rounded-full bg-[#B1B1B1]/70 absolute">
            <p className="text-white text-[14px] font-medium leading-4">
              Sold out
            </p>
          </div>)}
          
        </div>

        <div className="flex flex-col items-start w-full mt-5">
          <div className=" flex flex-col text-start gap-1">
            <p className="font-medium">{itemName}</p>

            <p className="text-[14px]">{itemPrice}</p>
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
