interface Props {
  categoryImage: string;
  categoryName: string;
}

const Categories = ({ categoryImage, categoryName } : Props) => {
  return (
    <button className="flex flex-col justify-start items-center gap-7">
      <div className="flex justify-center items-center w-32 h-32 bg-[#F5F5F5] rounded-full">
        <img src={categoryImage} className="w-24 h-24 object-scale-down"/>
      </div>
      <p className="flex justify-center items-center w-32">{categoryName}</p>
    </button>
  );
};

export default Categories;
