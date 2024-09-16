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
      <main className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 text-richBlack pt-28 gap-10">
        <div className="flex justify-between w-full gap-5">
          <ImageGallery />
          <SignupForm />
        </div>
        <FooterSection />
      </main>
    </div>
  );
};

const ImageGallery = () => (
  <div className="flex w-1/2 h-full">
    <div className="flex flex-col gap-10 mt-20">
      <ImageCard src="/images/plusone/image-three.jpg" className="w-60 h-60" />
      <ImageCard src="/images/plusone/image-two.jpg" className="w-60 h-72 ml-10" />
    </div>
    <div className="flex flex-col gap-10">
      <ImageCard src="/images/plusone/image-one.gif" className="w-60 h-72" />
      <ImageCard src="/images/plusone/image-four.jpg" className="w-60 h-60 ml-10" />
    </div>
  </div>
);

const ImageCard = ({ src, className }: { src: string; className: string }) => (
  <CardContainer className="inter-var">
    <CardItem translateZ="100">
      <img src={src} className={`object-cover rounded-[50px] ${className}`} />
    </CardItem>
  </CardContainer>
);

const SignupForm = () => (
  <div className="w-[500px] border border-gray-lightGray rounded-3xl p-10">
    <p className="text-[26px] font-semibold">Create an account</p>
    <p className="text-[14px] text-gray-darkGray">Lorem Ipsum Dolor.</p>

    <div className="flex flex-col w-full gap-4 mt-10 text-[14px]">
      <div className="flex gap-4">
        <TextInput label="First name" />
        <TextInput label="Last name" />
      </div>
      <TextInput label="Email address or phone number" />
      <PasswordInput />
      <SignupButton />
      <SocialLoginOptions />
      <LoginPrompt />
    </div>
  </div>
);

const TextInput = ({ label }: { label: string }) => (
  <div className="flex flex-col w-full gap-1">
    <p className="text-gray-darkGray">{label}</p>
    <input className="w-full h-11 text-[14px] font-normal border border-gray-lightGray rounded-xl pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100" />
  </div>
);

const PasswordInput = () => (
  <div className="flex flex-col w-full gap-1">
    <div className="flex justify-between text-gray-darkGray">
      <p>Password</p>
      <button className="flex justify-center items-center gap-2">
        <BiSolidHide size={20} className="text-gray-darkGray/80" />
        <p>Hide</p>
      </button>
    </div>
    <input className="w-full h-11 text-[14px] font-normal border border-gray-lightGray rounded-xl pl-4 pr-12 outline-none focus:shadow-sm focus-visible:ring-1 ring-stone-100" />
  </div>
);

const SignupButton = () => (
  <button className="flex justify-center items-center w-full h-12 bg-richBlack rounded-xl mt-4 active:scale-95 transition-all">
    <p className="text-[16px] text-white font-medium">Create account</p>
  </button>
);

const SocialLoginOptions = () => (
  <>
    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full"></div>
    <div className="flex flex-col gap-2">
      <SocialButton icon={<FcGoogle size={20} />} text="Continue with Google" />
      <SocialButton icon={<FaFacebook size={20} className="text-blue-600" />} text="Continue with Facebook" />
    </div>
  </>
);

const SocialButton = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <button className="flex justify-center items-center w-full h-11 border border-gray-lightGray rounded-full gap-2">
    {icon}
    <p>{text}</p>
  </button>
);

const LoginPrompt = () => (
  <div className="flex justify-center items-center gap-2 mt-5">
    <p className="text-gray-darkGray">Already have an account?</p>
    <Link to={"/login"} className="font-semibold underline underline-offset-2">Log in</Link>
  </div>
);

const FooterSection = () => (
  <div className="w-full">
    <Footer hasMiniHighlights={false} hasBorder={true} />
  </div>
);

export default Signup;
