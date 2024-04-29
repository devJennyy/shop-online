import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

const ProductPage = () => {
  return (
    <div id="shop-page">
      {/* Header */}
      <Header hasNavbar={true}/>

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <div className="flex flex-row justify-between w-full h-fit">
          {/* Filters */}
          <div className="w-[780px] h-full">
            
            <div className="w-full h-[400px] bg-slate-500"></div>
            <div className="flex flex-row justify-between items-center w-full mt-4 gap-2">
              <div className="w-full h-20 bg-slate-600"></div>
              <div className="w-full h-20 bg-slate-600"></div>
              <div className="w-full h-20 bg-slate-600"></div>
              <div className="w-full h-20 bg-slate-600"></div>

            </div>
            
          </div>

          {/* Content */}
          <div className=" flex w-full h-full ml-20">
            <p className="text-[18px] font-semibold">Best Selling</p>

          </div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true}/>
      </div>
    </div>
  )
}

export default ProductPage
