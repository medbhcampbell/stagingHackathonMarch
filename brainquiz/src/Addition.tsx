import React, { useEffect, useState } from 'react';
import { AdditionQuestion, checkAnswer, getAdditionQuestion } from './Addition.service';
import LeaderBoard from './LeaderBoard';
import { postNewUser } from './LeaderBoard.service';
import Timer from './timer';

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

    //actual math question
    let [question, setQuestion] = useState(new AdditionQuestion(0, 0));

    //username
    let [username, setUsername] = useState('');

    //score
    let [score, setScore] = useState(0);

    //timer is running
    let [running, setRunning] = useState(false);
    //update this to true when the timer runs out
    let [ended, setEnded] = useState(false);

    function onKeyUp(event: any) {
        if (event.charCode === 13) {
            handleAnswerSubmit();
        }
    }
    function handleAnswerSubmit() {
        if (checkAnswer(Number(answer), question.correctAnswer)) {
            setCorrect(true);
            //each correct answer is worth 5
            setScore(score += 5);
        }
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

        // if (ended) {
        //     postNewUser(username, score);
        // }
    }, [submitted, correct, ended]);

    return (
        <div className="">
            <h1 className="display-1 dark-bg color-white spacing-around">Welcome to the Brain Quiz{` ${username}`}!</h1>

            {running && !ended && <h1 className="display-2 dark-bg color-blue spacing-around">What is the answer to </h1>}

            {!running &&
                <>
                    <input
                        type='text'
                        placeholder='Enter username'
                        className="form-control margin-50"
                        onChange={(e) => setUsername(e.target.value)}></input>
                    <button
                        className="btn btn-success"
                        onClick={() => setRunning(true)}>START</button>
                </>
            }

            {running && question.number1 > 0 && !ended &&
                <>
                    <h2 className="display-3 dark-bg color-gold">{`${question.number1} + ${question.number2}`}</h2>
                    <br></br>
                    <input className="form-control margin-50" placeholder='Get Your Numbers Right'
                        type='text'

                        value={answer || ''}

                        onChange={(e) => {
                            console.log(`text: ${e.target.value}`);
                            console.log(`answer: ${answer}`);
                            setAnswer(Number(e.target.value));
                            console.log(`answer: ${answer}`);
                        }
                        }
                        onKeyPress={onKeyUp}
                    ></input>
                    <br></br>
                    <button className="btn btn-danger " onClick={handleAnswerSubmit}>Submit answer</button>
                    <br></br>
                    { submitted && !correct && <p className="display-3 dark-bg-grad color-gold">Incorrect!</p>}
                    <Timer myTime={10} endTimer={setEnded}></Timer>
                </>
            }

            {ended &&
                <>
                    <br></br>
                    <p className="display-4">Your score: {score}</p>
                    <br/>
                    <LeaderBoard></LeaderBoard>
                </>}

            <br></br>
        </div>
    )
}