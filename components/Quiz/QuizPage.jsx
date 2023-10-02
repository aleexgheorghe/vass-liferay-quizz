// pages/QuizPage.jsx

import React, { useState, useEffect } from "react";
import Question from "./Question";
import QuizStats from "./QuizStats";
import Results from "./Results";
import Explanation from "./Explanation";
import { quizzData } from "../../data/backTest1Data";

const QuizPage = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	const [score, setScore] = useState(0);
	const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
	const [showExplanation, setShowExplanation] = useState(false);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeRemaining((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const checkAnswer = (answer, index) => {
		setSelectedAnswerIndex(index);
		if (
			quizzData.questions[currentQuestionIndex].correctAnswer.includes(answer)
		) {
			setScore((prevScore) => prevScore + 1);
		}
	};

	const onFinish = () => {
		// Detiene el temporizador
		setTimeRemaining(0);

		// Mueve al usuario a la pantalla de resultados
		setCurrentQuestionIndex(quizzData.questions.length);
	};

	const nextQuestion = () => {
		setShowExplanation(false);
		setSelectedAnswerIndex(null);
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	};

	if (currentQuestionIndex >= quizzData.questions.length) {
		return (
			<Results scorePercentage={(score / quizzData.questions.length) * 100} />
		);
	}

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 space-y-6">
                <QuizStats
                    currentQuestionNumber={currentQuestionIndex + 1}
                    totalQuestions={quizzData.questions.length}
                    timeRemaining={timeRemaining}
                    formatTime={formatTime}
                    testType="Back Test"
                    onFinish={onFinish}
                />

                <Question
                    question={quizzData.questions[currentQuestionIndex].question}
                    answers={quizzData.questions[currentQuestionIndex].answers}
                    checkAnswer={checkAnswer}
                    questionNumber={currentQuestionIndex + 1}
                    selectedAnswerIndex={selectedAnswerIndex}
                />

                {showExplanation ? (
                    <Explanation
                        explanation={quizzData.questions[currentQuestionIndex].explanation}
                        onHideExplanation={() => setShowExplanation(false)}
                    />
                ) : (
                    <button
                        className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out mb-4"
                        onClick={() => setShowExplanation(true)}
                    >
                        Ver Explicación
                    </button>
                )}

                <div className="flex justify-between items-center mt-4">
                    {currentQuestionIndex > 0 && (
                        <button
                            className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                        >
                            Volver atrás
                        </button>
                    )}

                    <button
                        className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800"
                        onClick={nextQuestion}
                    >
                        Next Question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;