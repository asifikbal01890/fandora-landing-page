import React from 'react';
import medal from '../../../img/serviceCardPhoto/Medal.png';
import token from '../../../img/serviceCardPhoto/Token.png';
import wallet from '../../../img/serviceCardPhoto/Wallet.png';
import like from '../../../img/serviceCardPhoto/Like.png';
import bag from '../../../img/serviceCardPhoto/Shopping bag.png';
import ServiceCard from './ServiceCard';
import CardsForMobile from './CardsForMobile';

const SimplicitySection = () => {

    const arrow = '>>>';

    const cardsInfo = [
        {
            title: 'Pre-NFT Rights',
            description: 'NFT rights enable your audience to build content around you and pay you as well as share royalties.',
            contentOfButton: 'Beta Launch Dec 13',
            colorOfBtnContent: 'text-[#00CDAC]',
            photo: medal
        },
        {
            title: 'Talent Tokens',
            description: 'Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.',
            contentOfButton: 'Coming Soon',
            colorOfBtnContent: 'text-[#8E79F3]',
            photo: token
        },
        {
            title: 'Tokenised Crowdfunding',
            description: 'Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.',
            contentOfButton: 'Coming Soon',
            colorOfBtnContent: 'text-[#8E79F3]',
            photo: wallet
        },
        {
            title: 'Talent Content Platform',
            description: 'A platform that allows creators to create and have direct control of audience revenues.',
            contentOfButton: 'Coming Soon',
            colorOfBtnContent: 'text-[#8E79F3]',
            photo: like
        },
        {
            title: 'NFT Marketplace',
            description: 'Native NFT marketplace that allows creators and pre-NFT right holders to create and sell licensed NFTs.',
            contentOfButton: 'Beta Launch Dec 13',
            colorOfBtnContent: 'text-[#00CDAC]',
            photo: bag
        }
    ]

    return (
        <div className='max-w-[1200px] mx-auto text-center mt-[121px]'>
            <div className='font-bebas text-[55px] lg:text-[130px] text-primary leading-[60px] lg:leading-[100px] block lg:flex justify-center'>
                <h1 className='text-start'>Simplicity</h1>
                <h1>{arrow}</h1>
                <h1 className='text-end'>Jargon</h1>
            </div>
            <p className='text-lg lg:text-[25px] text-white lg:mt-4'>We take care of everything so the artists can focus on what they do best. Create art.</p>

            {/*-------- Service cards section start --------- */}

            <div>
                {/*--------- Cards for mobile device start-------- */}
                <div className='lg:hidden block'>
                    <CardsForMobile
                        cardsInfo={cardsInfo}
                    ></CardsForMobile>
                </div>
                {/*--------- Cards for mobile device end-------- */}
                {/*--------- Cards for large device start-------- */}
                <div className='mt-[103px] lg:block hidden'>
                    <div className='grid grid-cols-3 gap-[30px] w-[918px] mx-auto'>
                        {
                            cardsInfo.slice(0, 3).map((cardInfo, index) => <ServiceCard
                                key={index}
                                cardInfo={cardInfo}
                            ></ServiceCard>)
                        }
                    </div>
                    <div className='grid grid-cols-2 gap-[30px] w-[602px] mx-auto mt-[107px]'>
                        {
                            cardsInfo.slice(3).map((cardInfo, index) => <ServiceCard
                                key={index}
                                cardInfo={cardInfo}
                            ></ServiceCard>)
                        }
                    </div>
                </div>
                {/*--------- Cards for large device end-------- */}
            </div>

            {/*-------- Service cards section end --------- */}

        </div>
    );
};

export default SimplicitySection;