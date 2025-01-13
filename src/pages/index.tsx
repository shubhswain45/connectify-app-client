import React, { useState } from 'react';
import { Music, Headphones, Apple, Globe, X, Mail, Lock, User, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import SignupAuthModel from '@/components/_landing/SignupAuthModel';
import SigninpAuthModel from '@/components/_landing/SigninAuthModel';

const SignupPage = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState({
    day: '',
    month: '',
    year: ''
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-black text-white flex flex-col md:flex-row">
      {/* Left section with logo */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8 space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent blur-3xl"></div>
        <Headphones className="w-32 h-32 md:w-64 md:h-64 text-emerald-400 relative z-10" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent relative z-10">
          Connectify
        </h1>
        <p className="text-xl text-gray-300 text-center relative z-10">Your universal music companion</p>
      </div>
      
      {/* Right section with signup form */}
      <div className="md:w-1/2 p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 via-transparent to-transparent blur-3xl"></div>
        <div className="max-w-md mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Music Awaits
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-200">
            Start your journey today.
          </h2>
          
          {/* Sign up buttons */}
          <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg py-3 px-4 font-semibold flex items-center justify-center gap-2 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/25">
              <Music className="w-5 h-5" />
              Continue with Spotify
            </button>
            
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-emerald-500/20 flex-1"></div>
              <span className="text-gray-400">or</span>
              <div className="h-px bg-emerald-500/20 flex-1"></div>
            </div>
            
            <button 
              onClick={() => setShowSignUpModal(true)}
              className="w-full bg-gray-900/80 border border-emerald-500/20 text-white rounded-lg py-3 px-4 font-semibold hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-500/40"
            >
              Create new account
            </button>
            
            <p className="text-xs text-gray-400 mt-2">
              By signing up, you agree to Connectify's Terms of Service and Privacy Policy, including our Cookie Policy.
            </p>
          </div>
          
          {/* Features preview */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-gray-300 group hover:text-emerald-400 transition-colors duration-300">
              <Music className="w-5 h-5" />
              <span>Access millions of songs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 group hover:text-emerald-400 transition-colors duration-300">
              <Globe className="w-5 h-5" />
              <span>Connect with music lovers worldwide</span>
            </div>
          </div>
          
          {/* Sign in section */}
          <div className="mt-12">
            <h3 className="font-bold mb-4 text-gray-200">Already a member?</h3>
            <button 
              onClick={() => setShowSignInModal(true)}
              className="w-full border border-emerald-500/20 text-emerald-400 rounded-lg py-3 px-4 font-semibold hover:bg-emerald-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SignupAuthModel isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)}/>
      <SigninpAuthModel isOpen={showSignInModal} onClose={() => setShowSignInModal(false)}/>
    </div>
  );
};

export default SignupPage;