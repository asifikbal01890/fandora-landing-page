import React from 'react';
import imgOne from '../../../img/SliderImg/unnamed 3.png';
import imgTwo from '../../../img/SliderImg/image 2.png';
import imgThree from '../../../img/SliderImg/Image 3.png';
import imgFour from '../../../img/SliderImg/unnamed 1.png';
import imgFive from '../../../img/SliderImg/unnamed 2.png';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';



const CheckOutSlider = () => {



    return (
        <div className=''>
            <Swiper
            effect={'cards'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            modules={[EffectCards]}
            className='mySwiper w-[183px] lg:w-[320px] h-[230px] lg:h-[404px] mt-[-70px] lg:mt-[-50px] mb-[-89px] lg:mb-[-34px]'
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