import { Button, Input, InputGroup, InputRightAddon, useToast } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { FiPhoneCall, FiMapPin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { TbLockOpen } from 'react-icons/tb';
const Contact = () => {
    const input = useRef();
    const toast = useToast();
    const id = 'test-toast';
    return (
        <div>

            <div className='bg-primary py-20 text-center'>
                <p className='text-white font-bold text-5xl'>Subscribe to Our Newsletter</p>
                <p className='w-full md:w-[70%] mx-auto text-xl my-6 text-white font-semibold italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corrupti ab autem vero enim aspernatur, hic nihil rerum alias aut?</p>
                <div className='flex justify-center w-[75%] mx-auto md:w-[35%]'>
                    <InputGroup>

                        <Input ref={input} type='email' placeholder='Enter valid email' />
                        <InputRightAddon><Button className='w-full' onClick={() => {
                            if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/.test(input.current.value)) {
                                if (!toast.isActive(id)) {
                                    toast({
                                        id,
                                        position: 'top',
                                        status: 'success',
                                        isClosable: true,
                                        title: 'Subscribed to newsletter successfully',
                                    });
                                }
                            } else {
                                if (!toast.isActive(id)) {
                                    toast({
                                        id,
                                        position: 'top',
                                        status: 'error',
                                        isClosable: true,
                                        title: 'Invalid Email address given',
                                    });
                                }
                            }
                            input.current.value = '';
                        }}>Subscribe</Button></InputRightAddon>
                    </InputGroup>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5'>
                <div className='bg-primary p-10 font-bold text-2xl text-white'>
                    <FiPhoneCall className='text-5xl' />
                    <p className='my-5'>Call Today</p>
                    <p>+8801714269744</p>
                </div>
                <div className='bg-[#FFA731] p-10 font-bold text-2xl text-white'>
                    <FiMapPin className='text-5xl' />
                    <p className='my-5'>Address</p>
                    <p>Boro Dewra, Tongi, Gazipur</p>
                </div>
                <div className='bg-[#EF4366] p-10 font-bold text-2xl text-white'>
                    <MdEmail className='text-5xl' />
                    <p className='my-5'>Email Us</p>
                    <p>mcr21191999@gmail.com</p>
                </div>
                <div className='bg-[#3FB7FE] p-10 font-bold text-2xl text-white'>
                    <TbLockOpen className='text-5xl' />
                    <p className='my-5'>Opening Hours</p>
                    <p>Mon — Fri 10:00 – 23:00</p>
                    <p>Sut-Sun- 10:00 – 19:00</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;