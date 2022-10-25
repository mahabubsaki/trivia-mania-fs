import React from 'react';
import { teamInfo } from '../../utils/Constants';

const MyTeam = () => {
    return (
        <div className='bg-primary my-16 p-20'>
            <p className='text-center text-5xl font-bold text-white'>Our Team</p>
            <p className='my-9 text-center font-medium italic text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor?</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {teamInfo.map((x, index) => <div data-aos={x.type} key={index} className="bg-white p-8 flex text-center flex-col gap-2">
                    <img src={x.pic} alt="" className='w-full h-[250px]' />
                    <p className='text-4xl font-bold'>{x.name}</p>
                    <p className='text-2xl font-semibold text-primary'>{x.role}</p>
                </div>)}
            </div>
        </div>
    );
};

export default MyTeam;