import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import '../SimplicitySection/CardsForMobile.module.css';

const FutureCardsMobile = ({ cardsInfo }) => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper text-white"
            >
                {
                    cardsInfo.map((cardInfo, i) => <SwiperSlide
                        key={i}
                        cardInfo={cardInfo}
                    >
                        <div className='border border-white bg-[#FAF9FD] rounded-[33px] p-[20px] w-[197px] h-[286px] text-black'>
                            <img className='w-full rounded-[25px]' src={cardInfo.photo} alt="" />
                            <h3 dangerouslySetInnerHTML={{ __html: cardInfo.title }} className='mt-[19px] text-lg font-bold leading-[22px]'></h3>
                            <p className='mt-[7px] text-sm leading-[17px]'>{cardInfo.describe}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default FutureCardsMobile;