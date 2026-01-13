import React from 'react';
import { CheckBox } from '../components/index';

export default function PasswordGenerator({
    length,
    lengthToggle,
    allowedCharacter,
    charToggle,
    allowedNumber,
    numToggle,
}) {

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-5 pt-5 pl-6 pr-6">
                <div className="relative w-full flex items-center">
                    <label htmlFor="priority" className="text-white mr-4">
                        Strength<span className='mx-2'>({length})</span>
                    </label>
                    <input
                        type="range"
                        min="8" max="20"
                        onChange={lengthToggle}
                        className='w-80 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none'
                        value={length}
                    />
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                        <CheckBox
                            style='w-4 h-4 text-emerald-400 bg-gray-900 rounded focus:ring-emerald-500 border-gray-700'
                            label='Characters'
                            labelClass='ml-2 text-white'
                            value={allowedCharacter}
                            toggle={charToggle}
                        />
                    </div>
                    <div className="flex items-center">
                        <CheckBox
                            style='w-4 h-4 text-emerald-400 bg-gray-900 rounded focus:ring-emerald-500 border-gray-700'
                            label='Numbers'
                            labelClass='ml-2 text-white'
                            value={allowedNumber}
                            toggle={numToggle}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
