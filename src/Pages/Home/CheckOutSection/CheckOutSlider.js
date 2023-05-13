import React from 'react';
import imgOne from '../../../img/SliderImg/unnamed 3.png';
import imgTwo from '../../../img/SliderImg/image 2.png';
import imgThree from '../../../img/SliderImg/Image 3.png';
import imgFour from '../../../img/SliderImg/unnamed 1.png';
import imgFive from '../../../img/SliderImg/unnamed 2.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow, Navigation, Pagination } from 'swiper';
import './he.css'


const CheckOutSlider = () => {



    return (
        <div className=''>
            <Swiper
                // effect={'coverflow'}
                // grabCursor={true}
                // centeredSlides={true}
                // loop={true}
                // slidesPerView={'auto'}
                // coverflowEffect={{
                //     rotate: 0,
                //     stretch: 0,
                //     depth: 100,
                //     modifier: 17,
                // }}
                // pagination={{ el: '.swiper-pagination', clickable: true }}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                //     clickable: true,
                // }}
                // modules={[EffectCoverflow, Pagination, Navigation]}
                // className="swiper_container"
            effect={'cards'}
            grabCursor={true}
            // centeredSlides={true}
            loop={true}
            // slidesPerView={'auto'}
            modules={[EffectCards]}
            className='mySwiper'
            >
                <SwiperSlide>
                    <img className='w-[320px] h-[404px]' src={imgOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[320px] h-[404px]' src={imgTwo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[320px] h-[404px]' src={imgThree} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[320px] h-[404px]' src={imgFour} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[320px] h-[404px]' src={imgFive} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CheckOutSlider;