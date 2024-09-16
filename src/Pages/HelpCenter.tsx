import FaqsCard from "@/components/cards/FaqsCard";
import MovingCards from "@/components/cards/MovingCards";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";

const HelpCenter = () => {
  return (
    <div className="w-full">
      <Header hasNavbar={false} />

      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 text-richBlack pt-32 gap-20">
        <div className="flex flex-col justify-center items-center w-full h-full">
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

          <div className="pb-16">
            <MovingCards />
          </div>

          <div className="flex justify-between w-full gap-5 text-gray-darkGray">
            <div className="flex flex-col items-start w-64 gap-5">
              <button className="flex justify-center items-center gap-5 text-richBlack">
                <LuMessagesSquare size={20} />
                <p>Lorem Ipsum</p>
              </button>
              <button className="flex justify-center items-center gap-5 hover:text-richBlack">
                <LuMessagesSquare size={20} />
                <p>Lorem Ipsum</p>
              </button>
              <button className="flex justify-center items-center gap-5 hover:text-richBlack">
                <LuMessagesSquare size={20} />
                <p>Lorem Ipsum</p>
              </button>
              <button className="flex justify-center items-center gap-5 hover:text-richBlack">
                <LuMessagesSquare size={20} />
                <p>Lorem Ipsum</p>
              </button>
            </div>

            <div className="flex flex-col items-start w-full gap-5">
              <div className="flex justify-center items-center gap-5 text-richBlack">
                <LuMessagesSquare size={20} />
                <p>Lorem Ipsum</p>
              </div>
              <FaqsCard
                numberCount={1}
                titleHeader="Lorem ipsum dolor sit amet consectetur."
                details="Lorem ipsum dolor sit amet consectetur. In augue ipsum tellusultrices. 
                Ac pharetra ultrices consectetur consequat tellus massa. Necaliquam cras sagittis 
                duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. 
                Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper 
                in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt 
                facilisi mi id. Dictum elit velit."
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <Footer hasMiniHighlights={false} hasBorder={true} />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
