import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import { faqs } from '../../utils/Constants';

const FAQS = () => {
    return (
        <div className='my-6'>
            <p className='text-center text-5xl font-bold text-primary my-4'>FAQS</p>
            <div className='w-full md:w-1/2 mx-auto'>
                {faqs.map((x, index) => <Accordion key={index} allowMultiple >
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontSize={'2xl'} fontWeight={800}>
                                    {x}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>)}
            </div>
        </div>
    );
};

export default FAQS;