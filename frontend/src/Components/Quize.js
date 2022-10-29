import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import EachQuize from './EachQuize';
import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react';
import winnerGif from '../Assets/91644-premium-quality.gif';
import gitGif from '../Assets/81356-github-icon.gif';
import jsGif from '../Assets/111794-javascript.gif';
import reactGif from '../Assets/296-react-logo.gif';
import cssGif from '../Assets/63207-css3.gif';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const Quize = () => {
    const data = useLoaderData();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { name, logo, questions, time, total } = data;
    const [myTime, setMytime] = useState(time * 60);
    const [finish, setFinish] = useState(false);
    const [restart, setRestart] = useState(false);
    const navigate = useNavigate();

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
        if (finish) {
            setRestart(false);
            clearInterval(y);
        }
        return () => {
            x = false;
            clearInterval(y);
        };
    }, [start, finish]);
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
                <EachQuize restart={restart} finish={finish} setFinish={setFinish} onOpen={onOpen} questions={questions} setTotalCorrect={setTotalCorrect} />

            </>}
            <Modal closeOnOverlayClick={false} motionPreset='slideInBottom' isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />
                <ModalContent>
                    <ModalHeader fontSize={'3xl'}>{name} Quize Performance</ModalHeader>
                    <ModalCloseButton onClick={() => {
                        setRestart(true);
                        setMytime(time * 60);
                        setStart(false);
                        setTotalCorrect(0);
                        setFinish(false);
                    }} />
                    <ModalBody>
                        {name === 'Git' && <Image marginX={'auto'} marginY={15} width={100} src={gitGif} />}
                        {name === 'JavaScript' && <Image marginX={'auto'} marginY={15} width={100} src={jsGif} />}
                        {name === 'React' && <Image marginX={'auto'} marginY={15} width={100} src={reactGif} />}
                        {name === 'CSS' && <Image marginX={'auto'} marginY={15} width={100} src={cssGif} />}
                        <Text fontSize={'xl'}>Time Estemated : <span className='font-bold italic text-primary'>{(parseInt((time * 60 - myTime) / 60)) > 0 && (parseInt(time * 60 - myTime) / 60)} {(parseInt((time * 60 - myTime) / 60)) > 0 && 'Minutes'} {time * 60 - myTime} Seconds </span></Text>
                        <Text fontSize={'xl'}>Correct Answers : <span className='font-bold italic text-primary'>{totaCorrect} / {questions.length}</span></Text>
                        <Text fontSize={'xl'}>Marks in Percentage : <span className='font-bold italic text-primary'>{parseInt((totaCorrect / questions.length) * 100)}%</span></Text>
                        <Text fontSize={'xl'}>Seconds Per Quiz : <span className='font-bold italic text-primary'>{((time * 60 - myTime) / totaCorrect).toFixed(2)}</span></Text>
                        <Image src={winnerGif} />
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent={'space-between'}>
                        <Button onClick={() => navigate('/quizes')} variant={'outline'} colorScheme='teal' alignItems={'center'} gap={3} display={'flex'}><GrLinkPrevious /><span>Back To Quizes</span></Button>
                        <Button onClick={() => navigate('/profile')} colorScheme='teal' alignItems={'center'} gap={3} display={'flex'}><span>Visit Profile</span><GrLinkNext /></Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Quize;