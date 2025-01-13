import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Music, Headphones, Apple, Globe, X, Mail, Lock, User, Calendar } from 'lucide-react';
import { months } from '@/lib/constants';

interface SigninAuthModelProps {
    isOpen: boolean;
    onClose: () => void; // Assuming this is passed to close the dialog
}

function SigninpAuthModel({ isOpen, onClose }: SigninAuthModelProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-black border border-gray-800 rounded-lg p-8 w-full max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white text-center mb-6">
                        Create an account
                    </DialogTitle>
                </DialogHeader>

                <form className="space-y-4">
                    <>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Email or username</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Email or username"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="button" className="text-sm text-purple-500 hover:underline">
                                Forgot password?
                            </button>
                        </div>
                    </>

                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white rounded-full py-3 px-4 font-semibold hover:bg-purple-600 transition mt-4"
                    >
                        Sign In
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default SigninpAuthModel;
