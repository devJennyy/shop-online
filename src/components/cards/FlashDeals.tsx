import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

const FlashDeals = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000})] );

  return (
    <div className="flex flex-row justify-center items-center mt-16 gap-2 h-80">
      {/* Column Items */}
      <div className="flex flex-col gap-2 h-full">
        <button className="w-[390px] h-1/2 bg-[#E3E3E3] rounded-md">
          <img
            src="/images/banner/small-banner.png"
            className="object-cover rounded-md h-full w-full "
          />
        </button>
        <button className="w-[390px] h-1/2 bg-[#E3E3E3] rounded-md">
          <img
            src="/images/banner/small-banner-two.png"
            className="object-cover rounded-md h-full w-full "
          />
        </button>
      </div>

      {/* Shop Page */}
      <Link to={"/shop-page"}
        className="embla mx-auto max-w-full h-full rounded-md"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner/banner.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner/banner.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner/banner.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlashDeals;
