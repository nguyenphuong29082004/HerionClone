import React from 'react'

function MusicTheme() {
  return (
    <div className='relative'>
        <div className='absolute bg-[url(/shop/t-bg.png)] w-full h-screen bg-no-repeat  overflow-hidden'></div>
        <div className='absolute flex items-center justify-center w-full h-screen px-[80px] flex-col'>
            
                <h2 className="text-[95px] font-style_harley text-[rgba(255,255,255,0.45)] ">Making Music Themes Since 2011</h2>
                <h2 className="font-style_staaliches text-3xl tracking-wide text-white mb-12">Latest Music Theme Reviews</h2>
                <p className="font-main text-[#f7f7f7] leading-8 mb-12 w-[70%]">
                  Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout.
                </p> 
                <button className="bg-red-400 px-8 py-4 font-bold hover:bg-white transition uppercase text-white text-xs hover:text-black">
                GET YOUR COPY
                </button>
           
        </div>
    </div>
    )
}

export default MusicTheme