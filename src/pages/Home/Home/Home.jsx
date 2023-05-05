import React from 'react';
import ChefCard from '../../Shared/ChefCard/ChefCard';
import Banner from '../../Shared/Banner/Banner';

import Trending from '../../Shared/Trending/Trending';
import About from '../../Shared/About/About';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <ChefCard></ChefCard>

            <Trending></Trending>
        </div>
    );
};

export default Home;