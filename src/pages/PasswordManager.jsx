import GoogleAuth from './GoogleAuth';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useEncrypt from '../hooks/useEncrypt';
import { logout } from '../modules/authentication/reducer';
import {
    fetchPasswords,
    savePassword,
} from '../modules/password/slices/index';
import {
    Header,
    SearchArea,
    FormInput,
    PasswordGenerator,
    PasswordList,
} from '../components/index';

export default function PasswordManager() {

    const { user } = useSelector((state) => state.authentication);
    const { passwords, loading } = useSelector((state) => state.password);

    const [filteredPasswords, setFilteredPasswords] = useState([]);
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [isAllowedCharacter, setIsAllowedCharacter] = useState(true);
    const [isAllowedNumber, setIsAllowedNumber] = useState(false);
    const [visibility, setVisibility] = useState({});

    const dispatch = useDispatch();
    const account = useRef(null);

    useEffect(() => {
        if (user) dispatch(fetchPasswords());
    }, [user, dispatch]);

    useEffect(() => {
        if (passwords.length > 0) setFilteredPasswords(passwords);
    }, [passwords]);

    let tempPass = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (isAllowedCharacter) string += '!@#$%^&*(){}[]';
    if (isAllowedNumber) string += '0123456789';

    const generatePassword = () => {
        for (let i = 1; i <= length; i++) {
            tempPass += string.charAt(Math.floor(Math.random() * string.length));
        }
        setPassword(tempPass);
    }
    useEffect(() => { generatePassword() },
        [length, isAllowedCharacter, isAllowedNumber]
    )

    const handleFormSubmit = () => {
        const data = {
            account: account.current.value,
            password: useEncrypt(password),
            user_id: user,
        }
        if (data.account !== '') dispatch(savePassword(data));
    }

    const handleSearch = (form) => {
        const key = form.get('account');
        const result = passwords.filter((password) =>
            password.account.toLowerCase().includes(key.toLowerCase())
        );
        setFilteredPasswords(result);
        setVisibility({});
    }

    const toggleVisibility = (id) => {
        setVisibility((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    return (
        <>
            <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
                <div className="w-full max-w-lg sm:max-w-3xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6">

                    <Header
                        action={() => dispatch(logout())}
                        user={user}
                    />

                    {user ?
                        <Fragment>
                            <div className="flex w-full md:flex-row flex-col md:space-x-3">
                                <SearchArea
                                    action={handleSearch}
                                    reference={account}
                                />
                                <FormInput
                                    action={handleFormSubmit}
                                    event={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>

                            <PasswordGenerator
                                length={length}
                                lengthToggle={(e) => setLength(e.target.value)}
                                allowedCharacter={isAllowedCharacter}
                                charToggle={() => setIsAllowedCharacter((toggle) => !toggle)}
                                allowedNumber={isAllowedNumber}
                                numToggle={() => setIsAllowedNumber((toggle) => !toggle)}
                            />

                            <PasswordList
                                passwords={filteredPasswords}
                                loading={loading}
                                toggleVisibility={toggleVisibility}
                                visibility={visibility}
                            />
                        </Fragment>

                        : <div className="flex items-center justify-center mb-6">
                            <GoogleAuth />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
