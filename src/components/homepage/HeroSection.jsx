import React from 'react'
import hero_guitar from "../../assets/banner.jpg"
function HeroSection() {
  return (
    <section className="relative h-[110vh] w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${hero_guitar})` }}>
      <div className="absolute inset-0 bg-[#f4efef7c]" />
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-20 max-w-4xl gap-5">
        <h2 className="font-style_harley font-extralight italic text-6xl">Music WordPress Theme</h2>
        <h1 className="font-style_staaliches text-4xl md:text-6xl leading-tight">
          Dedicated to Bands, Labels, <br /> Festivals, Music Store and  <br/>more...
        </h1>
        <p className="font-style_staaliches uppercase tracking-wide text-3xl mb-8">
          No Coding Required
        </p>
        <button className="bg-transparent border px-12 py-4 font-semibold hover:bg-gray-200 transition uppercase ">
          View Demos
        </button>
      </div>
    </section>
  )
}

export default HeroSection