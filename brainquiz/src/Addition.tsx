import React, { useEffect, useState } from 'react';
import { AdditionQuestion, checkAnswer, getAdditionQuestion } from './Addition.service';

/**
 * Display a heading - y
 * Display an addition question
 * Provide an input box for the answer
 * Button for submitting answer
 * Response: correct/incorrect
 * If correct, rerender with next question
 * @returns 
 */
export default function Addition() {

    //user's input for the answer
    let [answer, setAnswer] = useState(0);

    //is the user's question correct?
    let [correct, setCorrect] = useState(false);

    //have they submitted their question yet?
    let [submitted, setSubmitted] = useState(false);

    let [question, setQuestion] = useState(new AdditionQuestion(0, 0));

    function handleAnswerSubmit() {
        setCorrect(checkAnswer(Number(answer), question.correctAnswer));
        setSubmitted(true);
        console.log(`answer: ${Number(answer)}, correct: ${correct}, submitted: ${submitted}`);
    }

    useEffect(() => {
        if (question.number1 === 0 || (submitted && correct)) {
            setQuestion(getAdditionQuestion());
            console.log(`got new question: ${JSON.stringify(question)}`);
            setAnswer(0);
            setSubmitted(false);
            setCorrect(false);
        }
    }, [submitted, correct]);

    return (
        <div>
            <h1>Welcome to the Brain Quiz!</h1>
            {question.number1 > 0 &&
                <>
                    <h2>{`${question.number1} + ${question.number2}`}</h2>
                    <input
                        type='text'
                        value={answer || ''}
                        placeholder='Type your answer here!'
                        onChange={(e) => {
                            console.log(`text: ${e.target.value}`);
                            console.log(`answer: ${answer}`);
                            setAnswer(Number(e.target.value));
                            console.log(`answer: ${answer}`);
                        }
                        }>
                    </input>
                    <button onClick={handleAnswerSubmit}>Submit answer</button>
                </>
            }
            {submitted && !correct &&
                <p>Incorrect!</p>
            }
        </div>
    )
}