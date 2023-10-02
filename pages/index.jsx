import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
                <div>
                    <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Welcome to the Quiz Platform
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Choose a quiz type:
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-6">
                    <li>
                        <Link href="/quiz/back">
                            <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Back Quiz
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/quiz/front">
                            <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Front Quiz
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
