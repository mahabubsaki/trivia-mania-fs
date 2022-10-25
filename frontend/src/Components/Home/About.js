import React from 'react';
import { facielity } from '../../utils/Constants';
import learn from '../../Assets/photo-1546410531-bb4caa6b424d.avif';
import learn2 from '../../Assets/photo-1588702547919-26089e690ecc.avif';
import { Button } from '@chakra-ui/react';

const About = () => {
    return (
        <div className='py-14 relative' id='about'>
            <div className='absolute left-0 right-0 bottom-0 h-[400px] bg-[#F5F7FA]'></div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto w-[90%]'>
                {facielity.map((x, idx) => <div data-aos={x.type} style={{ backgroundColor: x.color }} key={idx} className="p-8 text-[#F0E5FF] text-center flex flex-col gap-4">
                    <p className='text-3xl font-bold'>{x.name}</p>
                    <hr className='w-[80%] mx-auto border-[3px]' />
                    <p className='text-lg font-medium italic'>{x.description ? x.description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil possimus earum odio aspernatur dicta quasi eaque doloremque! Atque sint magni laboriosam enim fugit voluptatem ad voluptate ratione quasi magnam! Ratione ab illum placeat officiis neque asperiores ullam earum eos iure!'}</p>
                </div>)}
            </div>
            <div className='flex flex-col md:flex-row py-10 items-center'>
                <div className='w-full md:w-1/2 flex justify-center mb-5' data-aos="zoom-in">
                    <img src={learn} alt="" className='w-[80%]' />
                </div>
                <div className='w-full md:w-1/2 lg:w-[40%]' data-aos="zoom-in-right">
                    <p className='text-3xl font-bold text-center text-primary'>Small Group Size</p>
                    <p className=' text-center font-medium italic text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat quae at, ab enim qui dolor cum quo voluptate blanditiis optio, esse recusandae ipsa voluptatum ad, accusamus veritatis minima. Molestias!</p>
                    <div className='flex justify-center'>
                        <Button className=" hover:bg-secondary hover:text-black duration-300" colorScheme={'primary'} >Discover More</Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row py-10 items-center'>

                <div className='w-full md:w-1/2 lg:w-[40%] mb-5' data-aos="zoom-in-left">
                    <p className='text-3xl font-bold text-center text-primary'>Over 140000 classes</p>
                    <p className=' text-center font-medium italic text-lg my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat quae at, ab enim qui dolor cum quo voluptate blanditiis optio, esse recusandae ipsa voluptatum ad, accusamus veritatis minima. Molestias!</p>
                    <div className='flex justify-center'>
                        <Button className=" hover:bg-secondary hover:text-black duration-300" colorScheme={'primary'} >Contact Us</Button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center' data-aos="zoom-in">
                    <img src={learn2} alt="" className='w-[80%]' />
                </div>
            </div>
        </div>
    );
};

export default About;