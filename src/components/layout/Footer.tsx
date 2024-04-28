interface Props {
  hasBorder: boolean;
}

import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = ( {hasBorder} : Props) => {
  return (
    <div className="flex flex-col gap-20 w-full">
      {hasBorder && (<div className="w-full border-b border-[#EDEDED] mt-28"></div>)}
      

      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col items-center gap-8 w-80">
          <button>
            <img src="/icons/logo.svg" className="w-56" />
          </button>
          <p className="w-full text-[14px] text-[#666666] font-normal text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-row justify-between items-center w-full">
            <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
              <FaTwitter size={16} />
            </button>
            <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
              <FaFacebookF size={16} />
            </button>
            <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
              <FaYoutube size={16} />
            </button>
            <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
              <FaInstagram size={16} />
            </button>
            <button className="flex flex-row justify-center items-center w-12 h-12 rounded-2xl bg-[#EDF0F7] active:scale-95 transition-all">
              <FaPinterestP size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <p className="text-[18px] font-semibold">Company</p>
          <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
            <button className="hover:text-[#030812]">About</button>
            <button className="hover:text-[#030812]">Contact</button>
            <button className="hover:text-[#030812]">Sitemap</button>
            <button className="hover:text-[#030812]">Store Locations</button>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <p className="text-[18px] font-semibold">Help Center</p>
          <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
            <button className="hover:text-[#030812]">Customer Service</button>
            <button className="hover:text-[#030812]">Policy</button>
            <button className="hover:text-[#030812]">Terms & Conditions</button>
            <p className="hover:text-[#030812]">FAQs</p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <p className="text-[18px] font-semibold">Partner</p>
          <div className="flex flex-col justify-start items-start text-[#666666] text-[14px] font-normal gap-2">
            <button className="hover:text-[#030812]">Become Seller</button>
            <button className="hover:text-[#030812]">Affiliate</button>
            <button className="hover:text-[#030812]">Advertise</button>
            <button className="hover:text-[#030812]">Partnership</button>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <p className="text-[18px] font-semibold">Get app</p>
          <div className="flex flex-col gap-2">
            <button className="flex justify-center items-center w-40 h-12 rounded-md bg-[#030812] text-white active:scale-95 transition-all">
              <div className="flex flex-row justify-center items-center gap-3">
                <FaApple size={22} />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-[12px] font-semibold">Google Play</p>
                </div>
              </div>
            </button>

            <button className="flex justify-center items-center w-40 h-12 rounded-md bg-[#030812] text-white active:scale-95 transition-all">
              <div className="flex flex-row justify-center items-center gap-3">
                <FaGooglePlay />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-[12px] font-semibold">Google Play</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <button className="flex flex-col justify-center items-center gap-2 text-[#666666] text-[12px] hover:underline">
        <div className="w-full border-b border-[#EDEDED]"></div>
        <div className="flex flex-col gap-2 mt-10 mb-20">
          <p>Designed & Built by Jenny Pieloor</p>
          <p>2024</p>
        </div>
      </button>
    </div>
  );
};

export default Footer;
