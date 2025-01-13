import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, User, Lock, Headphones, Chrome } from "lucide-react";
import { useSignupUser, useVerifyEmail } from "@/hooks/auth";
import { useForm } from "react-hook-form";

interface SignupFormData {
    email: string;
    username: string;
    fullName: string;
    password: string;
    token: string;
}

interface SignupAuthModelProps {
    isOpen: boolean;
    onClose: () => void;
}

function SignupAuthModel({ isOpen, onClose }: SignupAuthModelProps) {
    const [isSignupForm, setIsSignupForm] = useState(true);
    const { mutateAsync: signupUser, isPending: isSignupingUser } = useSignupUser();
    const { mutateAsync: verifyEmail, isPending: isVerifingEmail } = useVerifyEmail();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SignupFormData>();

    const onSubmit = async (data: SignupFormData) => {
        if (isSignupForm) {
            const isSignupSuccessful = await signupUser({
                email: data.email,
                username: data.username,
            });
            if (isSignupSuccessful) {
                setIsSignupForm(false);
            }
        } else {
            await verifyEmail(data);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/20 rounded-xl p-8 w-full max-w-md overflow-y-auto max-h-[80vh] shadow-2xl backdrop-blur-sm">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <Headphones className="w-16 h-16 text-emerald-400 mb-2" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        Connectify
                    </h1>
                </div>

                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-white text-center mb-6">
                        {isSignupForm ? (
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Create Account
                            </span>
                        ) : (
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Verify Email
                            </span>
                        )}
                    </DialogTitle>
                </DialogHeader>

                {isSignupForm && (
                    <div className="space-y-4 mb-6">
                        <button className="w-full bg-white text-gray-800 rounded-lg py-3 px-4 font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                            <Chrome className="w-5 h-5 text-blue-500" />
                            Continue with Google
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-emerald-500/20"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gradient-to-br from-gray-900 to-black text-gray-400">
                                    OR
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {isSignupForm ? (
                        <>
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-sm text-emerald-400 font-medium">Email address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                                    <input
                                        {...register("email", { required: "Email is required" })}
                                        type="text"
                                        placeholder="Enter your email"
                                        className={`w-full bg-gray-900/50 border ${errors.email ? "border-red-500" : "border-emerald-500/20"
                                            } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Username Field */}
                            <div className="space-y-2">
                                <label className="text-sm text-emerald-400 font-medium">Username</label>
                                <div className="relative group">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                                    <input
                                        {...register("username", { required: "Username is required" })}
                                        type="text"
                                        placeholder="Create a username"
                                        className={`w-full bg-gray-900/50 border ${errors.username ? "border-red-500" : "border-emerald-500/20"
                                            } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                                    />
                                    {errors.username && (
                                        <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Full Name Field */}
                            <div className="space-y-2">
                                <label className="text-sm text-emerald-400 font-medium">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                                    <input
                                        {...register("fullName", { required: "Full name is required" })}
                                        type="text"
                                        placeholder="Enter your full name"
                                        className={`w-full bg-gray-900/50 border ${errors.fullName ? "border-red-500" : "border-emerald-500/20"
                                            } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label className="text-sm text-emerald-400 font-medium">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                                    <input
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                                        })}
                                        type="password"
                                        placeholder="Create a password"
                                        className={`w-full bg-gray-900/50 border ${errors.password ? "border-red-500" : "border-emerald-500/20"
                                            } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Token Field */}
                            <p className="text-gray-300 text-center">
                                A verification email has been sent to your email address. Enter the token below to verify your account.
                            </p>
                            <div className="space-y-2">
                                <label className="text-sm text-emerald-400 font-medium">Verification Token</label>
                                <input
                                    {...register("token", { required: "Token is required" })}
                                    type="text"
                                    placeholder="Enter verification token"
                                    className={`w-full bg-gray-900/50 border ${errors.token ? "border-red-500" : "border-emerald-500/20"
                                        } rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                                />
                                {errors.token && (
                                    <p className="text-red-500 text-xs mt-1">{errors.token.message}</p>
                                )}
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg py-3 px-4 font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25"
                        disabled={isSignupForm ? isSignupingUser : isVerifingEmail}
                    >
                        {isSignupForm
                            ? isSignupingUser
                                ? <span className="animate-bounce-text">Creating Account...</span>
                                : "Create Account"
                            : isVerifingEmail
                                ? <span className="animate-bounce-text">Verifying Email...</span>
                                : "Verify Email"}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default SignupAuthModel;