import { LuSearch } from "react-icons/lu";

const SearchSection = () => (
  <div className="flex flex-col justify-center items-center gap-5 w-full">
    <p className="text-[40px] font-medium">Hi, how can we help?</p>

    <div className="flex justify-end items-center w-full h-16 relative">
      <input
        placeholder="If youre still looking answers to your questions, this guide will help you learn more about our services and their features"
        className="w-full h-full text-[14px] font-normal border border-gray-lightGray rounded-md pl-5 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
      />
      <button className="flex justify-center items-center absolute w-16 h-14 bg-richBlack rounded-tr-md rounded-sm mr-1">
        <LuSearch size={20} className="text-white" />
      </button>
    </div>
  </div>
);

export default SearchSection;
