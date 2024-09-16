import MovingCards from "@/components/cards/MovingCards";
import HelpOptionsSection from "@/components/Helpcenter/HelpOptionsSection";
import SearchSection from "@/components/Helpcenter/SearchSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const HelpCenter = () => {
  return (
    <div className="w-full">
      <Header hasNavbar={false} />
      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 pt-32 gap-10">
        <SearchSection />
        <MovingCards />
        <HelpOptionsSection />

        <div className="w-full">
          <Footer hasMiniHighlights={false} hasBorder={true} />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
