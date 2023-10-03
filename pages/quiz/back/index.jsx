import Link from 'next/link';

const BackQuizzes = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Back Quiz Selection
                </h2>
                <ul className="space-y-4">
                    <li>
                        <Link href="/quiz/back/test1">
                            <span className="block w-full text-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800">
                                Test 1
                            </span>

                        </Link>
                    </li>
                    <li>
                        <Link href="/quiz/back/test2">
                            <span className="block w-full text-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800">
                                Test 2
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/quiz/back/test3">
                            <span className="block w-full text-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800">
                                Test 3
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/quiz/back/test4">
                            <span className="block w-full text-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-800">
                                Test 4
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BackQuizzes;
