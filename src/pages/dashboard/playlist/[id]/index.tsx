import React from 'react';
import { Play, Heart, MoreHorizontal, Clock3 } from 'lucide-react';
import Image from 'next/image';

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
    <div className="min-h-screen text-white p-0 md:p-8">
      {/* Album Header */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
        <Image
          src={"https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png"}
          alt={albumData.title}
          className="w-40 h-40 md:w-64 md:h-64 shadow-2xl rounded object-cover"
          height={100}
          width={100}
        />

        <div className="flex flex-col justify-end">
          <span className="text-base font-medium">Album</span>
          <h1 className="text-2xl md:text-6xl font-bold mb-2">{albumData.title}</h1>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
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
      <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
          <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        </button>
        <Heart className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-white cursor-pointer" />
        <MoreHorizontal className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-white cursor-pointer" />
      </div>

      {/* Songs List - Desktop View */}
      <div className="hidden md:block">
        <table className="w-full text-gray-300 text-base">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400">
              <th className="px-2 py-2 text-left w-16">#</th>
              <th className="px-2 py-2 text-left">Title</th>
              <th className="px-2 py-2 text-left">Plays</th>
              <th className="px-2 py-2 text-right">
                <Clock3 className="w-4 h-4 inline-block" />
              </th>
            </tr>
          </thead>
          <tbody>
            {albumData.songs.map((song) => (
              <tr
                key={song.id}
                className="hover:bg-white/10 group cursor-pointer border-b border-gray-800/30"
              >
                <td className="px-2 py-2">{song.id}</td>
                <td className="px-2 py-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={"https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png"}
                      alt={song.title}
                      className="w-10 h-10 rounded object-cover"
                      width={100}
                      height={100}
                    />
                    <span className="font-medium text-white">{song.title}</span>
                  </div>
                </td>
                <td className="px-2 py-2">{song.plays}</td>
                <td className="px-2 py-2 text-right">{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Songs List - Mobile View */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center px-2 py-2 text-sm text-gray-400 border-b border-gray-800">
          <span className="w-8">#</span>
          <span className="flex-1 px-2">Title</span>
          <Clock3 className="w-4 h-4" />
        </div>

        {/* Mobile Song List */}
        <div className="space-y-0">
          {albumData.songs.map((song) => (
            <div
              key={song.id}
              className="flex items-center gap-2 py-2 hover:bg-white/10 cursor-pointer border-b border-gray-800/30"
            >
              <span className="w-8 text-gray-400 text-sm">{song.id}</span>
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <Image
                  src={"https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png"}
                  alt={song.title}
                  className="w-10 h-10 rounded object-cover"
                  width={100}
                  height={100}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-base truncate">{song.title}</div>
                  <div className="text-sm text-gray-400">{song.plays} plays</div>
                </div>
              </div>
              <span className="text-sm text-gray-400 pl-2">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;