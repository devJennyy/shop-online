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

  const banners = [
    "/images/banner/headphone-banner.png",
    "/images/banner/macbook-banner.png",
    "/images/banner/xbox-banner.png",
  ];

  const bottomBanners = [
    "/images/banner/sofa-banner.png",
    "/images/banner/chair-banner.png",
    "/images/banner/furniture-banner.png",
  ];

  const renderSlides = (images: string[]) =>
    images.map((src, index) => (
      <div key={index} className="embla__slide flex justify-center items-center">
        <img
          src={src}
          alt={`Banner ${index}`}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    ));

  return (
    <div className="flex flex-row justify-center items-center mt-16 gap-2 h-80">
      <div className="flex flex-col max-w-[390px] gap-2 h-full">
        {/* Top Banner */}
        <Link
          to="/shop-page"
          className="embla mx-auto w-full h-1/2 bg-gray-lightGray rounded-md"
          ref={emblaTopBanner}
        >
          <div className="embla__container h-full">
            {renderSlides(banners)}
          </div>
        </Link>
        {/* Bottom Banner */}
        <Link
          to="/shop-page"
          className="embla mx-auto w-full h-1/2 bg-gray-lightGray rounded-md"
          ref={emblaBottomBanner}
        >
          <div className="embla__container h-full">
            {renderSlides(bottomBanners)}
          </div>
        </Link>
      </div>

      {/* Main Banner */}
      <Link
        to="/shop-page"
        className="embla mx-auto max-w-full h-full rounded-md"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          {renderSlides([
            "/images/banner/banner.png",
            "/images/banner/banner-two.png",
            "/images/banner/banner-three.png",
          ])}
        </div>
      </Link>
    </div>
  );
};

export default Hero;
