import React from 'react'
import ShopFeatureItem from './ShopFeatureItem'
import { PiHammerThin } from "react-icons/pi";
import {TfiReload,TfiPencilAlt,TfiDownload, TfiLocationPin, TfiLayoutTab, TfiLayoutTabWindow,TfiMenuAlt,TfiCamera, TfiWrite, TfiHeadphoneAlt, TfiSupport,  TfiEmail } from "react-icons/tfi";

function FeatureHighlights() {
  
  const features = [
    {
      icon: PiHammerThin,
      title: "Enhanced Page Builder",
      des: "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians."
    },
    {
      icon: TfiReload,
      title: "Slider Revolution",
      des: "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package."
    },
    {
      icon: TfiPencilAlt,
      title: "Live Customizer",
      des: "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview."
    },
    {
      icon: TfiDownload,
      title: "One-click Demo Install",
      des: "Import the demo data in one click and edit the content to suit your need quickly."
    },
    {
      icon: TfiHeadphoneAlt,
      title: "Power Elite Support",
      des: "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out."
    },
    {
      icon: TfiSupport,
      title: "Lifetime Free Updates",
      des: "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates."
    },
    {
      icon: TfiLocationPin,
      title: "Translatable Ready",
      des: "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML."
    },
    {
      icon: TfiLayoutTab,
      title: "Child Theme Included",
      des: "Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization."
    },
    {
      icon: TfiMenuAlt,
      title: "Content Blocks",
      des: "Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages."
    },
    {
      icon: TfiWrite,
      title: "Social Media Integration",
      des: "Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...."
    },
    {
      icon: TfiCamera,
      title: "Photos Included",
      des: "Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license."
    },
    {
      icon: TfiEmail,
      title: "Contact Form 7",
      des: "Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective."
    }
  ];
  return (
    <div className="grid md:grid-cols-4 px-[80px] gap-x-8 gap-y-12 mt-40">
        {features.map((item, index) => (
        <ShopFeatureItem
          key={index}
          icon={item.icon}
          title={item.title}
          des={item.des}
        />
  ))}
        
    </div>
  )
}

export default FeatureHighlights