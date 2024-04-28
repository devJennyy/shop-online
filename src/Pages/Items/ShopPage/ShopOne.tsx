import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"


const ShopOne = () => {
  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true}/>

      <div className="flex flex-col justify-center items-center w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-32 gap-20">
        

        {/* Footer */}
        <Footer hasBorder={true}/>
      </div>
    </div>
  )
}

export default ShopOne
