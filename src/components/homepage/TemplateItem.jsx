import React from 'react'

function TemplateItem({ image, title }) {
  return (
   <div className="group cursor-pointer md:w-min" data-aos="fade-up">
       <div className="md:w-[200px] md:h-[150px] xl:w-[400px] xl:h-[280px] lg:w-[300px] lg-h[250px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full transition duration-200 hover:-translate-y-2 shadow-xl object-cover"
          />
        </div>
       <p className="mt-2 text-center text-lg font-main text-normal">{title}</p>
   </div>
  )
}

export default TemplateItem