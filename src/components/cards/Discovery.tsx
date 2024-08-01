import { NumericFormat } from "react-number-format";
interface Props {
  itemImage: string;
  currentPrice: number;
  previousPrice: number;
  itemName: string;
  totalSold: number;
  savedStatus: React.ReactNode;
}

const Discovery = ({
  itemImage,
  currentPrice,
  previousPrice,
  itemName,
  totalSold,
  savedStatus,
}: Props) => {
  return (
    <button className="flex w-56 h-80 border border-[#E0E0E0] rounded-md">
      <div className="flex flex-col justify-center items-center p-4 w-full gap-6 mt-2">
        <div className="flex justify-center items-center w-36 h-[10.7rem] object-scale-down">
          <img src={itemImage} className="w-full h-full" />
        </div>

        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex flex-row gap-3">
            <p className="font-medium">
              <NumericFormat
                displayType="text"
                value={currentPrice}
                thousandSeparator=","
                decimalScale={2}
                fixedDecimalScale={true}
                prefix="$"
              />
            </p>
            <p className="line-through text-[#666666] text-[12px] font-semibold">
              <NumericFormat
                displayType="text"
                value={previousPrice}
                thousandSeparator=","
                decimalScale={2}
                fixedDecimalScale={true}
                prefix="$"
              />
            </p>
          </div>
          <p className="text-[14px] text-[#8B96A5]">{itemName}</p>
          <div className="flex flex-row justify-between w-full mt-5">
            <p className="text-[12px] font-medium">{totalSold}k Sold</p>
            {savedStatus}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Discovery;
