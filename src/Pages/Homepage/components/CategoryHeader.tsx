interface Props {
  subHeader: string;
  Header: string;
}

const CategoryHeader = ({ subHeader, Header }: Props) => {
  return (
    <div className="flex flex-col w-full gap-3 flex-1">
      <p className="text-[#666666] text-left">
        {subHeader}
        <span className="text-[#030812] ml-2">{Header}</span>
      </p>

      <div className="flex flex-1 flex-row justify-start items-center">
        <div className="w-full h-[1px] border bg-[#EDEDED] rounded-full relative"></div>
        <div className="w-20 h-[6px] border bg-[#030812] rounded-full text-left absolute"></div>
      </div>
    </div>
  );
};

export default CategoryHeader;
