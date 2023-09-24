"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import {
	IconHexagonNumber1,
	IconHexagonNumber2,
	IconHexagonNumber3,
	IconHexagonNumber4,
  IconLogout,
} from "@tabler/icons-react";

export default function Home() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { authenticated, login, logout } = useContext(AuthContext);
	const [error, setError] = useState(null);

  const users = [
    { username: "pabloh", password: "pablo.vass" },
    { username: "alexg", password: "alex.vass" },
    { username: "testUser", password: "testP4ssword" },
  ];

  const isValidCredentials = (inputUsername, inputPassword) => {
    return users.some(user => user.username === inputUsername && user.password === inputPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isValidCredentials(username, password)) {
        login();
        setError(null);
    } else {
        setError("Login failed");
    }
  };

  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center relative p-4 md:p-0">
        {authenticated && (
            <button
                onClick={logout}
                className="absolute top-4 right-4 p-3 bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md shadow-sm"
            >
                <IconLogout className="w-6 h-6" />
            </button>
        )}
        <div className="container bg-white p-8 rounded-lg shadow-lg max-w-xl w-full space-y-6">
            <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">Liferay Certification Quizz</h1>

            {authenticated ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array(4)
                        .fill(null)
                        .map((_, index) => {
                            let Icon;
                            switch (index) {
                                case 0:
                                    Icon = IconHexagonNumber1;
                                    break;
                                case 1:
                                    Icon = IconHexagonNumber2;
                                    break;
                                case 2:
                                    Icon = IconHexagonNumber3;
                                    break;
                                case 3:
                                    Icon = IconHexagonNumber4;
                                    break;
                                default:
                                    Icon = IconHexagonNumber1;
                            }
                            return (
                                <Link href={`/quizz/test-${index + 1}`} key={index}>
                                    <button
                                        disabled={index !== 0}
                                        className={`w-full flex items-center space-x-2 font-semibold px-4 py-2 transition duration-300 ease-in-out rounded-md shadow-sm ${
                                            index === 0
                                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                                : "bg-gray-100 cursor-not-allowed text-gray-500"
                                        }`}
                                    >
                                        <Icon className="w-6 h-6 text-yellow-400" />
                                        <span>
                                            {index === 0 ? "Test 1" : `Test ${index + 1} (WIP)`}
                                        </span>
                                    </button>
                                </Link>
                            );
                        })}
                </div>
            ) : (
                <>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 bg-white rounded-md hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 bg-white rounded-md hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                        <button
                            type="submit"
                            className={`w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 ease-in-out rounded-md shadow-sm ${
                                !username || !password ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={!username || !password}
                        >
                            Login
                        </button>
                    </form>
                    {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                </>
            )}

            <footer className="mt-8 text-center text-gray-400 text-xs">
                <p>
                    Made with{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{" "}
                    by{" "}
                    <a
                        href="https://linkedin.com/in/alex-gheorghe-calin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Alex Gheorghe
                    </a>
                </p>
            </footer>
        </div>
    </main>
);

}
