interface Props {
  hasNavbar: boolean;
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
import { LuMessagesSquare, LuSearch } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import SignUp from "../forms/SignUp";

const Header = ({ hasNavbar }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full text-white bg-[#030812]">
        <div className="flex flex-row justify-start items-center h-12 w-[1240px] mx-auto bg-[#030812] px-8">
          {hasNavbar ? (
            <div className="flex flex-row items-center gap-2 w-full">
              <BsBagCheckFill size={16} />
              <p className="text-[14px] font-light cursor-pointer">
                Free shipping on all orders over $22
              </p>
            </div>
          ) : (
            <div>
              <Link
                to={"/homepage"}
                className="flex flex-row items-center gap-2 w-full"
              >
                <img
                  src="/icons/logo-white.svg"
                  className="w-48 object-cover"
                />
              </Link>
            </div>
          )}

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

      {/* Navbar */}
      {hasNavbar && (
        <div className="w-[1240px] mx-auto h-fit text-[#0B0D21]">
          <div className="w-full h-full px-8">
            <div className="flex flex-row justify-between items-center h-24 border-b border-[#E3E3E3]">
              <a href="/homepage" className="flex w-60 h-full">
                <img src="/icons/logo.svg" className="w-full" />
              </a>

              <div className="flex flex-row justify-end items-center w-[400px] h-11 relative">
                <input
                  placeholder="Sign up and get 100% off your first order"
                  className="w-full h-full text-[14px] font-normal border border-[#E1E3E5] rounded-md pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
                />
                <LuSearch
                  size={20}
                  className="absolute mr-4 text-[#9A9CAA] cursor-pointer"
                />
              </div>

              <div className="flex flex-row justify-center items-center gap-2">
                <button className="flex flex-row justify-center items-center w-32 h-11 border border-[#E1E3E5] rounded-md gap-3 active:scale-95 transition-all">
                  <img src="/icons/cart.svg" />
                  <p className="text-[14px]">Cart</p>
                  <div className="flex justify-center items-center bg-[#030812] w-5 h-5 rounded-full">
                    <p className="text-white text-[10px]">2</p>
                  </div>
                </button>

                <button className="flex flex-row justify-center items-center w-11 h-11 border border-[#E1E3E5] rounded-md active:scale-95 transition-all">
                  <img src="/icons/heart.svg" />
                </button>

                <Select>
                  <SelectTrigger className="flex flex-row justify-center items-center gap-2 outline-none">
                    <button className="flex flex-row justify-center items-center w-11 h-11 bg-[#030812] rounded-md active:scale-95 transition-all">
                      <img src="/icons/user.svg" />
                    </button>
                  </SelectTrigger>
                  <SelectContent className="absolute right-[-40px] mt-2">
                    <SelectGroup>
                      <SelectItem value="english">Login</SelectItem>
                      <SelectItem value="filipino">Sign up</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <SignUp />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
