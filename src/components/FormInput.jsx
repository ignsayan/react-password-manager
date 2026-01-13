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
                        className="absolute top-1/2 right-2 transform -translate-y-1/2
                        bg-emerald-400 rounded-full p-3 shadow-lg justify-center
                        h-10 w-20 md:w-auto md:px-6 md:py-2 flex items-center">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
