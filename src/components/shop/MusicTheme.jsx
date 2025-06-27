import React from 'react'

function MusicTheme() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
  {/* Background image overlay */}
  <div className="absolute inset-0 bg-[url('/shop/t-bg.png')] bg-cover bg-center bg-no-repeat z-0" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-10 lg:px-[60px] z-10">
    <h2 className="text-[42px] sm:text-[60px] lg:text-[95px] font-style_harley text-white/40 leading-tight mb-4">
      Making Music Themes Since 2011
    </h2>
    <h3 className="font-style_staaliches text-xl sm:text-2xl md:text-3xl text-white tracking-wide mb-6">
      Latest Music Theme Reviews
    </h3>
    <p className="font-main text-[#f7f7f7] leading-relaxed mb-8 w-full max-w-3xl">
      Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout.
    </p>
    <button className="bg-red-500 px-6 py-3 sm:px-8 sm:py-4 font-bold uppercase text-white text-xs tracking-wide hover:bg-white hover:text-black transition-all duration-300">
      Get Your Copy
    </button>
  </div>
</div>

    )
}

export default MusicTheme