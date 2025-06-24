import React from "react";

function EasyToUse() {
  return (
    <div className="relative">
      <div className="absolute bg-[#1d1d1d] w-full h-screen"></div>
      <div className="absolute flex items-center justify-center w-full h-screen gap-50 pr-[80px]">
        <div className="flex-1">
          <div className="bg-[url('/artist/admin-1.png')] w-full h-[400px] bg-cover bg-center z-20"></div>{" "}
        </div>
        <div className="flex-1">
          <h2 className="text-[95px] font-style_harley text-[rgba(255,255,255,0.45)] ">
            Easy To Use
          </h2>
          <h2 className="font-style_staaliches text-3xl tracking-wide text-white mb-12 uppercase">
            No Coding required
          </h2>
          <p className="font-main text-[#f7f7f7] leading-8 mb-12">
            Herion comes with an advanced drag and drop page builder to help you
            create your website easily and quickly.
          </p>
          <div className="flex gap-20">
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
