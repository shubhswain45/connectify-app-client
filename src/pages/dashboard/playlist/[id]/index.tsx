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
    <div className="min-h-scree text-white">
      {/* Mobile Layout (sm) */}
      <div className="md:hidden p-0">
        <div className="flex flex-col items-center">
          {/* Image */}
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA1xoHjwgaUQRbR2ijwtqLkVNU4xcJ0Rndg&s"}
            alt="Playlist Cover"
            className="w-60 h-60 shadow-lg mb-6 object-cover"
          />
          
          {/* Title and Creator */}
          <div className="text-left w-full mb-4">
            <h1 className="text-2xl font-bold">{playlist.name}</h1>
            <p className="text-gray-300 text-sm mt-1">{playlist.creator}</p>
          </div>

          {/* Icons and Play Button */}
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Share2 className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Download className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <MoreHorizontal className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition">
              <Play className="w-6 h-6 text-black" fill="black" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block p-0">
        {/* Header */}
        <div className="flex items-end space-x-6 mb-6">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA1xoHjwgaUQRbR2ijwtqLkVNU4xcJ0Rndg&s"}
            alt="Playlist Cover"
            className="w-60 h-60 shadow-lg"
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
      <div className="px-0">
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
                <td className="py-3 w-16">
                  <div className="md:hidden">
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA1xoHjwgaUQRbR2ijwtqLkVNU4xcJ0Rndg&s"} alt={track.title} className="w-14 h-14 object-cover rounded" />
                  </div>
                  <span className="hidden md:block text-gray-400">{index + 1}</span>
                </td>
                <td className="py-3">
                  <div>
                    <p className="text-white font-medium">{track.title}</p>
                    <p className="text-sm text-gray-400">{track.artist}</p>
                  </div>
                </td>
                <td className="py-3 text-gray-400 hidden md:table-cell">
                  {track.duration}
                </td>
                <td className="py-3 w-12 text-right">
                  <MoreHorizontal className="w-6 h-6 text-gray-400 cursor-pointer" />
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