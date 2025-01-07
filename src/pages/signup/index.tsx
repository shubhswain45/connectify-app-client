import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AlertCircle, CheckCircle2, Mail } from 'lucide-react';

interface FormData {
    email: string;
    username: string;
    fullname: string;
    password: string;
    month: string;
    day: string;
    year: string;
    gender: string;
}

const SpotifySignup: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const onSubmit = (data: FormData) => {
        const submittedData = {...data, dateOfBirth: `${data.month} ${data.day} ${data.year}`}

        console.log('Form submitted:', submittedData) ;
    };

    const email = watch('email');

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
            <div className="w-full max-w-xl px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-8">Sign up for free to start listening</h1>
                </div>

                {/* Social Buttons */}
                <div className="space-y-4 mb-8">
                    <button
                        type="button"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2"
                    >
                        Sign up with Facebook
                    </button>
                    <button
                        type="button"
                        className="w-full bg-white hover:bg-gray-100 text-black py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2"
                    >
                        Sign up with Google
                    </button>
                </div>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-black px-4 text-gray-400">or</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-bold">What&apos;s your email?</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Email is invalid',
                                },
                            })}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.email.message}</span>
                            </div>
                        )}
                    </div>

                    {/* Display Name */}
                    <div>
                        <label className="block mb-2 font-bold">What should we call you?</label>
                        <input
                            type="text"
                            {...register('username', { required: 'This field is required' })}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Enter your username"
                        />
                        {errors.username && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.username.message}</span>
                            </div>
                        )}
                        <span className="text-sm text-gray-400 mt-1 block">This appears on your profile</span>
                    </div>

                    {/* Fullname */}
                    <div>
                        <label className="block mb-2 font-bold">What&apos;s your fullname?</label>
                        <input
                            type="text"
                            {...register('fullname', { required: 'Fullname is required' })}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Enter your fullname"
                        />
                        {errors.fullname && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.fullname.message}</span>
                            </div>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-bold">Create a password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                            })}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Create a password"
                        />
                        {errors.password && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.password.message}</span>
                            </div>
                        )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block mb-2 font-bold">What&apos;s your date of birth?</label>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <select
                                    {...register('month', { required: 'Month is required' })}
                                    className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                                >
                                    <option value="">Month</option>
                                    {months.map((month, index) => (
                                        <option key={month} value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                {errors.month && <span className="text-red-500">{errors.month.message}</span>}
                            </div>
                            <div className="w-24">
                                <input
                                    type="number"
                                    {...register('day', { required: 'Day is required' })}
                                    placeholder="DD"
                                    min="1"
                                    max="31"
                                    className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                                />
                            </div>
                            <div className="w-24">
                                <input
                                    type="number"
                                    {...register('year', { required: 'Year is required' })}
                                    placeholder="YYYY"
                                    min="1900"
                                    max={new Date().getFullYear()}
                                    className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-2 font-bold">What&apos;s your gender?</label>
                        <div className="flex gap-4 flex-wrap">
                            {['Male', 'Female', 'Non-binary', 'Other', 'Prefer not to say'].map((gender) => (
                                <label key={gender} className="flex items-center">
                                    <input
                                        type="radio"
                                        {...register('gender', { required: 'Gender is required' })}
                                        value={gender}
                                        className="mr-2"
                                    />
                                    {gender}
                                </label>
                            ))}
                        </div>
                        {errors.gender && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.gender.message}</span>
                            </div>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-full font-bold"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SpotifySignup;
