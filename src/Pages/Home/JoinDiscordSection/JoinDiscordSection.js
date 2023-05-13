import React from 'react';
import imgOne from '../../../img/joinDiscordImg/TGN_4 2.png';
import imgTwo from '../../../img/joinDiscordImg/TGN_5 1.png';
import imgUp from '../../../img/joinDiscordImg/unnamed 1.png';
import imgDown from '../../../img/joinDiscordImg/unnamed 2.png';
import { FaDiscord } from "react-icons/fa";

const JoinDiscordSection = () => {
    return (
        <div className='bg-[#1B1B1D] rounded-b-[100px] relative mb-[259px]'>
            <div className='max-w-[1200px] mx-auto pt-[35px] pb-[208px]'>
                {/*---------- 1st section start ----------*/}
                <section className='flex items-center gap-[85px]'>
                    <img src={imgOne} alt="" />
                    <div>
                        <h6 className='text-sm text-white font-bold uppercase tracking-[1px] leading-6'>Tokenised Crowdfunding</h6>
                        <h1 className='text-4xl text-[#538EB6] font-bold tracking-[-0.02em] mt-4'>Create content. Make money for everybody.</h1>
                        <p className='text-lg text-[#FFFFFFB2] mt-2'>With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.</p>
                        <button className='flex items-center gap-[18px] btn-primary font-semibold text-white px-[39px] py-[27px] rounded-[101px] mt-8'>JOIN THE CONVERSATION <span className='text-[28px]'><FaDiscord></FaDiscord></span></button>
                    </div>
                </section>
                {/*---------- 1st section end ----------*/}
                {/*---------- 2nd section start ----------*/}
                <section className='flex items-center gap-[54px] mt-1'>
                    <div className='max-w-[510px]'>
                        <h6 className='text-sm text-white font-bold uppercase tracking-[1px] leading-6'>Talent content platform</h6>
                        <h1 className='text-4xl text-[#538EB6] font-bold tracking-[-0.02em] mt-4'>Build your custom subscription platform</h1>
                        <p className='text-lg text-[#FFFFFFB2] mt-2'>Build your custom subscription platform Create your own content and subscription engine and have direct control of audience revenues. Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs</p>
                        <button className='flex items-center gap-[18px] btn-primary font-semibold text-white px-[39px] py-[27px] rounded-[101px] mt-8'>JOIN THE CONVERSATION <span className='text-[28px]'><FaDiscord></FaDiscord></span></button>
                    </div>
                    <img src={imgTwo} alt="" />
                </section>
                {/*---------- 2nd section end ----------*/}
                {/*---------- 3rd section start ----------*/}
                <section className='flex justify-center'>
                    <div className='max-w-[1111px] mx-auto bg-white px-[70px] pt-[50px] pb-[24.5px] rounded-[50px] mt-20 mb-8 absolute'>
                        <div className='flex items-center gap-[51px]'>
                            <div className='max-w-[419px]'>
                                <h1 className='text-[28px] leading-9 font-bold text-[#1B1B1D] max-w-[319px]'>Discover and sell your own NFTs</h1>
                                <p className='text-lg text-[#1B1B1D] mt-3'>Join fandora and support outstanding global talent across multiple domains.</p>
                                <button className='btn-primary px-9 py-[23px] font-semibold text-white rounded-[101px] mt-[29px]'>JOIN FANDORA</button>
                            </div>
                            <div className='flex gap-[18px]'>
                                <img className='max-w-[242px] max-h-[294px] mb-[-57px]' src={imgUp} alt="" />
                                <img className='max-w-[241px] max-h-[294px] mt-[-103px]' src={imgDown} alt="" />
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