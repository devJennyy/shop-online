interface Props {
  subHeader: string;
  Header: string;
}

const CategoryHeader = ({ subHeader, Header }: Props) => {
  return (
    <div className="flex flex-col w-full gap-3 flex-1">
      <p className="text-gray-darkGray text-left">
        {subHeader}
        <span className="text-richBlack ml-2">{Header}</span>
      </p>

      <div className="flex flex-1 flex-row justify-start items-center">
        <div className="w-full h-[1px] border rounded-full relative"></div>
        <div className="w-20 h-[6px] border bg-richBlack rounded-full text-left absolute"></div>
      </div>
    </div>
  );
};

export default CategoryHeader;
