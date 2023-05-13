import React from 'react';
import mobile from '../../img/marketplaceImg/Mobile Frame.png';
import tablet from '../../img/marketplaceImg/Tablet Mockup.png';

const MarketplaceSection = () => {
    return (
        <div className='bg-marketplace'>
            <div className='max-w-[1200px] mx-auto'>
                {/*--------- 1st section start ----------*/}
                <section className='flex justify-between'>
                    <img src={mobile} alt="" />
                    <div className='w-[421px] text-white mt-[52px]'>
                        <h3 className='text-sm font-semibold uppercase leading-6 tracking-[1px]'>NFT rights Marketplace</h3>
                        <h1 className='text-4xl font-bold tracking-[-0.03em] mt-3'>Are you a Creator?</h1>
                        <p className='text-lg font-medium tracking-[-0.001em] mt-4'>Now sell Pre NFT rights and monetise your existing content for Web3 applications</p>
                        <button className='btn-secondary mt-8'>CHECK IT OUT!</button>
                    </div>
                </section>
                {/*--------- 1st section end ----------*/}
                {/*--------- 2nd section start ----------*/}
                <section className='flex justify-between'>
                    <div className='w-[421px] text-white mt-[149px] mr-[-144px] ml-[64px]'>
                        <h3 className='text-sm font-semibold uppercase leading-6 tracking-[1px]'>NFT rights Marketplace</h3>
                        <h1 className='text-4xl font-bold tracking-[-0.03em] mt-3'>Are you a WEB3 Pro?</h1>
                        <p className='text-lg font-medium tracking-[-0.001em] mt-4'>Access best content for building stronger Web3 assets and package them with our advanced NFT Utilities</p>
                        <button className='btn-secondary mt-8'>CHECK IT OUT!</button>
                    </div>
                    <img className='mt-[-64px] mr-[-124px]' src={tablet} alt="" />
                </section>
                {/*--------- 2nd section end ----------*/}
                {/*--------- 3rd section start ----------*/}
                <section className='text-white text-center'>
                    <h6 className='text-sm font-semibold uppercase tracking-[1px] leading-6'>homegrown Marketplace</h6>
                    <h1 className='text-4xl font-bold tracking-[-0.02em] mt-1'>Explore an NFT Marketplace unlike any other</h1>
                    <h5 className='text-lg font-medium tracking-[-0.001em] mt-4'>Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs</h5>
                    <button className='btn-accent mt-8 mb-[59px]'>COMING SOON</button>
                </section>
                {/*--------- 3rd section end ----------*/}
            </div>
        </div>
    );
};

export default MarketplaceSection;