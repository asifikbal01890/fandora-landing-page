import React from 'react';
import future from '../../../img/futureCardImg/future.png';
import product from '../../../img/futureCardImg/product.png';
import interaction from '../../../img/futureCardImg/intergation.png';
import digital from '../../../img/futureCardImg/digital.png';
import gaming from '../../../img/futureCardImg/gaming.png';
import FutureCards from './FutureCards';
import FutureCardsMobile from './FutureCardsMobile';

const FutureSection = () => {


    const cardsInfo = [
        {
            title: 'Future Talent NFT',
            describe: 'Pre-buy rights to your social media content',
            photo: future
        },
        {
            title: 'Product Placament NFT',
            describe: 'Pre-buy rights to your product mentions',
            photo: product
        },
        {
            title: 'Online Interaction NFT',
            describe: 'Pre-buy rights to specific time periods for exclusive interactions.',
            photo: interaction
        },
        {
            title: 'Digital Art <br/> NFT',
            describe: 'Pre-buy rights to create digital art featuring you',
            photo: digital
        },
        {
            title: `Gaming <br/> NFT`,
            describe: 'Pre-buy rights to incorporate your digital avatar in a game or a product',
            photo: gaming
        },
    ]
    return (
        <div className='mt-[30px] lg:mt-[108px] pb-[33px] lg:pb-0 rounded-t-[31px] lg:rounded-t-[100px] bg-[#D9D9D9]'>
            <div className='pt-[87px] text-center max-w-[1200px] mx-auto'>
                <h1 className='font-bebas text-[35px] lg:text-[130px] leading-[30px] lg:leading-[120px]'>Welcome to the Future</h1>
                <h1 className='font-bebas text-[55px] lg:text-[130px] leading-[50px] lg:leading-[120px] text-primary'>Pre NFT Rights</h1>
                <p className='text-lg lg:text-[25px] leading-[22px] lg:leading-[35px] mt-[30px] tracking-[-0.001em] mx-[30px] lg:mx-0'>Imagine a real life auction, <i>but everything is an NFT</i>.</p>
                <p className='text-lg lg:text-[25px] leading-[22px] lg:leading-[35px] tracking-[-0.001em] mx-[30px] lg:mx-0'>Fandora is the first platform that enables creators to auction or sell their NFT rights to their audience. These pre NFT rights enable your audience to build content around you, pay you, and also share royalties. With Fandora, creators can do all this easily - without all the tech-speak.</p>
                <h5 className='text-lg lg:text-[25px] leading-[22px] lg:leading-[35px] font-semibold text-[#438ABC] tracking-[-0.001em] mt-[30px] mx-[30px] lg:mx-0'>These are the different types of NFT rights you can sell</h5>
                <div>
                    {/*-------- Service cards section start --------- */}

            <div>
                {/*--------- Cards for mobile device start-------- */}
                <div className='lg:hidden block mt-[46px] lg:mt-0 ml-[-60px] lg:ml-0'>
                    <FutureCardsMobile
                        cardsInfo={cardsInfo}
                    ></FutureCardsMobile>
                </div>
                {/*--------- Cards for mobile device end-------- */}
                {/*--------- Cards for large device start-------- */}
                <div className='mt-[25px] lg:block hidden pb-[84px]'>
                    <div className='grid grid-cols-3 gap-[30px] w-[918px] mx-auto'>
                        {
                            cardsInfo.slice(0, 3).map((cardInfo, index) => <FutureCards
                                key={index}
                                cardInfo={cardInfo}
                            ></FutureCards>)
                        }
                    </div>
                    <div className='grid grid-cols-2 gap-[30px] w-[602px] mx-auto mt-[21px]'>
                        {
                            cardsInfo.slice(3).map((cardInfo, index) => <FutureCards
                                key={index}
                                cardInfo={cardInfo}
                            ></FutureCards>)
                        }
                    </div>
                </div>
                {/*--------- Cards for large device end-------- */}
            </div>

            {/*-------- Service cards section end --------- */}
                </div>
            </div>
        </div>
    );
};

export default FutureSection;