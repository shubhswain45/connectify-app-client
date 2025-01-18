import React from 'react';
import { Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useResetPassword } from '@/hooks/auth';

interface ResetPasswordFormData {
    newPassword: string;
    confirmPassword: string;
}

function ResetPasswordForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const router = useRouter(); // Initialize the useRouter hook
    const { token } = router.query; // Extract the token from the URL

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ResetPasswordFormData>();

    const { mutate: resetPassword, isPending } = useResetPassword()
    const newPassword = watch("newPassword");

    const onSubmit = async (data: ResetPasswordFormData) => {
        console.log('Form submitted:', data);
        // Handle password reset logic here
        resetPassword({ newPassword: data.newPassword, confirmPassword: data.confirmPassword, token: token as string })
    };

    const togglePasswordVisibility = (field: 'password' | 'confirm') => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
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
                        Reset Password
                    </h1>
                    <p className="text-gray-400 text-center">
                        Please enter your new password below.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
                    {/* New Password Field */}
                    <div className="space-y-2">
                        <label className="text-sm text-emerald-400 font-medium">
                            New Password
                        </label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                            <input
                                {...register("newPassword", {
                                    required: "New password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    },
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your new password"
                                className={`w-full bg-gray-900/50 border ${errors.newPassword ? "border-red-500" : "border-emerald-500/20"
                                    } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('password')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-400 hover:text-emerald-300"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {errors.newPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.newPassword.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                        <label className="text-sm text-emerald-400 font-medium">
                            Confirm Password
                        </label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                            <input
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: value =>
                                        value === newPassword || "Passwords do not match"
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your new password"
                                className={`w-full bg-gray-900/50 border ${errors.confirmPassword ? "border-red-500" : "border-emerald-500/20"
                                    } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirm')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-400 hover:text-emerald-300"
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.confirmPassword.message}
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
                            <span className="animate-bounce-text">Resetting Password...</span>
                        ) : (
                            "Reset Password"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordForm;