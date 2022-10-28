import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuize from './EachQuize';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react';

const Quize = () => {
    const data = useLoaderData();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { name, logo, questions, time, total } = data;
    const [myTime, setMytime] = useState(time * 60);
    const [totaCorrect, setTotalCorrect] = useState(0);
    const [start, setStart] = useState(false);
    useEffect(() => {
        let x = true;
        let y;
        if (start && x) {
            y = setInterval(() => {
                setMytime((pre) => pre - 1);
            }, 1000);
        }
        return () => {
            x = false;
            clearInterval(y);
        };
    }, [start]);
    useEffect(() => {
        if (myTime === 0) {
            onOpen();
        }
    }, [myTime]);
    return (
        <div>
            <div className='flex justify-center bg-[#F9F2ED] w-[95%] mx-auto py-4'>
                <div className='flex items-center flex-col sm:flex-row'>
                    <img src={logo} alt="" className='w-[350px]' />
                    <div className='flex flex-col text-2xl gap-4 sm:ml-8'>
                        <p>Topic : <span className='text-primary font-bold'>{name}</span></p>
                        <p><span className='text-primary font-bold'>{total}</span> Questions</p>
                        <p><span className='text-primary font-bold'>{time}</span> Minutes</p>
                        {!start && <Button colorScheme={'teal'} onClick={() => {
                            setStart(() => true);
                        }}>Start Now </Button>}
                    </div>
                </div>
            </div>
            {start && <>

                <div className='w-[300px] h-[250px] mt-5 bg-black mx-auto relative rounded-lg'>
                    <div className='absolute top-1/2 -translate-y-1/2 w-full'>
                        <p className='text-xl text-center font-semibold text-white'>Remaining Time</p>
                        <p className='text-5xl text-center font-bold text-white my-2'><span>{Math.floor(myTime / 60)}</span> : <span>{myTime % 60}</span></p>
                        <p className='text-xl text-center font-semibold text-white mb-2'>Correct Answers</p>
                        <p className='text-5xl text-center font-bold text-white'>{totaCorrect} / {total}</p>
                    </div>
                </div>
                <EachQuize onOpen={onOpen} questions={questions} setTotalCorrect={setTotalCorrect} />

            </>}
            <Modal closeOnOverlayClick={false} motionPreset='slideInBottom' isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent>
                    <ModalHeader>{name} Quize Performance</ModalHeader>
                    <ModalCloseButton onClick={() => {
                        setMytime(time * 60);
                        setStart(false);
                        setTotalCorrect(0);
                    }} />
                    <ModalBody>
                        <Text>Custom backdrop filters!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Quize;