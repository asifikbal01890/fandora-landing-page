import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CheckOutSection from './CheckOutSection/CheckOutSection';
import SimplicitySection from './SimplicitySection/SimplicitySection';
import FutureSection from './FutureSection/FutureSection';
import MarketplaceSection from './MarketplaceSection/MarketplaceSection';
import JoinDiscordSection from './JoinDiscordSection/JoinDiscordSection';

const Home = () => {
    return (
        <div>
            <div>
                <HeroSection></HeroSection>
                <CheckOutSection></CheckOutSection>
                <SimplicitySection></SimplicitySection>
                <FutureSection></FutureSection>
                <MarketplaceSection></MarketplaceSection>
                <JoinDiscordSection></JoinDiscordSection>
            </div>
        </div>
    );
};

export default Home;