import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "../app.css"
import '../text.sass'
import questions from '../questions.json'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/index";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

const questionssss = questions;
const Quiz = () => {

    const [questions, setQuestions] = useState(questionssss);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [nextQuestion, setNextQuestion] = useState({});
    const [previousQuestion, setPreviousQuestion] = useState({});
    const [answer, setAnswer] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [time, setTime] = useState(0);

    let navigate = useNavigate();

    const { state, dispatch } = useContext(Context)
    console.log("state is ", state)


    //Timer
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:60');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }


    //Calling function
    const displayQuestion = (questions, currentQuestion, nextQuestion, previousQuestion) => {
        if (questions.length > 0) {
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const Myanswer = currentQuestion.answer;

            setCurrentQuestion(currentQuestion)
            setNextQuestion(nextQuestion)
            setPreviousQuestion(previousQuestion)
            setAnswer(Myanswer)
            // setCurrentQuestionIndex(currentQuestionIndex)
        }

    }

    useEffect(() => {
        displayQuestion(questions, currentQuestion, nextQuestion, previousQuestion, currentQuestionIndex)
    }, [questions, currentQuestion, nextQuestion, previousQuestion, currentQuestionIndex])




    const greeting = (e) => {
        // console.log(e.target.innerHTML.toLowerCase());
        console.log(currentQuestion.answer.toLowerCase(), "IS it Equal", e.target.innerHTML.toLowerCase())
        if (currentQuestion.answer.toLowerCase() === e.target.innerHTML.toLowerCase()) {
            setScore(score + 1)
            dispatch({
                type: "increase",
            })

        } else {
            setScore(score)
            dispatch({
                type: "nochange",
            })

        }
        waveHello();
    }

    function waveHello() {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }


    
    
    
    const endtime=()=>{
        if(timer==="00:00:00"){
            
            
           
            navigate(`/Submit`);

        }
    }
    endtime()
    
    return (
        <>
       
            <div className="bigContainer">
                <a className="nicetime" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {timer}
                    


                </a>
                <div className="questionContainer">
                
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="gooey">

                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                    <button id="gooey-button">
                        {currentQuestion.question}
                        <span className="bubbles">
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                        </span>
                    </button>
                </div>
                <div className="question">
                    <div className="twoquestion1">
                        {currentQuestionIndex === 14 ? <button disabled className="cybr-btn hi">
                            {currentQuestion.optionA}
                        </button>
                            : <button onClick={greeting} className="cybr-btn hi no">
                                {currentQuestion.optionA}

                            </button>}

                        {currentQuestionIndex === 14 ? <button disabled className="cybr-btn hi">
                            {currentQuestion.optionA}

                        </button>
                            : <button onClick={greeting} className="cybr-btn hi no">
                                {currentQuestion.optionB}
                            </button>}

                    </div>
                    <div className="twoquestion1">
                        {currentQuestionIndex === 14 ? <button disabled className="cybr-btn hi">
                            {currentQuestion.optionA}
                        </button>
                            : <button onClick={greeting} className="cybr-btn hi no">
                                {currentQuestion.optionC}
                            </button>}
                        {currentQuestionIndex === 14 ? <button disabled className="cybr-btn hi">
                            {currentQuestion.optionA}
                        </button>
                            : <button onClick={greeting} className="cybr-btn hi no">
                                {currentQuestion.optionD}
                            </button>}

                    </div>
                </div>
                <div className="lastcontainer">
                    <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} className="button-52 hi" >Previous</button>
                    {currentQuestionIndex === 14 ? <button className="button-52" ><Link style={{ padding: 0, display: "table-cell" }} to="/Submit">Submit</Link> </button> :
                        <button className="button-52" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Skip</button>}

                </div>

            </div>

            

        </>
    );
}

export default Quiz;
