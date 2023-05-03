import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div>
            {/* <h1 className='text-red-500'>home</h1> */}
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;