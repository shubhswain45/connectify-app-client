import { Heart, Play, Repeat, SkipBack, SkipForward, Volume2, ListMusic, Rewind, FastForward } from 'lucide-react'
import React from 'react'

function DesktopPlaybackFooter() {
    return (
        <footer
            className="hidden md:flex h-20 bg-gray-900 border-t border-gray-800 px-4 items-center justify-between fixed bottom-0 left-0 right-0 cursor-pointer z-30"
        >
            <div className="flex items-center gap-4 w-1/3">
                <div className="w-14 h-14 bg-gray-800 rounded"></div>
                <div>
                    <p className="text-sm font-semibold text-white">Song Title</p>
                    <p className="text-xs text-gray-400">Artist</p>
                </div>
                <Heart size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>

            <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="flex items-center gap-6">
                    <SkipBack size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Rewind size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <button
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105"
                    >
                        <Play size={20} className="text-black ml-0.5" />
                    </button>
                    <FastForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <SkipForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full">
                    <div className="w-1/3 h-full bg-white hover:bg-green-500 rounded-full"></div>
                </div>
            </div>

            <div className="flex items-center gap-4 w-1/3 justify-end">
                <ListMusic size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                <Repeat size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                <div className="flex items-center gap-2">
                    <Volume2 size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <div className="w-24 h-1 bg-gray-800 rounded-full">
                        <div className="w-1/2 h-full bg-white hover:bg-green-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default DesktopPlaybackFooter