import { ChevronDown, Maximize2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import React from 'react'

function NowPlaying({isPlayerOpen,togglePlayer }: {isPlayerOpen: boolean, togglePlayer: () => void}) {
  return (
    <div
    className={`fixed inset-0 bg-gradient-to-b from-gray-800 to-gray-900 z-50 transition-transform duration-500 ease-in-out ${isPlayerOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
  >
    <div className="h-full overflow-y-auto">
      <div className="min-h-full flex flex-col px-4 md:px-8 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={togglePlayer}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
          <h2 className="text-white text-sm font-bold">Now Playing</h2>
          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <Maximize2 size={24} className="text-white" />
          </button>
        </div>

        {/* Album Art */}
        <div className="aspect-square w-full max-w-[400px] mx-auto mb-6">
          <div className="w-full h-full bg-gray-800 rounded-md shadow-2xl"></div>
        </div>

        {/* Track Info - Closer to album art */}
        <div className="mb-5">
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Song Title</h3>
            <p className="text-gray-400 text-sm md:text-base">Artist Name</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-1 bg-gray-800 rounded-full mb-2">
            <div className="w-1/3 h-full bg-white hover:bg-green-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>

        {/* Controls - Closer to progress bar */}
        <div className="flex flex-col items-center gap-6">
          {/* Main Controls */}
          <div className="flex items-center justify-center w-full max-w-md gap-6">
            <Shuffle size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <SkipBack size={28} className="text-white hover:scale-105 cursor-pointer" />
            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-105">
              <Play size={28} className="text-black ml-1" />
            </button>
            <SkipForward size={28} className="text-white hover:scale-105 cursor-pointer" />
            <Repeat size={20} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 w-full max-w-md">
            <Volume2 size={20} className="text-gray-400" />
            <div className="flex-1 h-1 bg-gray-800 rounded-full">
              <div className="w-1/2 h-full bg-white hover:bg-green-500 rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NowPlaying