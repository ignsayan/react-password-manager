import React, { Fragment } from 'react';
import PasswordSkeleton from '../loaders/PasswordSkeleton';
import { useDecrypt } from '../hooks/useEncrypt';

export default function PasswordList({
    passwords,
    loading,
    deletePassword,
    toggleVisibility,
    visibility,
}) {

    return (
        <>
            {loading ? <PasswordSkeleton />
                : <ul className="space-y-2 mt-6">

                    {passwords.map((password) =>

                        <Fragment key={password._id}>
                            <li className="flex items-center justify-between p-2 bg-gray-700
                            borderborder-gray-700 rounded-full shadow-lg hover:bg-gray-600">

                                <div className="w-full flex items-center">
                                    <button onClick={() => toggleVisibility(password._id)}
                                        className="bg-amber-500 font-medium p-2 rounded-full
                                        hover:bg-amber-600 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-gray-800"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            stroke="none"
                                        >
                                            <path
                                                d="M12 4.5C6.8 4.5 2.4 7.9 1 12c1.4 4.1 5.8 7.5 11 7.5s9.6-3.4 11-7.5c-1.4-4.1-5.8-7.5-11-7.5zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
                                            />
                                        </svg>
                                    </button>
                                    <span className="text-white cursor-pointer mx-3">
                                        {visibility[password._id]
                                            ? useDecrypt(password.password)
                                            : password.account.length > 20
                                                ? password.account.slice(0, 26) + ' ...'
                                                : password.account
                                        }
                                    </span>
                                </div>

                                <button
                                    className="bg-rose-600 font-medium p-2 rounded-full
                                    hover:bg-rose-700 shadow-lg"
                                    onClick={() => {
                                        if (confirm(`Are you sure you want to delete the password for ${password.account}?`)) {
                                            deletePassword(password._id);
                                        }
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            }
        </>
    )
}
