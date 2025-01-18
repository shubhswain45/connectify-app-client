import React, { useState } from 'react';
import { Heart, Plus } from 'lucide-react';
import CreateTrackDialog from './CreateTrackDialog';

function LikedTracksHeader() {
  const [createTrackOpen, setCreateTrackOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
        {/* Liked Songs Header */}
        <div className="group bg-gradient-to-r from-emerald-600/40 to-gray-900 p-2 sm:p-3 rounded-lg transition-all hover:from-emerald-600/50 hover:to-gray-800">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 sm:p-2.5 rounded-lg group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-white/80 truncate">Playlist</p>
              <h1 className="text-sm sm:text-base font-bold text-white truncate">Liked Songs</h1>
            </div>

            <button className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-full p-1.5 sm:p-2 hover:scale-110 transition-all">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Create Track Header */}
        <div 
          className="group bg-gray-900/50 hover:bg-gray-800/50 p-2 sm:p-3 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
          onClick={() => setCreateTrackOpen(true)}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-2 sm:p-2.5 rounded-lg group-hover:scale-105 transition-transform">
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform" />
            </div>
            
            <div className="min-w-0 flex-1">
              <h2 className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-400 truncate">Create Track</h2>
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 truncate">Add your own music</p>
            </div>

            <button className="bg-gray-800 group-hover:bg-emerald-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>
      </div>
      <CreateTrackDialog songDialogOpen={createTrackOpen} setSongDialogOpen={setCreateTrackOpen} />
    </>
  );
}

export default LikedTracksHeader;