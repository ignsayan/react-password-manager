import React from 'react'
import axios from 'axios'
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../configs/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    initiateLogin,
    attemptLogin,
} from '../modules/authentication/reducer';

export default function GoogleAuth() {

    const { loading } = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    const handleGoogleAuthentication = async () => {

        dispatch(initiateLogin());
        const provider = new GoogleAuthProvider();
        const google = await signInWithPopup(auth, provider);
        let user = google.user;

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
            firebase_uid: user.uid,
            name: user.displayName,
            email: user.email,
        });
        user = await response.data
        dispatch(attemptLogin(user));
    }

    return (
        <>
            <button
                onClick={handleGoogleAuthentication}
                className="flex items-center gap-2 bg-white text-gray-700 font-semibold py-3 px-6 rounded-3xl"
            >
                {loading
                    ? <svg className="animate-spin h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    : <FcGoogle className="text-xl" />
                }
                Continue with Google
            </button>
        </>
    )
}
