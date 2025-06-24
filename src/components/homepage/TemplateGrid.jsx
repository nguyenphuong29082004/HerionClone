import React from 'react'
import TemplateItem from './TemplateItem'
import main_home from "../../assets/homepage/main-home.jpg"
import one_page from "../../assets/homepage/one-page.jpg"
import band_home from "../../assets/homepage/band-home.jpg"
import home_alt from "../../assets/homepage/home-alt.jpg"
import minimal from "../../assets/homepage/minimal.jpg"
import dj_event from "../../assets/homepage/DJ-Event.jpg"
import festival from "../../assets/homepage/festival.jpg"
import record from "../../assets/homepage/Record-studio.jpg"
import interactive from "../../assets/homepage/interactive-links.jpg"
import artist_slider from "../../assets/homepage/artist-slider.jpg"
import shop from "../../assets/homepage/shop-home.jpg"
import discography from "../../assets/homepage/discography-home.jpg"
import videos from "../../assets/homepage/videos-home.jpg"
import big_home from "../../assets/homepage/big-home.jpg"
import artist_metro from "../../assets/homepage/artist-metro.jpg"
function TemplateGrid() {
  return (
    <div className='flex flex-col items-center mt-20'>
        <h2 className='text-[95px] font-style_harley text-harley'><span className='text-9xl'>15 </span>Template</h2>
        <h2 className='font-style_staaliches text-3xl mb-16 tracking-wide'>HOMEPAGES</h2>
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
            <TemplateItem title="Artist Slider" image={artist_slider} />
            <TemplateItem title="Shop" image={shop} />
            <TemplateItem title="Discography" image={discography} />
            <TemplateItem title="Videos" image={videos} />
            <TemplateItem title="Big Home" image={big_home} />
            <TemplateItem title="Artist Metro" image={artist_metro} />
        </div>
    </div>
  )
}

export default TemplateGrid