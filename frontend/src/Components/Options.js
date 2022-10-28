import { Checkbox } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

const Options = ({ x, correctAnswer, choosedOption, correct, clicked, setChoosedOption, setClicked, setCorrect, setTotalCorrect, questions, setFinish, quizeNo }) => {

    useEffect(() => {
        console.log(clicked, choosedOption);
    }, [clicked, choosedOption]);
    const att2 = {
        isChecked: false
    };
    const att = {

    };
    if ((correctAnswer !== x && clicked && choosedOption === x) || (correctAnswer === x && clicked)) {
        att2.isChecked = true;
    }
    if (choosedOption === x && !correct) {
        att.icon = <ImCross />;
    }
    return (
        <Checkbox disabled={clicked} onChange={() => {
            if (questions.length - 1 === quizeNo) {
                setFinish(true);
            }
            setChoosedOption(x);
            setClicked(true);
            if (x === correctAnswer) {
                setCorrect(true);
                setTotalCorrect((pre) => pre + 1);
            } else {
                setCorrect(false);
            }
        }} size='lg' isChecked={false} {...att2} colorScheme='teal' {...att} borderColor={'teal'} className={`${(correctAnswer !== x && clicked && choosedOption === x) ? 'bg-[#F92600]' : (correctAnswer === x && clicked) ? 'bg-[#3EC65D]' : 'bg-[#EFEFEF]'} relative rounded-md py-5 px-2 flex`}>
            <p className='absolute font-bold top-1/2 -translate-y-1/2 text-center w-[93%]'>{x}</p>
        </Checkbox>
    );
};

export default Options;