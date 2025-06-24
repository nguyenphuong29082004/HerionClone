import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

 function ShopIntro() {
  return (
    <div className='bg-[#9393931a] pb-[100px] mt-[780px]'>
        <div className="text-center px-4 py-12 max-w-6xl mx-auto">
            <h2 className='text-[95px] font-style_harley text-harley'>Sell Your Merch</h2>
            <h2 className='font-style_staaliches text-3xl mb-12 tracking-wide uppercase'>WOOCOMMERCE SHOP</h2>
            <p className="font-main text-sub_main leading-8">
                Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built to integrates WooCommerce smoothly in its design.            </p>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/shop/product-mp3.jpg" alt="Slide 1" className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]" /></SwiperSlide>
        <SwiperSlide><img src="/shop/checkout.jpg" alt="Slide 2"className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]" /></SwiperSlide>
        <SwiperSlide><img src="/shop/product-gallery.jpg" alt="Slide 3"className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]" /></SwiperSlide>
        <SwiperSlide><img src="/shop/cart.jpg" alt="Slide 4"className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]" /></SwiperSlide>
        <SwiperSlide><img src="/shop/checkout.jpg" alt="Slide 5"className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]" /></SwiperSlide>
        <SwiperSlide><img src="/shop/product-gallery.jpg" alt="Slide 6" className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]"/></SwiperSlide>
        <SwiperSlide><img src="/shop/cart.jpg" alt="Slide 7" className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]"/></SwiperSlide>
        <SwiperSlide><img src="/shop/product-mp3.jpg" alt="Slide 8" className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]"/></SwiperSlide>
        <SwiperSlide><img src="/shop/product-mp3.jpg" alt="Slide 9" className="transition-all duration-300 hover:-translate-y-1 shadow-2xl w-[450px]"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
export default ShopIntro

