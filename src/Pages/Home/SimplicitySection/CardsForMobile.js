import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './CardsForMobile.module.css';


const CardsForMobile = ({ cardsInfo }) => {

    return (
        <>
            <Swiper
                slidesPerView={4}
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
                        <div className='bg-[#222125] rounded-[33px] mt-[74px] h-[347px] w-[197px] mx-auto'>
                            <div className=' h-[89px]'>
                                <div className='flex justify-center h-[73px]'>
                                    <img className='mt-[-65px]' src={cardInfo.photo} alt="" />
                                </div>
                            </div>
                            <div className='text-white text-center mt-[12px] px-[19px]'>
                                <div className=''>
                                    <h1 className='text-lg font-bold leading-[21px] h-[44px]'>{cardInfo.title}</h1>
                                    <p className='text-sm leading-[17px] h-[108px] pt-[22px]'>{cardInfo.description}</p>
                                </div>
                                <button className={`${cardInfo.colorOfBtnContent} font-semibold text-xs w-full py-[11px] px-[15px] bg-[#2E2D32] rounded-[40px] mt-[35px]`} >{cardInfo.contentOfButton}</button>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default CardsForMobile;