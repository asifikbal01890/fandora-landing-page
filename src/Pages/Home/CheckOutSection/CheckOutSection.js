import React from 'react';
import CheckOutSlider from './CheckOutSlider';

const CheckOutSection = () => {
    return (
        <div className='lg:w-[1157px] mx-auto bg-primary rounded-3xl mt-[119px] px-[86px]'>
            <div className='grid grid-cols-2 gap-[69px]'>
                <div className='pt-[35px] pb-8'>
                    <h1 className='text-[35px] font-bold leading-[42px]'>Pre-NFT Content and Rights Marketplace</h1>
                    <p className=' text-[23px] font-semibold leading-[25px] my-3'>A first of its kind platform that  discovers and supports global talent across multiple domains, now live!</p>
                    <button className='font-semibold bg-[#1E1E2D] rounded-[101px] py-[28.5px] px-[45.5px] text-white'>CHECK IT OUT</button>
                </div>
                <div className=''>
                   <CheckOutSlider></CheckOutSlider> 
                </div>
            </div>
        </div>
    );
};

export default CheckOutSection;