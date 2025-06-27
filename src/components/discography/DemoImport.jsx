import React from 'react'
import { CiDesktopMouse1 } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

function DemoImport() {
  return (
    <div className='relative w-full lg:h-[1200px] h-[1000px]  bg-[#1d1d1d]'>
        {/* <div className='absolute'></div> */}
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row md:items-center justify-center w-full px-6 md:px-20 gap-8 md:gap-20 py-16">
          <div className='flex-1'>
            <h2 className="sm:text-[95px] text-[60px] font-style_harley text-[rgba(255,255,255,0.45)] ">Demo Import</h2>
            <h2 className="font-style_staaliches sm:text-3xl text-xl tracking-wide text-white mb-12">One click demo install</h2>
            <p className="font-main text-[#f7f7f7] leading-8 mb-12">
              Herion includes a One-Click Demo Importer, to allow you to import the demo content easily. It is the cool way to set up your theme in a couple of minutes from this starting point.            </p> 
            <button className="bg-red-400 px-8 py-4 font-bold hover:bg-white transition uppercase text-white text-xs hover:text-black">
            GET YOUR COPY
            </button>
          </div>

          <div className='md:flex-1 '>
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