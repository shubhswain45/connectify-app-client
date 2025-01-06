import React from 'react';
import { Play, Heart, MoreHorizontal, Clock3 } from 'lucide-react';

const AlbumPage = () => {
  const albumData = {
    title: "Midnight Memories",
    artist: "The Midnight Dreams",
    year: "2024",
    coverUrl: "/api/placeholder/300/300",
    songs: [
      { 
        id: 1, 
        title: "Starlight Boulevard", 
        duration: "3:45", 
        plays: "2,345,678",
        imageUrl: "/api/placeholder/60/60"
      },
      { 
        id: 2, 
        title: "Neon Dreams", 
        duration: "4:12", 
        plays: "1,987,654",
        imageUrl: "/api/placeholder/60/60"
      },
      { 
        id: 3, 
        title: "Midnight Drive", 
        duration: "3:56", 
        plays: "1,765,432",
        imageUrl: "/api/placeholder/60/60"
      },
      { 
        id: 4, 
        title: "Electric Sky", 
        duration: "4:30", 
        plays: "1,543,210",
        imageUrl: "/api/placeholder/60/60"
      },
      { 
        id: 5, 
        title: "City Lights", 
        duration: "3:28", 
        plays: "1,234,567",
        imageUrl: "/api/placeholder/60/60"
      }
    ]
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      {/* Album Header */}
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        <img 
          src={albumData.coverUrl} 
          alt={albumData.title}
          className="w-48 h-48 md:w-64 md:h-64 shadow-2xl rounded"
        />
        
        <div className="flex flex-col justify-end">
          <span className="text-sm font-medium">Album</span>
          <h1 className="text-3xl md:text-6xl font-bold mb-4">{albumData.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <img 
              src="/api/placeholder/40/40" 
              alt="Artist" 
              className="w-6 h-6 rounded-full"
            />
            <span className="font-medium">{albumData.artist}</span>
            <span>•</span>
            <span>{albumData.year}</span>
            <span>•</span>
            <span>{albumData.songs.length} songs</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mb-8">
        <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
          <Play className="w-6 h-6 fill-current" />
        </button>
        <Heart className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
        <MoreHorizontal className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
      </div>

      {/* Songs List - Desktop View */}
      <div className="hidden md:block">
        <table className="w-full text-gray-300 text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400">
              <th className="px-4 py-2 text-left w-16">#</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Plays</th>
              <th className="px-4 py-2 text-right">
                <Clock3 className="w-4 h-4 inline-block" />
              </th>
            </tr>
          </thead>
          <tbody>
            {albumData.songs.map((song) => (
              <tr 
                key={song.id} 
                className="hover:bg-white/10 group cursor-pointer"
              >
                <td className="px-4 py-3">{song.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={song.imageUrl} 
                      alt={song.title}
                      className="w-10 h-10 rounded"
                    />
                    <span className="font-medium text-white">{song.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{song.plays}</td>
                <td className="px-4 py-3 text-right">{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Songs List - Mobile View */}
      <div className="md:hidden">
        {albumData.songs.map((song) => (
          <div 
            key={song.id}
            className="flex items-center gap-3 py-3 hover:bg-white/10 cursor-pointer border-b border-gray-800"
          >
            <span className="w-8 text-gray-400">{song.id}</span>
            <img 
              src={song.imageUrl} 
              alt={song.title}
              className="w-12 h-12 rounded"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <span className="font-medium text-white truncate">{song.title}</span>
                <span className="text-gray-400 text-sm ml-2">{song.duration}</span>
              </div>
              <span className="text-xs text-gray-400 block">{song.plays} plays</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;