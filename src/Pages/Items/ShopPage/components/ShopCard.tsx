interface Props {
  image: string;
  itemName: string;
  itemPrice: number;
  colors: string[];
  sold: boolean;
}

const ShopCard = ({ image, itemName, itemPrice, sold, colors }: Props) => {
  return (
    <button className="flex w-[285px] h-[400px] border border-[#E0E0E0] rounded-md">
      <div className="flex flex-col justify-center items-center p-4 w-full">
        <div className="flex justify-center items-center w-full h-[260px]">
          {/* Image */}
          <img
            src={image}
            className="flex justify-center items-center object-cover object-top w-full h-full"
          />

          {/* Sold */}
          {sold && (
            <div className="flex flex-col justify-center items-center w-14 h-14 rounded-full bg-[#B1B1B1]/70 absolute">
              <p className="text-white text-[14px] font-medium leading-4">
                Sold out
              </p>
            </div>
          )}
        </div>

        {/* Item Name and Price */}
        <div className="flex flex-col items-start w-full mt-5">
          <div className=" flex flex-col text-start gap-1">
            <p className="font-medium">{itemName}</p>

            <p className="text-[14px]">${itemPrice.toFixed(2)}</p>
          </div>

          {/* Color */}
          <div className="flex flex-row justify-center items-center gap-2 mt-4">
            {colors?.map((color, index) => {
              return (
                <div
                  className={`${color} ${
                    index == 0
                      ? `w-4 h-4 outline outline-1 outline-offset-2 mr-[2px]`
                      : `w-5 h-5 outline outline-1 outline-[#E6E6E6]`
                  } rounded-full cursor-pointer`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ShopCard;
