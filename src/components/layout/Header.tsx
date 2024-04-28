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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";

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
                  <HoverCard openDelay={20} closeDelay={10}>
                    <HoverCardTrigger asChild>
                      <Button
                        variant="link"
                        className="flex flex-row justify-center items-center w-11 h-11 border border-[#E1E3E5] rounded-md"
                      >
                        <img src="/icons/cart.svg" />
                      </Button>
                    </HoverCardTrigger>

                    <HoverCardContent className="w-80 h-80">
                      <div className="flex flex-col justify-center items-center py-4">
                        <div className="w-48 h-48">
                          <img
                            src="/images/cart.png"
                            className="w-fit h-fit object-cover ml-[10px] gap-5 mt-3"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-3">
                          <p className="font-bold">No Orders</p>
                          <p className="text-[13px] text-[#757575]">
                            You haven't made any orders yet.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                <HoverCard openDelay={20} closeDelay={10}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="flex flex-row justify-center items-center w-11 h-11 border border-[#E1E3E5] rounded-md"
                    >
                      <img src="/icons/heart.svg" />
                    </Button>
                  </HoverCardTrigger>

                  <HoverCardContent className="w-80 h-80">
                    <div className="flex flex-col justify-center items-center py-2 gap-5">
                      <div className="w-48 h-48">
                        <img
                          src="/images/favourite.svg"
                          className="w-fit h-fit object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold">No Favorites</p>
                        <p className="text-[13px] text-[#757575]">
                          You haven't liked any items yet.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex flex-row justify-center items-center w-11 h-11 bg-[#030812] rounded-md">
                      <img src="/icons/user.svg" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link to={"/login"}><DropdownMenuItem>Login</DropdownMenuItem></Link>
                    <Link to={"/signup"}><DropdownMenuItem>Signup</DropdownMenuItem></Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
