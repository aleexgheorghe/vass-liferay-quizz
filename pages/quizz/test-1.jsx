'use client';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '@/context/authContext.js';
import { useRouter } from 'next/router';
import { quizzData } from '../api/data.js';

/**
 * QuizPage Component: Renders the quiz interface to the user.
 *
 * The component first checks if the user is authenticated.
 * If not, it redirects the user to the homepage.
 * It then presents the user with a series of questions and tracks their progress.
 */
const QuizPage = () => {
    // Authentication context
    const { authenticated } = useContext(AuthContext);
    const router = useRouter();

    // Redirect to home if not authenticated
    useEffect(() => {
        if (!authenticated) {
            router.push('/');
        }
    }, [authenticated]);

    // State variables
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [selectedAnswersIndex, setSelectedAnswersIndex] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    // Destructure current question details
    const { questions } = quizzData;
    const { question, answers, correctAnswer, explanation } = questions[activeQuestion];

    /**
     * Checks if the selected answer(s) is correct.
     *
     * @param {string} answer - The selected answer.
     * @param {number} idx - The index of the selected answer.
     */
    const checkAnswer = (answer, idx) => {
        if (correctAnswer.length > 1) { // Multiselección
            let newSelectedAnswers = [...selectedAnswersIndex];
            if (newSelectedAnswers.includes(idx)) {
                newSelectedAnswers = newSelectedAnswers.filter(i => i !== idx);
            } else {
                newSelectedAnswers.push(idx);
            }
            setSelectedAnswersIndex(newSelectedAnswers);
            if (newSelectedAnswers.every(i => correctAnswer.includes(answers[i])) && newSelectedAnswers.length === correctAnswer.length) {
                setIsAnswerCorrect(true);
            } else {
                setIsAnswerCorrect(false);
            }
        } else { // Selección única
            setSelectedAnswersIndex([idx]);
            if (answer === correctAnswer[0]) {
                setIsAnswerCorrect(true);
            } else {
                setIsAnswerCorrect(false);
            }
        }
    };

    /**
     * Advances to the next question or shows the results if all questions are answered.
     */
    const handleNext = () => {
        if (activeQuestion === questions.length - 1) {
            setShowResults(true);
        } else {
            setActiveQuestion(activeQuestion + 1);
            setIsAnswerCorrect(null);
            setSelectedAnswersIndex([]);
        }
    };

    // Timer logic
    const [timeRemaining, setTimeRemaining] = useState(50 * 60);
    useEffect(() => {
        const timer = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(prevTime => prevTime - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        // Cleanup timer
        return () => clearInterval(timer);
    }, [timeRemaining]);

    /**
     * Formats the time into a readable format.
     *
     * @param {number} seconds - The total seconds to format.
     * @returns {string} - The formatted time string.
     */
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Calculate the score in percentage
    const scorePercentage = Math.round((correctAnswers / questions.length) * 100);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

                <div className="mb-6 p-4 sm:p-6 bg-white rounded-lg shadow">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Questions</p>
                            <p className="mt-1 text-lg font-semibold">{questions.length}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Time Remaining</p>
                            <p className="mt-1 text-lg font-semibold">{formatTime(timeRemaining)}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600">Questions Remaining</p>
                            <p className="mt-1 text-lg font-semibold">{questions.length - activeQuestion}</p>
                        </div>
                    </div>
                </div>

                {!showResults ? (
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
                        <h3 className="text-xl sm:text-2xl mb-6 font-semibold text-gray-700">{question}</h3>
                        <ul className="space-y-2">
                            {answers.map((answer, idx) => (
                                <li
                                    key={idx}
                                    className={`py-2 px-4 rounded cursor-pointer
                                    ${selectedAnswersIndex.includes(idx) ? (isAnswerCorrect ? 'bg-green-300' : 'bg-red-300') : 'hover:bg-gray-200'}`}
                                    onClick={() => {
                                        if (correctAnswer.length === 1) {
                                            setSelectedAnswersIndex([]);
                                        }
                                        checkAnswer(answer, idx);
                                    }}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                            {explanation && (
                                <div className="w-full sm:w-auto">
                                    {!showExplanation ? (
                                        <button
                                            className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                            onClick={() => setShowExplanation(true)}
                                        >
                                            View Explanation
                                        </button>
                                    ) : (
                                        <button
                                            className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                            onClick={() => setShowExplanation(false)}
                                        >
                                            Hide Explanation
                                        </button>
                                    )}
                                </div>
                            )}
                            {isAnswerCorrect !== null && (
                                <button
                                    className='w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded'
                                    onClick={handleNext}
                                >
                                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
                                </button>
                            )}
                        </div>
                        {showExplanation && explanation && (
                            <div className="mt-4 p-4 bg-gray-100 rounded">
                                <p className="text-gray-700">{explanation}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow text-center">
                        <p className="text-xl sm:text-2xl mb-6 font-semibold text-gray-800">Quiz Results</p>
                        <p className="text-lg mb-2">Total Questions: {questions.length}</p>
                        <p className="text-lg mb-2">Correct Answers: {correctAnswers}</p>
                        <p className="text-lg mb-2">Score: {scorePercentage}%</p>
                        {scorePercentage >= 75 ? (
                            <p className="text-green-600 text-xl">Congratulations! You passed.</p>
                        ) : (
                            <p className="text-red-600 text-xl">You did not pass. Try again!</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
export default QuizPage;
