import React from 'react';

const FutureCards = ({cardInfo}) => {
    const {title, describe, photo} = cardInfo
    return (
        <div className='flex justify-center'>
            <div className='border border-white bg-[#FAF9FD] rounded-[50px] p-[22px] w-[286px] h-[383px]'>
            <img className='w-full rounded-[35px]' src={photo} alt="" />
            <h3 dangerouslySetInnerHTML={{ __html: title }} className='mt-[37px] text-[28px] font-bold leading-[34px] text-[#1B1B1D]'></h3>
            <p className='mt-[13px] text-sm leading-[17px] text-[#1B1B1D]'>{describe}</p>
        </div>
        </div>
    );
};

export default FutureCards;