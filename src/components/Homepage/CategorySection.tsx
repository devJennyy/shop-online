import CategoryHeader from "../layout/CategoryHeader";

interface Category {
  categoryImage: string;
  categoryName: string;
}

interface Props {
  categoryData: Category[];
}

const CategorySection = ({ categoryData }: Props) => {
  return (
    <div className="flex flex-col mt-20 gap-14">
      <CategoryHeader subHeader={"Shop From"} Header={"Top Categories"} />

      <div className="grid grid-cols-7 gap-16">
        {categoryData?.map((categoryData) => (
          <button key={categoryData.categoryName} className="flex flex-col justify-start items-center gap-7">
            <div className="flex justify-center items-center w-32 h-32 bg-offWhite rounded-full">
              <img
                src={categoryData.categoryImage}
                alt={categoryData.categoryName}
                className="w-24 h-24 object-scale-down"
              />
            </div>
            <p className="flex justify-center items-center w-32">
              {categoryData.categoryName}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
