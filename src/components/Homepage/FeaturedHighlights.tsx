interface Featured {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  featuredData: Featured[];
}

const FeaturedHighlights = ({ featuredData }: Props) => {
  return (
    <div className="w-full h-32 border border-gray-lightGray rounded-md mt-16 px-7">
      <div className="grid grid-cols-4 justify-between items-center w-full h-full">
        {featuredData?.map((featuredData) => (
          <div key={featuredData.title} className="flex justify-center items-center gap-3">
            {featuredData.icon}
            <div className="flex flex-col justify-center items-start gap-[1px]">
              <p className="text-[16px] font-medium">{featuredData.title}</p>
              <p className="text-[12px] font-normal text-gray-coolGray">{featuredData.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHighlights;
