'use client';
import React, { useEffect, useState } from 'react';
import { quizzData } from '../data.js';

const QuizPage = () => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [selectedAnswersIndex, setSelectedAnswersIndex] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const { questions } = quizzData;
    const { question, answers, correctAnswer } = questions[activeQuestion];

    const checkAnswer = (answer, idx) => {
        setSelectedAnswersIndex(idx);

        if (answer === correctAnswer) {
            setIsAnswerCorrect(true);
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setIsAnswerCorrect(false);
        }
    };

    const handleNext = () => {
        if (activeQuestion === questions.length - 1) {
            setShowResults(true);
        } else {
            setActiveQuestion(activeQuestion + 1);
            setIsAnswerCorrect(null);
            setSelectedAnswersIndex(null);
        }
    };


    const scorePercentage = Math.round((correctAnswers / questions.length) * 100);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl mb-6 text-center">Quiz</h1>

            {!showResults ? (
                <div className="bg-gray-100 p-6 rounded-md shadow-md">
                    <h2 className="text-xl mb-4">
                        Question: {activeQuestion + 1} / {questions.length}
                    </h2>
                    <h3 className="text-2xl mb-6">{question}</h3>
                    <ul>
                        {answers.map((answer, idx) => (
                            <li
                                key={idx}
                                className={`mb-2 p-3 rounded-md cursor-pointer ${selectedAnswersIndex === idx ? (isAnswerCorrect ? 'bg-green-300' : 'bg-red-300') : 'hover:bg-gray-200'}`}
                                onClick={() => checkAnswer(answer, idx)}
                            >
                                {answer}
                            </li>
                        ))}
                    </ul>
                    {isAnswerCorrect !== null && (
                        <button
                            className='mt-4 p-2 bg-blue-500 text-white rounded-md'
                            onClick={handleNext}
                        >
                            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
                        </button>
                    )}
                </div>
            ) : (
                <div className="bg-gray-100 p-6 rounded-md shadow-md text-center">
                    <p className="text-2xl mb-6">Quiz Results</p>
                    <p className="text-xl mb-2">Total Questions: {questions.length}</p>
                    <p className="text-xl mb-2">Correct Answers: {correctAnswers}</p>
                    <p className="text-xl mb-2">Score: {scorePercentage}%</p>
                    {scorePercentage >= 75 ? (
                        <p className="text-green-600 text-xl">You passed!</p>
                    ) : (
                        <p className="text-red-600 text-xl">You did not pass. Try again!</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default QuizPage;
