import React from 'react';
import bg from '../Assets/wave.svg';

const Footer = () => {
    return (


        <footer style={{ backgroundImage: `url(${bg})` }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-no-repeat bg-cover min-h-[400px] p-10 gap-8 bg-neutral">
            <div className="flex flex-col gap-2">
                <span className='text-2xl font-bold text-primary'>Services</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Branding</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Design</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Marketing</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Advertisement</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className='text-2xl font-bold text-primary'>Company</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">About us</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Contact</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Jobs</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Press kit</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className='text-2xl font-bold text-primary'>Legal</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Terms of use</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Privacy policy</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Cookie policy</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className='text-2xl font-bold text-primary'>Social</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Twitter</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Instagram</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Facebook</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Github</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className='text-2xl font-bold text-primary'>Explore</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Features</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Enterprise</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Security</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Pricing</span>
            </div>
            <div className="flex flex-col gap-2">
                <span className='text-2xl font-bold text-primary'>Apps</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Mac</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Windows</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">iPhone</span>
                <span className="text-lg font-medium hover:underline cursor-pointer">Android</span>
            </div>
        </footer>

    );
};

export default Footer;