import React from 'react';
import About from './Home/About';
import Banner from './Home/Banner';
import Contact from './Home/Contact';
import FAQS from './Home/FAQS';
import MyTeam from './Home/MyTeam';
import Slider from './Home/Slider';
const Home = () => {

    return (
        <div>
            <Banner />
            <About />
            <Slider />
            <MyTeam />
            <FAQS />
            <Contact />
        </div>
    );
};

export default Home;