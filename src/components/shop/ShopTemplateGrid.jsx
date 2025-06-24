import React from 'react'
import main_home from "../../assets/homepage/main-home.jpg"
import one_page from "../../assets/homepage/one-page.jpg"
import band_home from "../../assets/homepage/band-home.jpg"
import home_alt from "../../assets/homepage/home-alt.jpg"
import minimal from "../../assets/homepage/minimal.jpg"
import dj_event from "../../assets/homepage/DJ-Event.jpg"
import festival from "../../assets/homepage/festival.jpg"
import record from "../../assets/homepage/Record-studio.jpg"
import interactive from "../../assets/homepage/interactive-links.jpg"
import TemplateItem from '../homepage/TemplateItem'
function ShopTemplateGrid() {
    return (
        <div className='flex flex-col items-center mt-8'>
            <div className="text-center px-4 py-12 max-w-6xl mx-auto">
                <h2 className='text-[95px] font-style_harley text-harley'><span  className='text-9xl'>9 </span>Template</h2>
                <h2 className='font-style_staaliches text-3xl mb-12 tracking-wide uppercase'>Inner Pages</h2>
                <p className="font-main text-sub_main leading-8">
                We also created pre-made inner page layouts to make your life easier and allows you to put your site online as quickly as possible.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-16">
                <TemplateItem title="Main Home" image={main_home} className="shadow-xl"/>
                <TemplateItem title="One Page" image={one_page} />
                <TemplateItem title="Band Home" image={band_home} />
                <TemplateItem title="Home Alt" image={home_alt} />
                <TemplateItem title="Minimal" image={minimal} />
                <TemplateItem title="DJ Event" image={dj_event} />
                <TemplateItem title="Festival" image={festival} />
                <TemplateItem title="Record Studio" image={record} />
                <TemplateItem title="Interactive Links" image={interactive} />
            </div>
        </div>
      )
}
export default ShopTemplateGrid