import { Button, Checkbox, Image, Input } from '@chakra-ui/react';
import React, { useContext } from 'react';
import knowledge from '../Assets/knowledge.png';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { FaFacebookSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AppContext } from '../Context/HigherOrder';

const Login = () => {
    const { providerLogin } = useContext(AppContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const navigate = useNavigate();
    const handleSignInProvider = async (provider) => {
        try {
            const result = await providerLogin(provider);
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='h-[800px] border flex items-center'>
            <div className='w-full lg:w-1/2'>
                <div className='w-[90%] sm:w-[60%] h-full lg:w-[80%] mx-auto flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold'>Login</h1>
                    <p className='font-semibold'>Log in your account to sync the data on multiple device</p>
                    <Button variant={'outline'} onClick={() => handleSignInProvider(googleProvider)} display='flex' gap={5}><FcGoogle className='text-xl' /><span>Sign In With Google</span></Button>
                    <Button variant={'outline'} onClick={() => handleSignInProvider(githubProvider)} display='flex' gap={5}><ImGithub className='text-xl' /><span>Sign In With Github</span></Button>
                    <Button variant={'outline'} onClick={() => handleSignInProvider(facebookProvider)} display='flex' gap={5}><FaFacebookSquare color='#0165E1' className='text-xl' /><span>Sign In With Facebook</span></Button>
                    <div className='flex gap-3 items-center mb-2'>
                        <div className='h-[1px] bg-gray-400 w-[35%]'></div>
                        <div className='w-[30%] text-center text-gray-400'>Or Sign In With Email</div>
                        <div className='h-[1px] bg-gray-400 w-[35%]'></div>
                    </div>
                    <div>
                        <label htmlFor="email" className='text-sm font-semibold cursor-pointer'>Email</label>
                        <Input placeholder='john@gmail.com' size='lg' marginTop={1} id={'email'} />
                    </div>
                    <div>
                        <label htmlFor="password" className='text-sm font-semibold cursor-pointer'>Password</label>
                        <Input placeholder='12345678' size='lg' marginTop={1} id={'password'} />
                    </div>
                    <div className='flex justify-between'>
                        <Checkbox colorScheme='primary' fontSize={'small'} fontWeight={'semibold'}>
                            Remember Me
                        </Checkbox>
                        <p className='text-primary font-bold text-sm cursor-pointer'>Forget Password?</p>
                    </div>
                    <Button colorScheme={'teal'}>Login</Button>
                    <p className='text-sm font-bold'>Not registered yet? <span className='text-primary cursor-pointer' onClick={() => navigate('/register')}>Create an account</span></p>
                </div>
            </div>
            <div className='login-bg h-full w-1/2 hidden p-8 lg:flex flex-col gap-6 text-white'>
                <h1 className='text-center font-bold text-6xl'>Welcome to Our Community</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur, corporis necessitatibus commodi quod qui amet labore numquam similique itaque placeat libero voluptatibus enim optio, aliquam nemo saepe? Excepturi, at!</p>
                <Image src={knowledge} height={170} width={170} marginX={'auto'} marginBottom={30} />
                <p className='text-center font-bold text-4xl'>Make Your knowledge sharper</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, inventore!</p>
            </div>
        </div>
    );
};

export default Login;