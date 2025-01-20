import React from 'react';
import { Play, MoreHorizontal, Share2, Download, Heart } from 'lucide-react';

const PlaylistPage = () => {
  const playlist = {
    name: "Chill Vibes",
    coverUrl: "/api/placeholder/300/300",
    creator: "Music Lover",
    duration: "2h 35min",
    tracks: [
      { id: 1, title: "Summer Breeze", artist: "Chill Masters", duration: "3:24", imgUrl: "/api/placeholder/40/40" },
      { id: 2, title: "Ocean Waves", artist: "Beach Tunes", duration: "4:12", imgUrl: "/api/placeholder/40/40" },
      { id: 3, title: "Mountain Air", artist: "Nature Sounds", duration: "3:45", imgUrl: "/api/placeholder/40/40" },
      { id: 4, title: "Starlight", artist: "Night Sky", duration: "3:33", imgUrl: "/api/placeholder/40/40" },
      { id: 5, title: "Forest Rain", artist: "Natural Beats", duration: "4:01", imgUrl: "/api/placeholder/40/40" },
    ]
  };

  return (
    <div className="min-h-screen text-white">
      {/* Mobile Layout (sm) */}
      <div className="md:hidden p-4">
        <div className="flex flex-col items-center">
          {/* Image - Increased size from w-60/h-60 to w-80/h-80 */}
          <img
            src={"/api/placeholder/400/400"}
            alt="Playlist Cover"
            className="w-80 h-80 shadow-lg mb-8 object-cover rounded-lg"
          />
          
          {/* Title and Creator */}
          <div className="text-left w-full mb-6">
            <h1 className="text-3xl font-bold">{playlist.name}</h1>
            <p className="text-gray-300 text-base mt-2">{playlist.creator}</p>
          </div>

          {/* Icons and Play Button */}
          <div className="flex items-center justify-between w-full mb-8">
            <div className="flex items-center space-x-6">
              <Heart className="w-7 h-7 text-gray-400 hover:text-white cursor-pointer" />
              <Share2 className="w-7 h-7 text-gray-400 hover:text-white cursor-pointer" />
              <Download className="w-7 h-7 text-gray-400 hover:text-white cursor-pointer" />
              <MoreHorizontal className="w-7 h-7 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition">
              <Play className="w-7 h-7 text-black" fill="black" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block p-6">
        {/* Header */}
        <div className="flex items-end space-x-6 mb-6">
          <img
            src={"/api/placeholder/400/400"}
            alt="Playlist Cover"
            className="w-60 h-60 shadow-lg rounded-lg"
          />
          <div className="flex-1">
            <p className="text-sm uppercase mb-2">Playlist</p>
            <h1 className="text-5xl font-bold mb-6">{playlist.name}</h1>
            <div className="flex items-center text-sm text-gray-300">
              <span className="font-bold text-white">{playlist.creator}</span>
              <span className="mx-1">•</span>
              <span>{playlist.duration}</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center space-x-6 mb-6">
          <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition">
            <Play className="w-8 h-8 text-black" fill="black" />
          </button>
          <Heart className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <Share2 className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <Download className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <MoreHorizontal className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Tracks Table (shared between mobile and desktop) */}
      <div className="px-4">
        <table className="w-full">
          <thead className="border-b border-white/10 hidden md:table-header-group">
            <tr className="text-gray-400 text-left text-sm">
              <th className="pb-2 w-12">#</th>
              <th className="pb-2">Title</th>
              <th className="pb-2">Duration</th>
              <th className="pb-2 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track, index) => (
              <tr key={track.id} className="hover:bg-white/10">
                {/* Mobile shows image, Desktop shows number */}
                <td className="py-4 w-16">
                  <div className="md:hidden">
                    <img src={"/api/placeholder/400/400"} alt={track.title} className="w-14 h-14 object-cover rounded" />
                  </div>
                  <span className="hidden md:block text-gray-400">{index + 1}</span>
                </td>
                <td className="py-4">
                  <div>
                    <p className="text-white font-medium text-base">{track.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{track.artist}</p>
                  </div>
                </td>
                <td className="py-4 text-gray-400 hidden md:table-cell">
                  {track.duration}
                </td>
                <td className="py-4 w-12 text-right">
                  <MoreHorizontal className="w-7 h-7 text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;