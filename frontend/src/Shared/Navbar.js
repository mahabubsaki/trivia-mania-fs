import { Button, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { colors, navlinks } from '../utils/Constants';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import ActiveRoute from '../utils/ActiveRoute';
function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
}

const Navbar = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (windowDimensions >= 768) {
            onClose();
        }
    }, [windowDimensions]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (

        <nav style={{ backgroundColor: colors.secondary }} className='py-5 px-4 duration-300 flex border rounded shadow-lg justify-between items-center'>
            <p style={{ color: colors.primary }} className='Logo text-3xl italic font-bold'>
                TriviaMania
            </p>
            <div className='md:hidden'>
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen} >
                    <RiMenu3Fill />
                </Button>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <div className='flex flex-col items-center gap-5 pt-5 mt-6'>
                            {navlinks.map((links, index) => <ActiveRoute key={index} to={links.route}>{links.name}</ActiveRoute>)}
                            <Button colorScheme='teal' onClick={() => navigate('/login')}>Log In</Button>
                            <Button colorScheme='teal' variant={'outline'} onClick={() => navigate('/register')}>Register</Button>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <div className={`md:flex hidden items-center justify-center gap-4`}>
                {navlinks.map((links, index) => <ActiveRoute key={index} to={links.route}>{links.name}</ActiveRoute>)}
                <Button colorScheme='teal' onClick={() => navigate('/login')}>Log In</Button>
                <Button colorScheme='teal' variant={'outline'} onClick={() => navigate('/register')}>Register</Button>
            </div>
        </nav>


    );
};

export default Navbar;