import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import banner from '../Assets/challenge-trivia-neon-signs-style-text_118419-1042.webp';
const Home = () => {
    const [queto, setQueto] = useState(null);
    useEffect(() => {
        fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(data => setQueto(data));
    }, []);
    return (
        <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 flex justify-start items-center'>
                <div>
                    <h1>Welcome to TriviaMania</h1>
                    <h1>{queto?.content}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta labore eos? Ab, obcaecati! Eligendi recusandae, itaque maiores alias doloribus in. Libero dolorem debitis iure quas enim. Officia aspernatur asperiores facilis. Sequi enim molestiae ad sint beatae, sit culpa excepturi ea voluptate. Repellendus explicabo quisquam officia libero, ducimus accusamus quia.</p>
                    <Button colorScheme={'primary'}>Explore</Button>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={banner} alt="" className='w-full h-full' />
            </div>

        </div>
    );
};

export default Home;