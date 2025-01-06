import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Mail } from 'lucide-react';

interface FormData {
    email: string;
    confirmEmail: string;
    password: string;
    displayName: string;
    month: string;
    day: string;
    year: string;
    gender: string;
}

interface FormErrors {
    [key: string]: string;
}

const SpotifySignup: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        confirmEmail: '',
        password: '',
        displayName: '',
        month: '',
        day: '',
        year: '',
        gender: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isVerificationSent, setIsVerificationSent] = useState<boolean>(false);

    const months: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = 'Email addresses don\'t match';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!formData.displayName) {
            newErrors.displayName = 'What should we call you?';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validateForm()) {
            // Simulating API call
            console.log('Form submitted:', formData);
            setIsVerificationSent(true);
        }
    };

    const handleResendEmail = (): void => {
        console.log('Resending verification email to:', formData.email);
        // Add your resend email logic here
    };

    const VerificationContent = () => (
        <div className="text-center px-4 py-8">
            <div className="flex justify-center mb-6">
                <div className="bg-green-500 rounded-full p-4">
                    <Mail className="w-12 h-12 text-black" />
                </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">Verify your email</h2>

            <div className="max-w-md mx-auto">
                <p className="text-gray-300 mb-6">
                    We&apos;ve sent a verification email to:
                    <br />
                    <span className="font-bold">{formData.email}</span>
                </p>

                <div className="space-y-4">
                    <p className="text-gray-400">
                        Click the link in the email to verify your email address and complete your registration.
                    </p>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <p className="text-gray-400 mb-4">
                            Didn&apos;t receive the email?
                        </p>

                        <button
                            onClick={handleResendEmail}
                            className="text-white hover:underline focus:outline-none"
                        >
                            Resend verification email
                        </button>
                    </div>
                </div>
            </div>

            {/* Tips Section */}
            <div className="mt-8 bg-gray-900 rounded-lg p-6 max-w-md mx-auto text-left">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Tips
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Check your spam or junk folder</li>
                    <li>• Allow emails from spotify.com</li>
                    <li>• Make sure your email address was entered correctly</li>
                </ul>
            </div>
        </div>
    );

    if (isVerificationSent) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center">
                <div className="w-full max-w-xl">
                    <VerificationContent />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
            <div className="w-full max-w-xl px-8">
                {/* Logo */}
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

                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-bold">What&apos;s your email?</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.email}</span>
                            </div>
                        )}
                    </div>

                    {/* Confirm Email */}
                    <div>
                        <label className="block mb-2 font-bold">Confirm your email</label>
                        <input
                            type="email"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Enter your email again"
                        />
                        {errors.confirmEmail && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.confirmEmail}</span>
                            </div>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-bold">Create a password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Create a password"
                        />
                        {errors.password && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.password}</span>
                            </div>
                        )}
                    </div>

                    {/* Display Name */}
                    <div>
                        <label className="block mb-2 font-bold">What should we call you?</label>
                        <input
                            type="text"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                            placeholder="Enter a profile name"
                        />
                        {errors.displayName && (
                            <div className="text-red-500 flex items-center gap-1 mt-1">
                                <AlertCircle className="w-4 h-4" />
                                <span>{errors.displayName}</span>
                            </div>
                        )}
                        <span className="text-sm text-gray-400 mt-1 block">This appears on your profile</span>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block mb-2 font-bold">What&apos;s your date of birth?</label>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <select
                                    name="month"
                                    value={formData.month}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                                >
                                    <option value="">Month</option>
                                    {months.map((month, index) => (
                                        <option key={month} value={index + 1}>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-24">
                                <input
                                    type="number"
                                    name="day"
                                    value={formData.day}
                                    onChange={handleInputChange}
                                    placeholder="DD"
                                    min="1"
                                    max="31"
                                    className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                                />
                            </div>
                            <div className="w-24">
                                <input
                                    type="number"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
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
                                        name="gender"
                                        value={gender}
                                        checked={formData.gender === gender}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    {gender}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-black py-3 px-4 rounded-full font-bold mt-8"
                    >
                        Sign up
                    </button>

                    <p className="text-center text-gray-400 mt-4">
                        Already have an account?{' '}
                        <a href="#" className="text-white hover:underline">Log in</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SpotifySignup;