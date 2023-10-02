import React from 'react';

const Question = ({ question, answers, checkAnswer, questionNumber, selectedAnswerIndex }) => {
    return (
        <div className="space-y-4">
            <h2 className="flex items-center text-xl font-medium text-gray-700">
                <span className="mr-3 p-2 rounded-full bg-gray-200 text-gray-600">{questionNumber}</span>
                {question}
            </h2>
            <div className="space-y-2">
                {answers.map((answer, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => checkAnswer(answer, idx)} 
                        className={`w-full text-left py-2 px-4 border ${selectedAnswerIndex === idx ? 'bg-blue-200 border-blue-500' : 'border-gray-200'} rounded-md hover:bg-gray-50 focus:outline-none focus:border-gray-300`}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;
