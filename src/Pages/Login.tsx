import FaqsCard from "@/components/cards/FaqsCard"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

const Login = () => {
  return (
    <div className="w-full">
      <Header hasNavbar={false}/>

      {/* FAQs */}
      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full px-8 text-[#0B0D21] pt-32 gap-20">

        <div className="flex flex-row justify-between w-full gap-5">
          <div className="flex flex-row w-1/2 h-fit">
            <div className="flex flex-col gap-10 mt-20">
              <div className="w-52 h-52 bg-black rounded-[50px]"></div>
              <div className="w-52 h-64 bg-black rounded-[50px] ml-10"></div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="w-52 h-64 bg-black rounded-[50px]"></div>
              <div className="w-52 h-52 bg-black rounded-[50px] ml-10"></div>
            </div>
            
          </div>

          <div className="w-1/2">
            <FaqsCard
              numberCount={4}
              titleHeader="Lorem ipsum dolor sit amet consectetur."
              details="Lorem ipsum dolor sit amet consectetur. In augue ipsum tellusultrices. 
            Ac pharetra ultrices consectetur consequat tellus massa. Necaliquam cras sagittis 
            duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. 
            Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper 
            in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt 
            facilisi mi id. Dictum elit velit."
            />
          </div>
        </div>

        <div className="w-full border-b border-[#EDEDED] mt-28"></div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Login
