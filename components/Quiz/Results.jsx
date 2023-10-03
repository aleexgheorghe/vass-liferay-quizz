import React from 'react';

const Results = ({ scorePercentage, incorrectAnswers, onResetQuiz }) => {
    const didPass = scorePercentage >= 75;

    return (
        <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
            <div className="text-center">
                <h2 className="text-2xl font-bold">
                    Resultados
                </h2>
                <p className="text-xl mt-2 mb-4">
                    Tu puntaje es: {scorePercentage}%
                </p>
                {didPass ? (
                    <p className="text-xl text-green-500">
                        ¡Felicidades! Has aprobado.
                    </p>
                ) : (
                    <p className="text-xl text-red-500">
                        Has reprobado. Necesitas al menos un 75% para aprobar.
                    </p>
                )}
            </div>

            {incorrectAnswers && incorrectAnswers.length > 0 && (
                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-medium text-gray-700 mb-2">
                        Respuestas equivocadas
                    </h3>
                    <div className="space-y-2">
                        {incorrectAnswers.map((answer, idx) => (
                            <div key={idx} className="p-4 border bg-red-50 border-red-200 rounded-md">
                                <p className="font-medium text-red-600">{answer.question}</p>
                                <p className="mt-1">
                                    <span className="text-red-500">Tu respuesta:</span> {answer.selectedAnswer}
                                </p>
                                <p className="mt-1">
                                    <span className="text-green-500">Respuesta correcta:</span> {answer.correctAnswer.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-6 text-center">
                <button
                    onClick={onResetQuiz}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Reiniciar Cuestionario
                </button>
            </div>
        </div>
    );
}

export default Results;
