import React from 'react';
import mobile from '../../../img/marketplaceImg/Mobile Frame.png';
import mobileForResponsive from '../../../img/marketplaceImg/Phone responsive.png';
import tablet from '../../../img/marketplaceImg/Tablet Mockup.png';
import tabletForResponsive from '../../../img/marketplaceImg/Tablet responsive.png';

const MarketplaceSection = () => {
    return (
        <div className='bg-marketplace'>
            <div className='max-w-[1200px] mx-auto mt-[-20px] lg:mt-0'>
                {/*--------- 1st section start ----------*/}
                <section className='flex justify-between'>
                    <img className='hidden lg:block' src={mobile} alt="" />
                    <div className='w-[421px] text-white mt-[52px] text-center lg:text-start'>
                        <h3 className='text-sm font-semibold uppercase leading-6 tracking-[1px]'>NFT rights Marketplace</h3>
                        <h1 className='text-xl lg:text-4xl font-bold tracking-[-0.03em] mt-2 lg:mt-3 leading-[22px] lg:leading-7'>Are you a Creator?</h1>
                        <img className='lg:hidden' src={mobileForResponsive} alt="" />
                        <p className='text-lg font-medium tracking-[-0.001em] leading-[22px] lg:leading-7 mt-[1px] lg:mt-4 px-[30px] lg:px-0'>Now sell Pre NFT rights and monetise your existing content for Web3 applications</p>
                        <button className='btn-secondary text-sm lg:text-base font-semibold rounded-[101px] py-[13.5px] lg:py-[24px] px-[34.5px] lg;px-[47px] mt-[21px] lg:mt-8'>CHECK IT OUT!</button>
                    </div>
                </section>
                {/*--------- 1st section end ----------*/}
                {/*--------- 2nd section start ----------*/}
                <section className='flex justify-between'>
                    <div className='w-[421px] text-white mt-10 lg:mt-[149px] lg:mr-[-144px] lg:ml-[64px] text-center lg:text-start'>
                        <h3 className='text-sm font-semibold uppercase leading-6 tracking-[1px]'>NFT rights Marketplace</h3>
                        <h1 className='text-xl lg:text-4xl font-bold tracking-[-0.03em] mt-2 lg:mt-3 leading-[22px] lg:leading-7'>Are you a WEB3 Pro?</h1>
                        <img className='lg:hidden mt-4' src={tabletForResponsive} alt="" />
                        <p className='text-lg font-medium tracking-[-0.001em] leading-[22px] lg:leading-7 lg:mt-4 px-[30px] lg:px-0'>Access best content for building stronger Web3 assets and package them with our advanced NFT Utilities</p>
                        <button className='btn-secondary text-sm lg:text-base font-semibold rounded-[101px] py-[13.5px] lg:py-[24px] px-[34.5px] lg:px-[47px] mt-[21px] lg:mt-8'>CHECK IT OUT!</button>
                    </div>
                    <img className='mt-[-64px] mr-[-124px] hidden lg:block' src={tablet} alt="" />
                </section>
                {/*--------- 2nd section end ----------*/}
                {/*--------- 3rd section start ----------*/}
                <section className='text-white text-center mt-[67px] lg:mt-0 px-[30px] lg:px-0'>
                    <h6 className='text-sm font-semibold uppercase tracking-[1px] leading-6'>homegrown Marketplace</h6>
                    <h1 className='text-xl lg:text-4xl font-bold tracking-[-0.03em] mt-[10px] lg:mt-1 leading-[22px] lg:leading-7'>Explore an NFT Marketplace unlike any other</h1>
                    <h5 className='text-lg font-medium tracking-[-0.001em] leading-[22px] lg:leading-7 mt-7 lg:mt-4'>Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs</h5>
                    <button className='text-sm lg:text-base font-semibold rounded-[101px] py-[13.5px] lg:py-[24px] px-[34.5px] lg:px-[47px] mt-6 lg:mt-8 mb-[61px] lg:mb-[59px] bg-[#1E1E2D80] lg:bg-[#606060] hover:bg-[#52C1B9] duration-300'>COMING SOON</button>
                </section>
                {/*--------- 3rd section end ----------*/}
            </div>
        </div>
    );
};

export default MarketplaceSection;