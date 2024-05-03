import FaqsCard from "@/components/cards/FaqsCard";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Faqs = () => {
  return (
    <div className="w-full">
      <Header hasNavbar={false} />

      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-32 gap-20">
        {/* FAQs */}
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-[40px] font-medium">Frequently Ask Questions</p>
          <p className="text-[16px] text-[#666666]">
            Here you can find solutions to your queries.
          </p>
        </div>

        <div className="flex flex-row justify-between w-full gap-5">
          <div className="w-1/2">
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

          <div className="w-1/2">
            <FaqsCard
              numberCount={4}
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

        {/* Footer */}
        <div className="w-full">
          <Footer hasMiniHighlights={false} hasBorder={true} />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
