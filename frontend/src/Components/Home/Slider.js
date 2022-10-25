import React from 'react';

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slideImage } from '../../utils/Constants';
const Slider = () => {
    return (
        <div className='my-10'>
            <Swiper spaceBetween={30}
                centeredSlides={true} autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
                {slideImage.map(x => <SwiperSlide className='relative'><img className='brightness-[.4] mb-[60px]' src={x.pic} alt="" />
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <p className='text-4xl text-white font-bold w-[80%]'>{x.des}</p>
                    </div></SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Slider;