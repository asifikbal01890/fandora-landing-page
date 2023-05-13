import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CheckOutSection from './CheckOutSection/CheckOutSection';
import SimplicitySection from './SimplicitySection/SimplicitySection';

const Home = () => {
    return (
        <div>
            <div>
                <HeroSection></HeroSection>
                <CheckOutSection></CheckOutSection>
                <SimplicitySection></SimplicitySection>
            </div>
        </div>
    );
};

export default Home;