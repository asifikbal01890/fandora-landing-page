import React from 'react';

const ServiceCard = ({ cardInfo }) => {
    const { photo, title, description, contentOfButton, colorOfBtnContent } = cardInfo;
    return (
        <div className='bg-[#222125] rounded-[50px] h-[396px]'>
            <div className='h-[193px]'>
                <div className='flex justify-center mt-[-65px]'>
                    <img src={photo} alt="" />
                </div>
            </div>
            <div className='text-white text-center mt-[13px] px-[30px]'>
                <div className='h-[166px]'>
                    <h1 className='text-[28px] font-bold leading-[34px]'>{title}</h1>
                    <p className='text-sm leading-[17px] px-1 pt-[13px]'>{description}</p>
                </div>
                <button className={`${colorOfBtnContent} w-full font-semibold text-sm py-[13px] px-[39px] bg-[#2E2D32] rounded-[40px] mt-[10px]`} >{contentOfButton}</button>
            </div>
        </div>
    );
};

export default ServiceCard;