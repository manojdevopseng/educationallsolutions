"use client"

import user_icon from '@/app/assets/images/person.png';
import email_icon from '@/app/assets/images/email.png';
import password_icon from '@/app/assets/images/password.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Define interface for component props if needed
// interface RegisterProps { }

const Register: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const isPasswordMatch = confirmPassword === password; // Assuming you have a 'password' statement

    return (
        <div className='container flex flex-col w-[600px] m-auto mt-2 pb-[30px]'>
            <div className='header flex flex-col items-center gap-[9px] w-full mt-[30px]'>
                <div className='text-blue-900 text-2xl font-bold'>User Registeration</div>
                <div className='underline w-16 h-[6px] bg-[#3c009d] rounded-lg border'></div>
            </div>
            <div className='inputs mt-14 flex flex-col gap-6'>

                {/* Username  field */}
                <div className='input flex items-center m-auto w-[480px] h-16 bg-[#eaeaea] rounded-lg'>
                    <Image className='mx-8 my-0' src={user_icon} alt='user_icon' />
                    <input className='h-12 w-[400px] bg-transparent border-none outline-none text-[#797979] text-xl border border-blue-500 rounded-lg' type="text" placeholder='Enter Your Name' />
                </div>

                {/* Email ID field */}
                <div className='input flex items-center m-auto w-[480px] h-16 bg-[#eaeaea] rounded-lg'>
                    <Image className='mx-8 my-0' src={email_icon} alt='user_icon' />
                    <input className=' h-12 w-[400px] bg-transparent border-none outline-none text-[#797979] text-xl border border-blue-500 rounded-lg' type="email" placeholder='Enter Your Email' />
                </div>

                {/* Enter Password field */}
                <div className='input flex items-center m-auto w-[480px] h-16 bg-[#eaeaea] rounded-lg'>
                    <Image className='mx-8 my-0' src={password_icon} alt='user_icon' />
                    <input
                        className={`h-12 w-[400px] bg-transparent border-none outline-none text-[#797979] text-xl border ${isPasswordMatch ? 'border-blue-500' : 'border-red-500'} rounded-lg`}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Your Password"
                        minLength={8}
                        maxLength={16}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]).{8,16}$"
                        title="Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, and one symbol."
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* Eye button to toggle password visibility */}

                    <button
                        className='text-violet-900 mr-3'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>

                {/* Confirm Password field */}
                <div className='input flex items-center m-auto w-[480px] h-16 bg-[#eaeaea] rounded-lg'>
                    <Image className='mx-8 my-0' src={password_icon} alt='user_icon' />
                    <input
                        className={`h-12 w-[400px] bg-transparent border-none outline-none text-[#797979] border text-xl rounded-lg ${isPasswordMatch ? 'border-blue-500' : 'border-red-500'}`}
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Your Password"
                        minLength={8}
                        maxLength={16}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]).{8,16}$"
                        title="Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, and one symbol."
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    {/* Eye button to toggle password visibility */}

                    <button
                        className='text-violet-900 mr-3'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {/* Display error message if password don't match */}
                <div className='input flex items-center m-auto w-[480px]'>
                    {!isPasswordMatch && (
                        <p className='text-red-500 text-sm'>Passwords doesn't match</p>
                    )}
                </div>
            </div>

            {/* Terms and Conditions  */}
            <div className='forgot-password pl-16 mt-7 text-[#797979] text-lg'>
                <Link href={'/terms&condition'}>
                    Read Our Terms & Conditions <span className='text-[#4c00b4] cursor-pointer hover:text-black'>Click Here!</span>
                </Link>
            </div>

            {/* Register & Login Button */}
            <div className='submit-container flex gap-8 mx-auto my-[60px]'>
                <button
                    type="submit"
                    className="flex justify-center items-center cursor-pointer w-48 h-14  max-w-[200px]  rounded-full hover:font-semibold text-lg border-2 border-blue-500 px-4 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90"
                >
                    Register
                </button>
                <div className='submit flex justify-center items-center cursor-pointer w-48 h-14  max-w-[200px]  rounded-full hover:font-semibold text-lg border-2 border-blue-500 px-4 py-2 text-neutral-600 transition-all hover:border-black hover:text-black/90'>
                    <Link
                        href={'/login'}>
                        <h1>Login</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;