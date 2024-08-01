interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Benefits = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      {icon}
      <div className="flex flex-col justify-center items-start gap-[1px]">
        <p className="text-[16px] font-medium">{title}</p>
        <p className="text-[12px] font-normal text-gray-coolGray">{description}</p>
      </div>
    </div>
  );
};

export default Benefits;
