import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { BiSolidHide } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-full">
      <Header hasNavbar={false} />

      {/* FAQs */}
      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 text-[#0B0D21] pt-32 gap-20">
        <div className="flex flex-row justify-between w-full gap-5">
          <div className="flex flex-row w-1/2 h-fit">
            <div className="flex flex-col gap-10 mt-20">
              <div className="w-52 h-52 bg-[#030812] rounded-[50px]"></div>
              <div className="w-52 h-64 bg-[#030812] rounded-[50px] ml-10"></div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="w-52 h-64 bg-[#030812] rounded-[50px]"></div>
              <div className="w-52 h-52 bg-[#030812] rounded-[50px] ml-10"></div>
            </div>
          </div>

          <div className="w-1/2 h-fit border border-[#E1E3E5] rounded-3xl p-10">
            <p className="text-[26px] font-semibold">Welcome Back!</p>
            <p className="text-[14px] text-[#666666]">
              Please enter your details.
            </p>

            <div className="flex flex-col w-full gap-6 mt-10 text-[14px]">
              <div className="flex flex-col w-full gap-1">
                <p className="text-[#666666]">
                  Phone number, user name, or email address
                </p>
                <input className="w-full h-11 text-[14px] font-normal border border-[#E1E3E5] rounded-xl pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100" />
              </div>

              <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row justify-between text-[#666666]">
                  <p>Password</p>
                  <button className="flex flex-row justify-center items-center gap-2">
                    <BiSolidHide size={20} className="text-[#666666]/80" />
                    <p>Hide</p>
                  </button>
                </div>

                <input className="w-full h-11 text-[14px] font-normal border border-[#E1E3E5] rounded-xl pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100" />
                <button className="flex justify-end text-sm underline mt-1">
                  Forgot Password
                </button>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#0B0D21]"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button className="flex justify-center items-center w-full h-12 bg-[#030812] rounded-xl mt-2 active:scale-95 transition-all">
                <p className="text-[16px] text-white font-medium">Log in</p>
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"></div>

              <div className="flex flex-col gap-2">
                <button className="flex flex-row justify-center items-center w-full h-11 border border-[#E1E3E5] rounded-full gap-2">
                  <FcGoogle size={20} />
                  <p>Continue with Google</p>
                </button>
                <button className="flex flex-row justify-center items-center w-full h-11 border border-[#E1E3E5] rounded-full gap-2">
                  <FaFacebook size={20} className="text-[#0C82EE]" />
                  <p>Continue with Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-[#EDEDED] mt-28"></div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
