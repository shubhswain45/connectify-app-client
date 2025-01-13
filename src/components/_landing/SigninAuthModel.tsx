import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Lock, Headphones } from 'lucide-react';
import { useForm } from "react-hook-form";
import { useLoginUser } from '@/hooks/auth';

interface SigninFormData {
    usernameOrEmail: string;
    password: string;
}

interface SigninAuthModelProps {
    isOpen: boolean;
    onClose: () => void;
}

function SigninAuthModel({ isOpen, onClose }: SigninAuthModelProps) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SigninFormData>();

    const { mutateAsync: loginUser, isPending } = useLoginUser()

    const onSubmit = async (data: SigninFormData) => {
        console.log('Form submitted:', data);
        // Handle sign in logic here
        await loginUser(data)
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
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Sign In
                        </span>
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-emerald-400 font-medium">
                            Email or username
                        </label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                            <input
                                {...register("usernameOrEmail", {
                                    required: "Email or username is required"
                                })}
                                type="text"
                                placeholder="Enter your email or username"
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

                    <div className="space-y-2">
                        <label className="text-sm text-emerald-400 font-medium">
                            Password
                        </label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-6 h-6" />
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                type="password"
                                placeholder="Enter your password"
                                className={`w-full bg-gray-900/50 border ${errors.password ? "border-red-500" : "border-emerald-500/20"
                                    } rounded-lg py-3 px-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 backdrop-blur-sm transition-all duration-300`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg py-3 px-4 font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <span className="animate-bounce-text">Signing in...</span>
                        ) : (
                            "Sign in"
                        )}
                    </button>

                </form>
            </DialogContent>
        </Dialog>
    );
}

export default SigninAuthModel;