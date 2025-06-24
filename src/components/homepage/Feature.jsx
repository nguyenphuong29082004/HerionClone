import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBandsintown } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";

function Feature() {
  return (
    <div className="relative h-screen w-full overflow-hidden mt-20">
        <video
            src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        ></video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute z-20 flex flex-col items-center justify-center h-full w-screen text-center px-6 gap-12">
            <div>
            <h2 className="text-[95px] font-style_harley text-[rgba(255,255,255,0.45)] -mb-4">Social Integration</h2>
            <h2 className="font-style_staaliches text-3xl tracking-wide text-white">Social Network & Music platform oriented
            </h2>
            </div>    
            <p className="text-[#f7f7f7] max-w-3xl mb-12">
            Embed your music and social feeds seamlessly with Herion. Display your media and content directly from Spotify, YouTube, Instagram, Bandsintown, Twitter and more…
            </p>
            <div className='flex justify-between w-[80%] mb-12'>
                <a href="#"><FaSpotify className="text-white text-6xl" /></a>
                <a href="#"><FaYoutube className="text-white text-6xl"/></a>
                <a href="#"><FaInstagram className="text-white text-6xl"/></a>
                <a href="#"><SiBandsintown className="text-white text-6xl"/></a>
                <a href="#"><FaXTwitter className="text-white text-6xl"/></a>
                <a href="#"><FaFacebookF className="text-white text-6xl"/></a>
                <a href="#"><FaMailchimp className="text-white text-6xl"/></a>
            </div>
            <p className='text-white text-xl'>and more ...</p>
        </div>

    </div>
  )
}
export default Feature