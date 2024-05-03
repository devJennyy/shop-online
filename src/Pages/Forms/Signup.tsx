import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { BiSolidHide } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full">
      <Header hasNavbar={false} />

      {/* FAQs */}
      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 text-[#0B0D21] pt-28 gap-10">
        <div className="flex flex-row justify-between w-full gap-5">
          <div className="flex flex-row w-1/2 h-fit">
            <div className="flex flex-col gap-10 mt-20">
              <CardContainer className="inter-var">
                <CardItem translateZ="100">
                  <img
                    src="/images/plusone/image-three.jpg"
                    className="object-cover w-60 h-60 rounded-[50px] "
                  />
                </CardItem>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardItem translateZ="100">
                  <img
                    src="/images/plusone/image-two.jpg"
                    className="object-cover object-center w-60 h-72 rounded-[50px] ml-10"
                  />
                </CardItem>
              </CardContainer>
            </div>

            <div className="flex flex-col gap-10">
              <CardContainer className="inter-var">
                <CardItem translateZ="100">
                  <img
                    src="/images/plusone/image-one.gif"
                    className="object-cover w-60 h-72 rounded-[50px]"
                  />
                </CardItem>
              </CardContainer>

              <CardContainer className="inter-var">
                <CardItem translateZ="100">
                  <img
                    src="/images/plusone/image-four.jpg"
                    className="object-cover w-60 h-60 rounded-[50px] ml-10"
                  />
                </CardItem>
              </CardContainer>
            </div>
          </div>

          <div className="w-[500px] h-fit border border-[#E1E3E5] rounded-3xl p-10">
            <p className="text-[26px] font-semibold">Create an account</p>
            <p className="text-[14px] text-[#666666]">Lorem Ipsum Dolor.</p>

            <div className="flex flex-col w-full gap-4 mt-10 text-[14px]">
              <div className="flex flex-row gap-4">
                <div className="flex flex-col w-full gap-1">
                  <p className="text-[#666666]">First name</p>
                  <input className="w-full h-11 text-[14px] font-normal border border-[#E1E3E5] rounded-xl pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100" />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <p className="text-[#666666]">Last name</p>
                  <input className="w-full h-11 text-[14px] font-normal border border-[#E1E3E5] rounded-xl pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100" />
                </div>
              </div>

              <div className="flex flex-col w-full gap-1">
                <p className="text-[#666666]">Email address or phone number</p>
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
              </div>

              <button className="flex justify-center items-center w-full h-12 bg-[#030812] rounded-xl mt-4 active:scale-95 transition-all">
                <p className="text-[16px] text-white font-medium">
                  Create account
                </p>
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full"></div>

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

              <div className="flex flex-row justify-center items-center gap-2 mt-5">
                <p className="text-[#666666]">Already have an account?</p>
                <Link
                  to={"/login"}
                  className="font-semibold underline underline-offset-2"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default Signup;
