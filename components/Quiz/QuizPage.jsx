import React, { useState, useEffect } from "react";
import Question from "./Question";
import QuizStats from "./QuizStats";
import Results from "./Results";
import Explanation from "./Explanation";
import { quizzData } from "../../data/backTest1Data";

const QuizPage = () => {
    const timeLimit = 60 * 50; // 50 minutes in seconds
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]); // Cambiado a Array
    const [score, setScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(timeLimit);
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});

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

    const onResetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers([]);
        setScore(0);
        setTimeRemaining(timeLimit);
        setShowExplanation(false);
        setUserAnswers({});
    };

    const checkAnswer = (answer, index) => {
        setSelectedAnswers((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });

        setUserAnswers((prev) => ({
            ...prev,
            [currentQuestionIndex]: answer
        }));

        if (quizzData.questions[currentQuestionIndex].correctAnswer.includes(answer)) {
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
        setSelectedAnswers([]); // Resetea las respuestas seleccionadas
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const getIncorrectAnswers = () => {
        return quizzData.questions.map((q, idx) => {
            if (!q.correctAnswer.includes(userAnswers[idx])) {
                return {
                    question: q.question,
                    selectedAnswer: userAnswers[idx],
                    correctAnswer: q.correctAnswer
                };
            }
            return null;
        }).filter(Boolean);
    };

    if (currentQuestionIndex >= quizzData.questions.length) {
        return (
            <Results
                scorePercentage={(score / quizzData.questions.length) * 100}
                incorrectAnswers={getIncorrectAnswers()}
                onResetQuiz={onResetQuiz}
            />
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
                    selectedAnswers={selectedAnswers}
                />

                {}
                {quizzData.questions[currentQuestionIndex].explanation && showExplanation && (
                    <Explanation
                    explanation={quizzData.questions[currentQuestionIndex].explanation}
                    reference={quizzData.questions[currentQuestionIndex].reference}
                    onHideExplanation={() => setShowExplanation(false)}
                    />
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

                    {quizzData.questions[currentQuestionIndex].explanation && !showExplanation && (
                        <button
                            className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out mx-2"
                            onClick={() => setShowExplanation(true)}
                        >
                            Ver Explicación
                        </button>
                    )}

                    {!quizzData.questions[currentQuestionIndex].explanation && (
                        <span className="mx-2"></span>  // Espaciador para mantener el alineamiento
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
}

export default QuizPage;
