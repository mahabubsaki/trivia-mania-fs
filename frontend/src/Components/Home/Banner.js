import { Button } from '@chakra-ui/react';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../Assets/challenge-trivia-neon-signs-style-text_118419-1042.webp';
const Banner = () => {
    const [queto, setQueto] = useState(null);
    useEffect(() => {

        fetch("https://api.quotable.io/random?maxLength=70")
            .then(res => res.json())
            .then(data => setQueto(data));
    }, []);
    return (
        <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 flex justify-center text-center items-center p-6'>
                <div>
                    <h1 className='font-semibold text-2xl'>Welcome to TriviaMania</h1>
                    <h1 className='text-5xl text-primary font-extrabold my-4'>{queto?.content}</h1>
                    <p className='mb-4 italic text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta labore eos? Ab, obcaecati! Eligendi recusandae, itaque maiores alias doloribus in. Libero dolorem debitis iure quas enim. Officia aspernatur asperiores facilis.</p>
                    <a href="#about"><Button colorScheme={'primary'} className="hover:bg-secondary hover:text-black duration-300">Explore</Button></a>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <img data-aos="flip-left" src={banner} alt="" className='w-full h-full' />
            </div>

        </div>
    );
};

export default Banner;