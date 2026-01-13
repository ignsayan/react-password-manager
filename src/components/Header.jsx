import React from 'react';
import reactLogo from '../assets/icon/react.svg';
import '../assets/css/logo.css';

export default function ({ action, user }) {

    return (
        <>
            <h1 className="text-2xl sm:text-3xl text-center text-yellow-400 mb-3">
                Password Manager
            </h1>

            {user &&
                <button
                    onClick={action}
                    className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center
                        bg-gray-700 hover:bg-rose-600 transition-colors rounded-full shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 21 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                        />
                    </svg>
                </button>
            }

            <div className="flex items-center justify-center mb-6">
                <img src={reactLogo} className="logo" alt="React logo" />
            </div>
        </>
    )
}
