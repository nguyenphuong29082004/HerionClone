 import React from 'react'

 function TemplateItem({ image, title }) {
   return (
    <div className="group cursor-pointer w-min" data-aos="fade-up">
        <div className="w-[400px] h-[280px]">
            <img
                src={image}
                alt={title}
                className="w-full h-full transition duration-100 hover:-translate-y-2 shadow-xl"
            />
        </div>
        <p className="mt-2 text-center text-lg font-main text-normal">{title}</p>
    </div>
   )
 }
 
 export default TemplateItem