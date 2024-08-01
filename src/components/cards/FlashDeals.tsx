import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

const FlashDeals = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000})] );
  const [emblaTopBanner] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000})] );
  const [emblaBottomBanner] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000})] );


  return (
    <div className="flex flex-row justify-center items-center mt-16 gap-2 h-80">
      <div className="flex flex-col max-w-[390px] gap-2 h-full">
        {/* Top Banner */}
        <Link
          to={"/shop-page"}
          className="embla mx-auto w-full h-1/2 bg-[#E3E3E3] rounded-md"
          ref={emblaTopBanner}
        >
          <div className="embla__container h-full">
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/macbook-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/headphone-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/xbox-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        </Link>
        <Link
          to={"/shop-page"}
          className="embla mx-auto w-full h-1/2 bg-[#E3E3E3] rounded-md"
          ref={emblaBottomBanner}
        >
          <div className="embla__container h-full">
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/sofa-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/chair-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Shop Page */}
      <Link
        to={"/shop-page"}
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
