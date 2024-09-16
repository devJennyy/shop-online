import FaqsCard from "@/components/cards/AccordionCard";
import { LuMessagesSquare } from "react-icons/lu";

const HelpOptionsSection = () => (
  <div className="flex justify-between w-full gap-5 text-gray-darkGray mb-10 mt-6">
    <div className="flex flex-col items-start w-64 gap-5">
      {[1, 2, 3, 4].map((index) => (
        <button key={index} className="flex items-center gap-5 hover:text-richBlack">
          <LuMessagesSquare size={20} />
          <p>Lorem Ipsum</p>
        </button>
      ))}
    </div>

    <div className="flex flex-col w-full gap-5">
      <div className="flex items-center gap-5 text-richBlack">
        <LuMessagesSquare size={20} />
        <p>Lorem Ipsum</p>
      </div>
      <FaqsCard
        numberCount={1}
        titleHeader="Lorem ipsum dolor sit amet consectetur."
        details="Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultricies. 
        Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis 
        duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. 
        Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper 
        in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt 
        facilisi mi id. Dictum elit velit."
      />
    </div>
  </div>
);

export default HelpOptionsSection;
