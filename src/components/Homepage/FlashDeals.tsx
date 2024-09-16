import CategoryHeader from "../layout/CategoryHeader";

interface FlashDeal {
  imageSrc: string;
}

interface Props {
  flashDealsData: FlashDeal[];
}

const FlashDeals = ({ flashDealsData }: Props) => {
  return (
    <div className="flex flex-col mt-28 gap-14">
      <CategoryHeader subHeader={"Flash"} Header={"Deals"} />

      <div className="grid grid-cols-3 justify-between items-center w-full h-56 gap-4">
        {flashDealsData?.map((deal, index) => (
          <div key={index} className="w-full h-full rounded-md">
            <img
              src={deal.imageSrc}
              alt={`Flash deal ${index + 1}`}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;
