import React from 'react';

const QuizStats = ({ 
    currentQuestionNumber, 
    totalQuestions, 
    timeRemaining, 
    formatTime, 
    testType, 
    onFinish 
}) => {
    return (
        <div className="bg-gray-100 text-gray-700 p-4 rounded-md shadow-md flex justify-between items-center space-x-4">
            <div className="flex items-center space-x-4">
                <span className="text-lg font-medium">{currentQuestionNumber}/{totalQuestions}</span>
                <span className="text-lg font-medium">{formatTime(timeRemaining)}</span>
                <span className="text-lg font-medium">{testType}</span>
            </div>
            <button 
                onClick={onFinish} 
                className="bg-gray-700 hover:bg-gray-800 text-white transition duration-150 ease-in-out py-2 px-4 rounded-md shadow-md focus:outline-none"
            >
                Finish Test
            </button>
        </div>
    );
}

export default QuizStats;
