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
      <div className="w-full text-white bg-richBlack">
        <div className="flex flex-row justify-start items-center h-12 w-[1240px] mx-auto bg-richBlack px-8">
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

          {/* Language */}
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
                  <SelectItem value="japanese">Japanese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Faqs */}
            <Link
              to={"/faqs"}
              className="flex flex-row justify-center items-center gap-2"
            >
              <LuMessagesSquare size={16} />
              <p>Faqs</p>
            </Link>

            {/* Help Center */}
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
        <div className="w-[1240px] mx-auto">
          <div className="w-full h-full px-8">
            <div className="flex flex-row justify-between items-center h-24 border-b border-gray-lightGray">
              <a href="/homepage" className="flex w-60 h-full">
                <img src="/icons/logo.svg" className="w-full" />
              </a>

              {/* Search Item */}
              <div className="flex flex-row justify-end items-center w-[400px] h-11 relative">
                <input
                  placeholder="Sign up and get 100% off your first order"
                  className="w-full h-full text-[14px] font-normal border border-gray-lightGray rounded-md pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100"
                />
                <LuSearch
                  size={20}
                  className="absolute mr-4 text-gray-slateGray cursor-pointer"
                />
              </div>

              {/* Cart */}
              <div className="flex flex-row justify-center items-center gap-2">
                <HoverCard openDelay={20} closeDelay={10}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="flex flex-row justify-center items-center w-11 h-11 border border-gray-lightGray rounded-md"
                    >
                      <img src="/icons/cart.svg" />
                    </Button>
                  </HoverCardTrigger>

                  <HoverCardContent className="w-80 h-80">
                    <div className="flex flex-col justify-center items-center py-4">
                      <div className="w-48 h-48">
                        <img
                          src="/icons/cart.png"
                          className="w-fit h-fit object-cover ml-[10px] gap-5 mt-3"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center mt-3">
                        <p className="font-bold">No Orders</p>
                        <p className="text-[13px] text-gray-darkGray/90">
                          You haven't made any orders yet.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* Favourites */}
                <HoverCard openDelay={20} closeDelay={10}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="flex flex-row justify-center items-center w-11 h-11 border border-gray-lightGray rounded-md"
                    >
                      <img src="/icons/heart.svg" />
                    </Button>
                  </HoverCardTrigger>

                  <HoverCardContent className="w-80 h-80">
                    <div className="flex flex-col justify-center items-center py-2 gap-5">
                      <div className="w-48 h-48">
                        <img
                          src="/icons/favourite.svg"
                          className="w-fit h-fit object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold">No Favorites</p>
                        <p className="text-[13px] text-gray-darkGray/90">
                          You haven't liked any items yet.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* User Icon */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex flex-row justify-center items-center w-11 h-11 bg-richBlack rounded-md">
                      <img src="/icons/user.svg" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link to={"/login"}>
                      <DropdownMenuItem>Login</DropdownMenuItem>
                    </Link>
                    <Link to={"/signup"}>
                      <DropdownMenuItem>Signup</DropdownMenuItem>
                    </Link>
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
