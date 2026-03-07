import React from 'react';

export default function FormInput({
    action,
    event,
    value,
}) {

    return (
        <>
            <div className="relative w-full md:w-1/2 mt-4 md:mt-0" >
                <form action={action}>
                    <input
                        type="text"
                        name="password"
                        placeholder="Your password"
                        onChange={event}
                        value={value}
                        className="w-full p-4 rounded-full focus:outline-none shadow-lg bg-gray-900 text-white"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute bg-emerald-500 rounded-full p-3 top-1/2 right-2
                    transform -translate-y-1/2 shadow-lg cursor-pointer hover:bg-emerald-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            stroke="currentColor"
                            strokeWidth="1"
                        >
                            <path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4zM7 3v6h8V3M7 13h10v6H7z" />
                        </svg>
                    </button>
                </form>
            </div>
        </>
    )
}
