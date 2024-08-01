interface Props {
  hasMiniHighlights: boolean;
  hasBorder: boolean;
}

import { BiLogoTelegram, BiSolidTruck } from "react-icons/bi";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { MdOutlineCurrencyExchange, MdPayment } from "react-icons/md";

const Footer = ({ hasBorder, hasMiniHighlights }: Props) => {
  return (
    <div className="flex flex-col">
      {/* Mini Highlights */}
      {hasMiniHighlights && (
        <div className="w-full h-32 border border-gray-lightGray rounded-md my-28 cursor-pointer">
          <div className=" flex justify-between items-center w-full h-full px-16 text-[14px]">
            <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
              <BiLogoTelegram size={26} />
              <p>Free Shipping</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
              <MdOutlineCurrencyExchange size={26} />
              <p>Guaranteed Refund</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
              <BiSolidTruck size={26} />
              <p>Fast Delivery</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 active:scale-95 transition-all cursor-pointer">
              <MdPayment size={26} />
              <p>Flexible Payments</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-20 w-full">
        {hasBorder && (
          <div className="w-full border-b border-gray-paleGray mt-28"></div>
        )}

        <div className=" flex justify-between items-start">
          <div className="flex flex-col items-center gap-8 w-80">
            <button>
              <img src="/icons/logo.svg" className="w-56" />
            </button>
            <p className="w-full text-[14px] text-gray-darkGray font-normal text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className=" flex justify-between items-center w-full">
              <button className=" flex justify-center items-center w-12 h-12 rounded-2xl bg-paleBlue active:scale-95 transition-all">
                <FaTwitter size={16} />
              </button>
              <button className=" flex justify-center items-center w-12 h-12 rounded-2xl bg-paleBlue active:scale-95 transition-all">
                <FaFacebookF size={16} />
              </button>
              <button className=" flex justify-center items-center w-12 h-12 rounded-2xl bg-paleBlue active:scale-95 transition-all">
                <FaYoutube size={16} />
              </button>
              <button className=" flex justify-center items-center w-12 h-12 rounded-2xl bg-paleBlue active:scale-95 transition-all">
                <FaInstagram size={16} />
              </button>
              <button className=" flex justify-center items-center w-12 h-12 rounded-2xl bg-paleBlue active:scale-95 transition-all">
                <FaPinterestP size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p className="text-[18px] font-semibold">Company</p>
            <div className="flex flex-col justify-start items-start text-gray-darkGray text-[14px] font-normal gap-2">
              <button className="hover:text-richBlack">About</button>
              <button className="hover:text-richBlack">Contact</button>
              <button className="hover:text-richBlack">Sitemap</button>
              <button className="hover:text-richBlack">Store Locations</button>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p className="text-[18px] font-semibold">Help Center</p>
            <div className="flex flex-col justify-start items-start text-gray-darkGray text-[14px] font-normal gap-2">
              <button className="hover:text-richBlack">Customer Service</button>
              <button className="hover:text-richBlack">Policy</button>
              <button className="hover:text-richBlack">
                Terms & Conditions
              </button>
              <p className="hover:text-richBlack">FAQs</p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p className="text-[18px] font-semibold">Partner</p>
            <div className="flex flex-col justify-start items-start text-gray-darkGray text-[14px] font-normal gap-2">
              <button className="hover:text-richBlack">Become Seller</button>
              <button className="hover:text-richBlack">Affiliate</button>
              <button className="hover:text-richBlack">Advertise</button>
              <button className="hover:text-richBlack">Partnership</button>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p className="text-[18px] font-semibold">Get app</p>
            <div className="flex flex-col gap-2">
              <button className="flex justify-center items-center w-40 h-12 rounded-md bg-richBlack text-white active:scale-95 transition-all">
                <div className=" flex justify-center items-center gap-3">
                  <FaApple size={22} />
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-[10px]">Download on the</p>
                    <p className="text-[12px] font-semibold">Google Play</p>
                  </div>
                </div>
              </button>

              <button className="flex justify-center items-center w-40 h-12 rounded-md bg-richBlack text-white active:scale-95 transition-all">
                <div className=" flex justify-center items-center gap-3">
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

        <button className="flex flex-col justify-center items-center gap-2 text-gray-darkGray text-[12px] hover:underline">
          <div className="w-full border-b border-gray-paleGray"></div>
          <div className="flex flex-col gap-2 mt-10 mb-20">
            <p>Designed & Developed by</p>
            <p>Jenny Pieloor</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Footer;
