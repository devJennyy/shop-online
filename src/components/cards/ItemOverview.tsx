import React from 'react';
import { NumericFormat } from 'react-number-format';
import CategoryHeader from '../layout/CategoryHeader';

interface itemOverviewData {
  itemImage: string;
  currentPrice: number;
  previousPrice: number;
  itemName: string;
  totalSold: number;
  savedStatus: React.ReactNode;
}

interface ItemOverviewProps {
  itemOverviewData: itemOverviewData[];
}

const ItemOverview = ({ itemOverviewData }: ItemOverviewProps) => {
  return (
    <div className="flex flex-col mt-28 gap-14">
      <CategoryHeader subHeader="Daily" Header="Discovery" />

      <div className="grid grid-cols-5 gap-4">
        {itemOverviewData.map((item, index) => (
          <button key={index} className="flex w-56 h-80 border border-gray-lightGray rounded-md">
            <div className="flex flex-col justify-center items-center p-4 w-full gap-6 mt-2">
              <div className="flex justify-center items-center w-36 h-[10.7rem]">
                <img src={item.itemImage} alt={item.itemName} className="w-full h-full object-cover rounded-md" />
              </div>

              <div className="flex flex-col justify-center items-start w-full">
                <div className="flex flex-row gap-3">
                  <p className="font-medium">
                    <NumericFormat
                      displayType="text"
                      value={item.currentPrice}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      prefix="$"
                    />
                  </p>
                  <p className="line-through text-gray-darkGray text-[12px] font-semibold">
                    <NumericFormat
                      displayType="text"
                      value={item.previousPrice}
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale
                      prefix="$"
                    />
                  </p>
                </div>
                <p className="text-[14px] text-gray-slateGray">{item.itemName}</p>
                <div className="flex flex-row justify-between w-full mt-5">
                  <p className="text-[12px] font-medium">{item.totalSold}k Sold</p>
                  {item.savedStatus}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemOverview;
