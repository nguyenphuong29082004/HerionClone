import React from 'react'
import { CiDesktopMouse1 } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

function DemoImport() {
  return (
    <div className='relative'>
        <div className='absolute bg-[#1d1d1d] w-full h-screen'></div>
        <div className='absolute flex items-center justify-center w-full h-screen gap-50 px-[80px]'>
          <div className='flex-1'>
            <h2 className="text-[95px] font-style_harley text-[rgba(255,255,255,0.45)] ">Social Integration</h2>
            <h2 className="font-style_staaliches text-3xl tracking-wide text-white mb-12">Social Network & Music platform oriented</h2>
            <p className="font-main text-[#f7f7f7] leading-8 mb-12">
              Single release pages don’t have to be boring and all the same! You can use a different layout for each release, and use the page builder template system if you want all release pages with the same custom layout.
            </p> 
            <button className="bg-red-400 px-8 py-4 font-bold hover:bg-white transition uppercase text-white text-xs hover:text-black">
            GET YOUR COPY
            </button>
          </div>

          <div className='flex-1'>
            <div className='flex items-center relative'>
              <div className='flex flex-col items-center before:font-semibold before:text-white before:content-["Install_herion"] before:uppercase  before:absolute before:top-8 before:left-[120px] before:w-max' >
                <div className="border-2 border-white size-20 rounded-full relative flex items-center justify-center">
                  <CiDesktopMouse1 className='text-white text-5xl'/>
                </div>
                <div className='h-[100px] w-[2px] bg-white'></div>
              </div>
            </div>
            <div className='flex items-center relative'>
              <div className='flex flex-col items-center before:font-semibold before:text-white before:content-["Inmport_demo_content"] before:uppercase  before:absolute before:top-8 before:left-[120px] before:w-max'>
                <div className="border-2 border-white size-20 rounded-full relative flex items-center justify-center">
                  <IoDownloadOutline className='text-white text-5xl'/>
                </div>
                <div className='h-[100px] w-[2px] bg-white'></div>
              </div>
            </div>
            <div className='flex items-center relative'>
              <div className='flex flex-col items-center before:font-semibold before:text-white before:content-["have_fun"] before:uppercase  before:absolute before:top-8 before:left-[120px] before:w-max' >
                <div className="border-2 border-white size-20 rounded-full relative flex items-center justify-center">
                  <IoIosHeartEmpty className='text-white text-5xl'/>
                </div>
              </div>
            </div>
            
          </div>

        </div>
        
    </div>
  )
}



export default DemoImport