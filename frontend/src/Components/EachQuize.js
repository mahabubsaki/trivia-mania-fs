import React, { useEffect, useState } from 'react';
import { Button, Checkbox } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import Options from './Options';

const EachQuize = ({ questions, setTotalCorrect, onOpen }) => {
    const [quizeNo, setQuizNo] = useState(0);
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [alreadySelected, setAlreadySelected] = useState([]);

    const [finish, setFinish] = useState(false);
    const [choosedOption, setChoosedOption] = useState('');
    const { correctAnswer, options, question } = questions[quizeNo] || {};
    console.log(quizeNo, questions.length);
    useEffect(() => {
        setClicked(false);
        setCorrect(false);

        setChoosedOption('');
    }, [quizeNo]);
    const w = `${((quizeNo + 1) / questions.length) * 100}%`;
    return (
        <div className='shadow-xl my-5 rounded-xl p-7 border w-full lg:w-[90%] mx-auto'>
            <div className='w-full h-[5px] bg-[#EBEDEF] rounded-xl'>
                <div style={{ width: w }} className='bg-[#3EC65D] h-full rounded-xl'>
                </div>
            </div>
            <div className='flex justify-between my-2 opacity-60'>
                <p>Quiz No {quizeNo + 1}</p>
                <p>Question {quizeNo + 1} of {questions.length}</p>
            </div>
            <p className='w-[85% mx-auto my-8 text-3xl font-semibold text-center' dangerouslySetInnerHTML={{
                __html: question
            }}></p>
            <div className='w-[95%] sm:max-w-[600px] mx-auto flex flex-col gap-6'>
                {options.map((x, index) => <Options count={count} finish={finish} setCount={setCount} alreadySelected={alreadySelected} setAlreadySelected={setAlreadySelected} x={x} quizeNo={quizeNo} questions={questions} setFinish={setFinish} setTotalCorrect={setTotalCorrect} clicked={clicked} setCorrect={setCorrect} correct={correct} setClicked={setClicked} choosedOption={choosedOption} setChoosedOption={setChoosedOption} correctAnswer={correctAnswer} />)}
                {((clicked && !correct) || (quizeNo !== count && !alreadySelected[quizeNo]?.isDone) || finish) && <p className='text-center italic font-medium my-8'>You have selected <span className='font-bold'>"{choosedOption || alreadySelected[quizeNo]?.selected}"</span> but the correct answer is <span className='font-bold'>"{correctAnswer}"</span></p>}
            </div>
            <div className='flex justify-center mt-5 gap-5'>
                {(finish && quizeNo > 0) && <Button onClick={() => setQuizNo((pre) => pre - 1)} colorScheme={'teal'} variant='outline'>Previous</Button>}
                {finish && quizeNo + 1 !== questions.length && <Button onClick={() => setQuizNo((pre) => pre + 1)} colorScheme={'teal'} >Next</Button>}
                {(clicked && !finish) &&
                    <Button onClick={() => {
                        setQuizNo((pre) => pre + 1);

                        if (quizeNo === count) {
                            setCount((pre) => pre + 1);
                        }
                    }} colorScheme={'teal'}>Next</Button>
                }
                {(finish) &&
                    <Button colorScheme={'teal'} onClick={() => onOpen()}>Finish Quiz</Button>
                }
            </div>
        </div >
    );
};

export default EachQuize;