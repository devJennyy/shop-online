import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const FlashDeals = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000})] );

  return (
    <div className="flex flex-row justify-center items-center mt-20 gap-2 h-80">
      <div className="flex flex-col gap-2 h-full">
        <div className="w-[390px] h-1/2 bg-[#E3E3E3] rounded-md">
          <img
            src="/images/small-banner.png"
            className="object-cover rounded-md h-full w-full "
          />
        </div>
        <div className="w-[390px] h-1/2 bg-[#E3E3E3] rounded-md">
          <img
            src="/images/small-banner-two.png"
            className="object-cover rounded-md h-full w-full "
          />
        </div>
      </div>

      <div
        className="embla mx-auto max-w-full h-full rounded-md"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
