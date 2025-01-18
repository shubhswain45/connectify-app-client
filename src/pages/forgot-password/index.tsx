import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useForgotPassword } from '@/hooks/auth';

interface ForgotPasswordFormData {
    usernameOrEmail: string;
}

function ForgotPasswordForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>();

    const { mutate: forgotPassword, isPending } = useForgotPassword();

    const onSubmit = async (data: ForgotPasswordFormData) => {
        forgotPassword(data.usernameOrEmail);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="w-full max-w-md space-y-8 bg-gradient-to-br from-gray-900 to-black border border-emerald-500/20 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
                {/* Back Button */}
                <Link
                    href="/login"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                </Link>

                {/* Header Section */}
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                        Forgot Password
                    </h1>
                    <p className="text-gray-400 text-center">
                        Enter your Username Or Email address and we'll send you instructions to reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
                    <div className="space-y-2">
                        <label className="text-sm text-emerald-400 font-medium">
                            Username Or Email
                        </label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                            <input
                                {...register("usernameOrEmail", {
                                    required: "Username or Email is required",
                                })}
                                type="text"
                                placeholder="Enter your Username or Email"
                                className={`w-full bg-gray-900/50 border ${errors.usernameOrEmail ? "border-red-500" : "border-emerald-500/20"
                                    } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                            />
                            {errors.usernameOrEmail && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.usernameOrEmail.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg py-3 px-4 font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <span className="animate-bounce-text">Sending Instructions...</span>
                        ) : (
                            "Send Reset Instructions"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;
