import React from 'react';
import CheckOutSlider from './CheckOutSlider';

const CheckOutSection = () => {
    return (
        <div className='lg:w-[1157px] lg:mx-auto bg-primary rounded-3xl mt-[31px] lg:mt-[119px] px-[24px] lg:px-[86px] mx-[30px] text-center lg:text-start'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-[69px]'>
                <div className='pt-[35px] pb-8'>
                    <h1 className='text-xl lg:text-[35px] font-bold leading-[25px] lg:leading-[42px] '>Pre-NFT Content and Rights Marketplace</h1>
                    <p className='text-lg lg:text-[23px] font-semibold leading-5 lg:leading-[25px] my-3'>A first of its kind platform that  discovers and supports global talent across multiple domains, now live!</p>
                    <button className='font-semibold text-sm lg:text-base bg-[#1E1E2D] rounded-[101px] py-[13px] lg:py-[28.5px] px-[30px] lg:px-[45.5px] text-white'><span className='hidden lg:block'>CHECK IT OUT</span><span className='lg:hidden'>JOIN FANDORA</span></button>
                </div>
                <div className=''>
                   <CheckOutSlider></CheckOutSlider> 
                </div>
            </div>
        </div>
    );
};

export default CheckOutSection;