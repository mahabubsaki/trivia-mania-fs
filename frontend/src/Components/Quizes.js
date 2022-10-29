import { Button } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import quizebanner from '../Assets/unnamed.png';

const Quizes = () => {
    const data = useLoaderData().data;
    const navigate = useNavigate();
    return (
        <div>
            <img src={quizebanner} alt="" className='h-[680px] spin py-10 mx-auto' />
            <p className='w-[80%] text-center mx-auto text-4xl font-bold my-6'>Answer some of the quizes to gain to your web development knowledge</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-[90%] mx-auto'>
                {data.map((x, index) => <div className='bg-[#F9F2ED] rounded-2xl overflow-hidden' key={index}>
                    <img className='hover:scale-110 cursor-pointer pb-4 duration-500 w-full ' src={x.logo} alt="" />
                    <p className='text-primary text-center text-4xl font-bold'>{x.name}</p>
                    <p className='text-center text-xl italic font-medium my-4'>Total <span className='text-primary'>{x.total}</span> Questions</p>
                    <p className='text-center text-xl italic font-medium'>Time limit <span className='text-primary'>{x.time}</span> Minutes</p>
                    <div className='my-5 flex justify-center'>
                        <Button onClick={() => navigate(`/quize/${x.id}`)} colorScheme={'teal'}>Participate</Button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Quizes;