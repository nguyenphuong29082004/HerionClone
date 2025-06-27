import React from "react";

function EasyToUse() {
  return (
    <div className="relative  bg-[#1d1d1d] w-full h-screen lg:h-[800px] ">
      {/* <div className="absolute"></div> */}
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 py-20 md:px-20 gap-8 md:gap-20">
      <div className="flex-1">
        <img
          src="/artist/admin-1.png"
          alt="Admin"
          className="w-full h-auto object-cover"
        />
      </div>
        <div className="flex-1">
          <h2 className="sm:text-[95px] text-[60px] font-style_harley text-[rgba(255,255,255,0.45)] ">
            Easy To Use
          </h2>
          <h2 className="font-style_staaliches sm:text-3xl text-xl tracking-wide text-white mb-12 uppercase">
            No Coding required
          </h2>
          <p className="font-main text-[#f7f7f7] leading-8 mb-12">
            Herion comes with an advanced drag and drop page builder to help you
            create your website easily and quickly.
          </p>
          <div className="flex gap-5 lg:gap-5">
            <div className="font-bold text-white">
              <p className="text-6xl mb-2">
                200 <span className="text-red-400">+</span>
              </p>
              <p className="uppercase text-xl">Demo layouts</p>
            </div>
            <div className="font-bold text-white">
              <p className="text-6xl mb-2">
                110 <span className="text-red-400">+</span>
              </p>
              <p className="uppercase text-xl">Content elements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyToUse;
