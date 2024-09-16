import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 }),
  ]);
  const [emblaTopBanner] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [emblaBottomBanner] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500 }),
  ]);

  return (
    <div className="flex flex-row justify-center items-center mt-16 gap-2 h-80">
      <div className="flex flex-col max-w-[390px] gap-2 h-full">
        {/* Top */}
        <Link
          to={"/shop-page"}
          className="embla mx-auto w-full h-1/2 bg-gray-lightGray rounded-md"
          ref={emblaTopBanner}
        >
          <div className="embla__container h-full">
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/headphone-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/macbook-banner.png"
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
        {/* Bottom */}
        <Link
          to={"/shop-page"}
          className="embla mx-auto w-full h-1/2 bg-gray-lightGray rounded-md"
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
            <div className="embla__slide flex justify-center items-center">
              <img
                src="/images/banner/furniture-banner.png"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Main */}
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
              src="/images/banner/banner-two.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="embla__slide flex justify-center items-center">
            <img
              src="/images/banner/banner-three.png"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
