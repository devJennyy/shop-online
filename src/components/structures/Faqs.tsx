import FaqsCard from "@/components/cards/FaqsCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@radix-ui/react-select";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoMdGlobe } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Faqs = () => {
  return (
    <div className="w-full">
      <div className="w-full text-white bg-[#030812]">
        <div className="flex flex-row justify-start items-center h-12 w-[1240px] mx-auto bg-[#030812] px-8">
          <Link
            to={"/homepage"}
            className="flex flex-row items-center gap-2 w-full"
          >
            <img src="/icons/logo-white.svg" className="w-48 object-cover" />
          </Link>

          <div className="flex flex-row justify-end items-center gap-6 text-[14px] font-light w-full">
            <Select>
              <SelectTrigger className="flex flex-row justify-center items-center gap-2 outline-none">
                <IoMdGlobe size={16} />
                <SelectValue placeholder="English" />
                <MdKeyboardArrowDown size={16} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="filipino">Filipino</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Link
              to={"/faqs"}
              className="flex flex-row justify-center items-center gap-2"
            >
              <LuMessagesSquare size={16} />
              <p>Faqs</p>
            </Link>

            <Link
              to={"/help-center"}
              className="flex flex-row justify-center items-center gap-2"
            >
              <BiSolidHelpCircle size={16} />
              <p>Help Center</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 text-[#0B0D21] pt-32 gap-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[40px] font-medium">Frequently Ask Questions</p>
          <p className="text-[16px] text-[#666666]">
            Here you can find solutions to your queries.
          </p>
        </div>

        <div className="flex flex-row justify-between w-full gap-5">
          <div className="w-1/2">
            <FaqsCard
              numberCount="01"
              titleHeader="Lorem ipsum dolor sit amet consectetur."
              details="Lorem ipsum dolor sit amet consectetur. In augue ipsum tellusultrices. 
            Ac pharetra ultrices consectetur consequat tellus massa. Necaliquam cras sagittis 
            duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. 
            Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper 
            in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt 
            facilisi mi id. Dictum elit velit."
            />
          </div>

          <div className="w-1/2">
            <FaqsCard
              numberCount="01"
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

        <div className="w-full border-b border-[#EDEDED] mt-28"></div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Faqs;
