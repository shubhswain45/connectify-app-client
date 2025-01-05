import { Play, X } from 'lucide-react';
import React, { useState } from 'react'
import NowPlaying from './NowPlaying';

function MobileMiniPlayer() {
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const togglePlayer = () => {
        setIsPlayerOpen(!isPlayerOpen);
    };

    return (
        <>
            <div
                className="md:hidden fixed bottom-16 left-0 right-0 bg-gray-800 z-30 cursor-pointer"
                onClick={togglePlayer}
            >
                <div className="flex items-center justify-between p-2 border-b border-gray-700">
                    <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-gray-700 rounded"></div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-white truncate">Current Song Title</p>
                            <p className="text-xs text-gray-400 truncate">Artist Name</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-2">
                        <button
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Play size={16} className="text-black ml-0.5" />
                        </button>
                        <button
                            className="text-gray-400"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
                <div className="w-full h-1 bg-gray-700">
                    <div className="w-1/3 h-full bg-white"></div>
                </div>
            </div>

            <NowPlaying isPlayerOpen={isPlayerOpen} togglePlayer={togglePlayer} />
        </>

    )
}

export default MobileMiniPlayer