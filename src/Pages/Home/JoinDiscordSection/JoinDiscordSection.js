import React from 'react';
import imgOne from '../../../img/joinDiscordImg/TGN_4 2.png';
import imgTwo from '../../../img/joinDiscordImg/TGN_5 1.png';
import imgUp from '../../../img/joinDiscordImg/unnamed 1.png';
import imgDown from '../../../img/joinDiscordImg/unnamed 2.png';
import { FaDiscord } from "react-icons/fa";

const JoinDiscordSection = () => {
    return (
        <div className='bg-[#1B1B1D] rounded-b-[100px] relative mb-[329px] lg:mb-[259px]'>
            <div className='max-w-[1200px] mx-auto pt-[41px] lg:pt-[35px] pb-[208px]'>
                {/*---------- 1st section start ----------*/}
                <section className='flex items-center gap-[85px]'>
                    <img className='hidden lg:block' src={imgOne} alt="" />
                    <div className='text-center lg:text-start px-[30px] lg:px-0'>
                        <h6 className='text-sm text-white font-bold uppercase tracking-[1px] leading-6'>Tokenised Crowdfunding</h6>
                        <h1 className='text-xl lg:text-4xl text-[#538EB6] font-bold tracking-[-0.02em] leading-[22px] lg:leading-7 mt-4'>Create content. Make money for everybody</h1>
                        <img className='lg:hidden' src={imgOne} alt="" />
                        <p className='text-lg text-[#FFFFFFB2] leading-[22px] lg:leading-7 mt-[3px] lg:mt-2'>With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.</p>
                        <button className='flex items-center gap-[18px] btn-primary text-sm lg:text-base font-semibold text-white px-[34px] lg:px-[39px] py-[13px] lg:py-[27px] rounded-[101px] mt-[25px] lg:mt-8'>JOIN THE CONVERSATION <span className=' text-[17.85px] lg:text-[28px]'><FaDiscord></FaDiscord></span></button>
                    </div>
                </section>
                {/*---------- 1st section end ----------*/}
                {/*---------- 2nd section start ----------*/}
                <section className='flex items-center gap-[54px] mt-[70px] lg:mt-1 text-center lg:text-start mx-[30px] lg:mx-0'>
                    <div className='max-w-[510px]'>
                        <h6 className='text-sm text-white font-bold uppercase tracking-[1px] leading-6'>Talent content platform</h6>
                        <h1 className='text-xl lg:text-4xl text-[#538EB6] font-bold tracking-[-0.02em] leading-[22px] lg:leading-7 mt-4'>Build your custom subscription platform</h1>
                        <img className='lg:hidden mt-[10px]' src={imgTwo} alt="" />
                        <p className='text-lg text-[#FFFFFFB2] leading-[22px] lg:leading-7 mt-[-2px] lg:mt-2'>Build your custom subscription platform Create your own content and subscription engine and have direct control of audience revenues. Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs</p>
                        <button className='flex items-center gap-[18px] btn-primary text-sm lg:text-base font-semibold text-white px-[34px] lg:px-[39px] py-[13px] lg:py-[27px] rounded-[101px] mt-[33px] lg:mt-8'>JOIN THE CONVERSATION <span className='text-[17.85px] lg:text-[28px]'><FaDiscord></FaDiscord></span></button>
                    </div>
                    <img className='hidden lg:block' src={imgTwo} alt="" />
                </section>
                {/*---------- 2nd section end ----------*/}
                {/*---------- 3rd section start ----------*/}
                <section className='lg:flex justify-center mx-[31px]'>
                    <div className='max-w-[1111px] mx-auto bg-white px-[24px] lg:px-[70px] pt-[33px] lg:pt-[50px] pb-[24.5px] rounded-[40px] lg:rounded-[50px] mt-[55px] lg:mt-20 mb-8 absolute'>
                        <div className='lg:flex items-center gap-[51px] text-center lg:text-start'>
                            <div className='max-w-[419px]'>
                                <h1 className='text-xl lg:text-[28px] leading-[22px] lg:leading-9 font-bold text-[#1B1B1D] max-w-[319px]'><span className='hidden lg:block'>Discover and sell your own NFTs</span> <span className='lg:hidden'>Pre-NFT Content and Rights Marketplace</span></h1>
                                <p className='text-lg text-[#1B1B1D] mt-3 font-semibold leading-[20px] lg:leading-7'>Join fandora and support outstanding global talent across multiple domains.</p>
                                <button className='btn-primary text-sm lg:text-base px-[33px] lg:px-9 py-[13px] lg:py-[23px] font-semibold text-white rounded-[101px] mt-3 lg:mt-[29px]'>JOIN FANDORA</button>
                            </div>
                            <div className='flex gap-[10px] lg:gap-[18px] mt-[56px] lg:mt-0 mb-[-55px] lg:mb-0'>
                                <img className='lg:w-[242px] w-[132px] lg:h-[294px] h-[162px] mb-[-57px]' src={imgUp} alt="" />
                                <img className='lg:w-[241px] w-[132px] lg:h-[294px] h-[162px] mt-[-27px] lg:mt-[-103px]' src={imgDown} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*---------- 3rd section end ----------*/}
            </div>
        </div>
    );
};

export default JoinDiscordSection;