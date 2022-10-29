import { Button, Checkbox, Image, Input } from '@chakra-ui/react';
import React from 'react';
import knowledge from '../Assets/knowledge.png';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { FaFacebookSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[900px] border flex items-center'>
            <div className='login-bg h-full w-1/2 hidden p-8 lg:flex flex-col gap-6 text-white'>
                <h1 className='text-center font-bold text-6xl'>Welcome to Our Community</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur, corporis necessitatibus commodi quod qui amet labore numquam similique itaque placeat libero voluptatibus enim optio, aliquam nemo saepe? Excepturi, at!</p>
                <Image src={knowledge} height={170} width={170} marginX={'auto'} marginBottom={30} />
                <p className='text-center font-bold text-4xl'>Make Your knowledge sharper</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, inventore!</p>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='w-[90%] sm:w-[60%] h-full lg:w-[80%] mx-auto flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold'>Register</h1>
                    <p className='font-semibold'>Create an account to continue in triviamania and save progress</p>
                    <Button variant={'outline'} display='flex' gap={5}><FcGoogle className='text-xl' /><span>Continue With Google</span></Button>
                    <Button variant={'outline'} display='flex' gap={5}><ImGithub className='text-xl' /><span>Continue With Github</span></Button>
                    <Button variant={'outline'} display='flex' gap={5}><FaFacebookSquare color='#0165E1' className='text-xl' /><span>Continue With Facebook</span></Button>
                    <div className='flex gap-3 items-center mb-2'>
                        <div className='h-[1px] bg-gray-400 w-[35%]'></div>
                        <div className='w-[30%] text-center text-gray-400'>Or Register With Email</div>
                        <div className='h-[1px] bg-gray-400 w-[35%]'></div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='w-1/2'>
                            <label htmlFor="fname" className='text-sm font-semibold cursor-pointer'>Firstname</label>
                            <Input placeholder='John' size='lg' marginTop={1} id={'fname'} />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="lname" className='text-sm font-semibold cursor-pointer'>Lastname</label>
                            <Input placeholder='Doe' size='lg' marginTop={1} id={'lname'} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className='text-sm font-semibold cursor-pointer'>Email</label>
                        <Input placeholder='john@gmail.com' size='lg' marginTop={1} id={'email'} />
                    </div>
                    <div>
                        <label htmlFor="password" className='text-sm font-semibold cursor-pointer'>Password</label>
                        <Input placeholder='12345678' size='lg' marginTop={1} id={'password'} />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className='text-sm font-semibold cursor-pointer'>Confirm Password</label>
                        <Input placeholder='12345678' size='lg' marginTop={1} id={'confirm-password'} />
                    </div>
                    <Button colorScheme={'teal'}>Register</Button>
                    <p className='text-sm font-bold'>Already Have an Account? <span className='text-primary cursor-pointer' onClick={() => navigate('/login')}>Log In</span></p>
                </div>
            </div>

        </div>
    );
};

export default Register;