import { Checkbox } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

const Options = ({ x, correctAnswer, choosedOption, correct, clicked, setChoosedOption, setClicked, setCorrect, setTotalCorrect, questions, setFinish, quizeNo, setAlreadySelected, alreadySelected, count, finish }) => {
    const previousSelcted = alreadySelected.find(a => a.selected === x) || {};

    const att2 = {
        isChecked: false
    };
    const att = {

    };
    if ((correctAnswer !== x && clicked && choosedOption === x) || (correctAnswer === x && clicked) || (x === correctAnswer && quizeNo !== count) || ((quizeNo + 1 === questions.length) && finish && x === correctAnswer)) {
        att2.isChecked = true;
    }
    if ((choosedOption === x && !correct) || (previousSelcted.isDone === false)) {
        att.icon = <ImCross />;
    }
    return (
        <Checkbox disabled={clicked || alreadySelected.map(x => x.quiz).includes(quizeNo)} onChange={() => {
            if (questions.length - 1 === quizeNo) {
                setFinish(true);
            }
            setAlreadySelected((pre) => [...pre, { selected: x, isDone: x === correctAnswer, quiz: quizeNo, correct: correctAnswer }]);
            setChoosedOption(x);
            setClicked(true);
            if (x === correctAnswer) {
                setCorrect(true);
                setTotalCorrect((pre) => pre + 1);
            } else {
                setCorrect(false);
            }
        }} size='lg'  {...att2} colorScheme='teal' {...att} borderColor={'teal'} className={`${((correctAnswer !== x && clicked && choosedOption === x) || (previousSelcted.isDone === false)) ? 'bg-[#F92600]' : ((correctAnswer === x && clicked) || (x === correctAnswer && ((quizeNo !== count) || ((quizeNo + 1 === questions.length) && finish)))) ? 'bg-[#3EC65D]' : 'bg-[#EFEFEF]'} relative rounded-md py-7 px-4 flex`}>
            <p className='absolute font-bold top-1/2" -translate-y-1/2 text-center w-[90%]'>{x}</p>
        </Checkbox>
    );
};

export default Options;