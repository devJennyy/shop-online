import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"


const ShopOne = () => {
  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true}/>

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-32 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Filters */}
          <div className="w-[450px] h-full">
            <p className="text-[18px] font-semibold">Filters</p>

            
          </div>

          {/* Content */}
          <div className="w-full h-full ">
            <p className="text-[18px] font-semibold">Best Selling</p>

          </div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true}/>
      </div>
    </div>
  )
}

export default ShopOne
