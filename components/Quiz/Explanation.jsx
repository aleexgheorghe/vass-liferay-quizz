import React from 'react';

const Explanation = ({ explanation, onHideExplanation, reference }) => {
    return (
        <div className="relative bg-gray-100 p-4 rounded-md shadow mt-4 border-l-4 border-blue-500">
            <button
                className="top-2 right-2 text-gray-500 hover:text-gray-600 transition duration-150"
                onClick={onHideExplanation}
            >
                ✖
            </button>
            <p className="text-gray-700">{explanation}</p>
            {reference && (
                <a
                    href={reference}
                    className="text-blue-500 hover:underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Referencia
                </a>
            )}
        </div>
    );
}

export default Explanation;
