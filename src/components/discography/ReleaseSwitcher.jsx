import React, { useState } from 'react'
import TemplateItem from '../homepage/TemplateItem'


function ReleaseSwitcher() {
const [activeTab, setActiveTab] = useState("single")
  return (
    <div className='flex flex-col items-center mb-20'>
        <div className='border-b-[1px] border-gray-300 w-[80%]
        text-center'>
            <button onClick={() => setActiveTab("single")} className={`uppercase mr-8 font-bold text-[16px] cursor-pointer ${activeTab === 'single' ? 'border-b-2 pb-4' : 'border-transparent'}`}>Release single pages</button>
            <button onClick={() => setActiveTab("listing")} className={`uppercase mr-8 font-bold text-[16px] cursor-pointer  ${activeTab === 'listing' ? 'border-b-2 pb-4' : 'border-transparent'}`}>Release listing</button>
        </div>
        <div className="mt-12">
            {activeTab === "single" && (
                <div className="grid grid-cols-3 gap-x-8 gap-y-16">
                    <TemplateItem image="/imageSingle/info-at-right.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageSingle/info-at-left.jpg" title="Info at Left"/>
                    <TemplateItem image="/imageSingle/wide-width.jpg" title="Wide Width"/>
                    <TemplateItem image="/imageSingle/custom-header.jpg" title="Custom Header"/>
                    <TemplateItem image="/imageSingle/custom-layout.jpg" title="Custom Layout"/>
                    <TemplateItem image="/imageSingle/text-oriented.jpg" title="Text Oriented"/>
                    <TemplateItem image="/imageSingle/compact.jpg" title="Compact"/>
                    <TemplateItem image="/imageSingle/minimal-2.jpg" title="Minimal"/>
                    <TemplateItem image="/imageSingle/and-more.png" title="and more" />
                </div>
            )}
            {activeTab === "listing" && (
                <div className="grid grid-cols-3 gap-x-8 gap-y-16">
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageListing/lisiting.jpg" title="Info at Right"/>
                    <TemplateItem image="/imageSingle/and-more.png" title="and more" />
                </div>
            )}
        </div>
        <p className='text-xl text-gray-500 mt-10'>and more...</p>
    </div>
  )
}

export default ReleaseSwitcher