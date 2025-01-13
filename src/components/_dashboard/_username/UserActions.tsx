import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';

const UserActions = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5">
            <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-10 py-4 sticky top-0 z-10 backdrop-blur-sm">
                {/* Play Button */}
                <button
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                             bg-green-500 hover:bg-green-400 
                             rounded-full flex items-center justify-center 
                             hover:scale-105 transition-all duration-200 
                             shadow-lg"
                    aria-label="Play"
                >
                    <Play 
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-1" 
                        fill="currentColor" 
                    />
                </button>
                {/* Follow Button */}
                <button
                    className="h-8 sm:h-10 lg:h-12 
                             px-6 sm:px-8 lg:px-10
                             border border-white/60 
                             rounded-full text-white 
                             hover:border-white hover:bg-white/10
                             transition-all duration-200
                             text-xs sm:text-sm lg:text-base 
                             font-medium"
                >
                    Follow
                </button>
                {/* More Options Button */}
                <button
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                             text-gray-400 hover:text-white 
                             transition-colors duration-200
                             rounded-full hover:bg-white/10
                             flex items-center justify-center"
                    aria-label="More options"
                >
                    <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </button>
            </div>
        </div>
    );
};

export default UserActions;