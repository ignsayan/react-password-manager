import React from 'react';
import reactLogo from '../assets/icon/react.svg';

export default function ({ action, user }) {

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl sm:text-3xl text-yellow-400 text-left sm:text-center w-full">
                    Password Manager
                </h1>
                {user &&
                    <button
                        onClick={action}
                        className="h-10 w-10 rounded-full bg-gray-700 hover:bg-rose-600 flex
                        items-center justify-center shadow-md transition-colors shrink-0">
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
            </div>
            <div className="flex items-center justify-center mb-6">
                <img src={reactLogo} className="logo" alt="React logo" />
            </div>
        </>
    )
}
